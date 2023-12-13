import TopContainer from "components/layouts/TopContainer";
import { Flowbite } from "flowbite-react";
import "../styles/globals.css";
import TopBar from "components/layouts/TopBar";
import { Provider } from "react-redux";
import { store } from "./api/redux-toolkit/store";
import { Toaster } from "react-hot-toast";
//import { customFlowbiteTheme } from 'theme/flowbite-theme';

export default function App({ Component, pageProps }) {
  const customFlowbiteTheme = {
    button: {
      color: {
        primary: "bg-primary-500 hover:bg-primary-600 text-white font-bold",
        primaryLow:
          "bg-primary-50 border-primary-400 border-2 hover:bg-primary-200 text-zinc-600 font-bold",
        secondary:
          "bg-secondary-950 hover:bg-secondary-900 text-white font-bold",
        secondaryLow:
          "bg-secondary-50 border-secondary-400 border-2 hover:bg-secondary-200 text-zinc-600 font-bold",
        ternary: "bg-ternary-500 hover:bg-ternary-600 text-white font-bold",
      },
    },
    checkbox: {
      root: {
        base: "h-4 w-4 rounded focus:ring-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 bg-gray-100",
        color: {
          primary:
            "focus:ring-primary-400 dark:ring-offset-primary-400 dark:focus:ring-primary-400 text-primary-400",
          secondary:
            "focus:ring-secondary-400 dark:ring-offset-secondary-400 dark:focus:ring-secondary-400 text-secondary-400",
          ternary:
            "focus:ring-ternary-400 dark:ring-offset-ternary-400 dark:focus:ring-ternary-400 text-ternary-400",
        },
      },
    },
  };

  return (
    <Provider store={store}>
      <Flowbite theme={{ theme: customFlowbiteTheme }}>
        <TopContainer />
        <TopBar />
        <div className="absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 w-[95%] md:w-[calc(100%-173px)] h-[calc(100%-180px)] max-w-[1600px] mx-[auto] my-[0]">
          <div className="flex flex-row justify-between h-full">
            <Component {...pageProps} />
          </div>
        </div>
      </Flowbite>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          success: {
            duration: 2500,
            style: {
              // background: '#B1ECB1',
              background: "#22c55e",
              color: "#fff",
              fontWeight: 500,
            },
          },

          error: {
            duration: 2500,
            style: {
              // background: '#B1ECB1',
              background: "#f87171",
              color: "#fff",
              fontWeight: 500,
            },
          },
          custom: {
            duration: 2500,
            style: {
              // background: '#B1ECB1',
              background: "#facc15",
              color: "#fff",
              fontWeight: 500,
            },
          },
        }}
      />
    </Provider>
  );
}
