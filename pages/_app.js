import '../styles/globals.css';
import { Flowbite } from 'flowbite-react';


const customTheme = {
  button: {
    color: {
      primary: 'bg-primary-500 hover:bg-primary-600 text-white font-bold',
      secondary: 'bg-secondary-900 hover:bg-secondary-950 text-white font-bold',
      ternary: 'bg-ternary-500 hover:bg-ternary-600 text-white font-bold',
    },
  },
      input: {
        color: {
          failure: "border-green-500",
        }
      }

}

export default function App({ Component, pageProps }) {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Component {...pageProps} />
    </Flowbite>
  )
}
