import '../styles/globals.css';
import { Flowbite } from 'flowbite-react';

const customTheme = {
  button: {
    color: {
      primary: 'bg-primary-500 hover:bg-primary-600 text-white font-bold',
      primaryLow: 'bg-primary-50 border-primary-400 border-2 hover:bg-primary-200 text-zinc-600 font-bold',
      secondary: 'bg-secondary-900 hover:bg-secondary-950 text-white font-bold',
      secondaryLow: 'bg-secondary-50 border-secondary-400 border-2 hover:bg-secondary-200 text-zinc-600 font-bold',
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
    <Flowbite theme={{ theme: customTheme }}>
      <Component {...pageProps} />
    </Flowbite>
  );
}
