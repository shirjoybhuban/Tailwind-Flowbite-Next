import TopContainer from "components/layouts/TopContainer";
import { Flowbite } from "flowbite-react";
import "../styles/globals.css";
import TopBar from "components/layouts/TopBar";
import { Provider } from "react-redux";
import { store } from "./api/redux-toolkit/store";
import { Toaster } from "react-hot-toast";
import { customFlowbiteTheme } from "utility/customFlowbiteTheme";
//import { customFlowbiteTheme } from 'theme/flowbite-theme';

export default function App({ Component, pageProps }) {
 
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
            duration: 3500,
            style: {
              background: "#c0f3bf",
              color: "#000000",
              fontWeight: 500,
            },
          },
          error: {
            duration: 3500,
            style: {
              background: "rgb(254 202 202)",
              color: "#000000",
              fontWeight: 500,
            },
          },
          custom: {
            duration: 3500,
            style: {
              background: "rgb(254 249 195)",
              color: "#000000",
              fontWeight: 500,
            },
          },
        }}
      />
    </Provider>
  );
}
