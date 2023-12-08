import TopContainer from 'components/layouts/TopContainer';
import { Flowbite } from 'flowbite-react';
import '../styles/globals.css';
import TopBar from 'components/layouts/TopBar';
import { Provider } from 'react-redux';
import { store } from './api/redux-toolkit/store';

const customTheme = {
  button: {
    color: {
      primary: 'bg-primary-500 hover:bg-primary-600 text-white font-bold',
      primaryLow:
        'bg-primary-50 border-primary-400 border-2 hover:bg-primary-200 text-zinc-600 font-bold',
      secondary: 'bg-secondary-950 hover:bg-secondary-900 text-white font-bold',
      secondaryLow:
        'bg-secondary-50 border-secondary-400 border-2 hover:bg-secondary-200 text-zinc-600 font-bold',
      ternary: 'bg-ternary-500 hover:bg-ternary-600 text-white font-bold',
    },
  },
  checkbox: {
    color: {
      primary: 'text-cyan-500',
    },
  },
};

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Flowbite theme={{ theme: customTheme }}>
        <TopContainer />
        <TopBar />
        <div className="absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-173px)] h-[calc(100%-180px)] max-w-[1600px] mx-[auto] my-[0] z-1">
          <div className="flex flex-row justify-between h-full">
            <Component {...pageProps} />
          </div>
        </div>
      </Flowbite>
    </Provider>
  );
}
