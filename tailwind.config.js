
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
    "./views/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}", "node_modules/flowbite-react/lib/**/*.js"],
  theme: {
    extend: {
      colors: {
        'primary': {
          '50': '#f2fcf1',
          '100': '#defade',
          '200': '#c0f3bf',
          '300': '#8fe78e',
          '400': '#55d355',
          '500': '#32cb32',
          '600': '#209920',
          '700': '#1d781e',
          '800': '#1c5f1c',
          '900': '#194e1a',
          '950': '#082b0a',
        },
        'secondary': {
          '50': '#f2f5ff',
          '100': '#e7eaff',
          '200': '#d3dbff',
          '300': '#afb9ff',
          '400': '#828dff',
          '500': '#5058ff',
          '600': '#2f2cfb',
          '700': '#221ae7',
          '800': '#1b15c2',
          '900': '#19139f',
          '950': '#08085e',
        },
        'ternary': {
          '50': '#fafafa',
          '100': '#f3f4f4',
          '200': '#e9eaeb',
          '300': '#d7d9db',
          '400': '#bec0c2',
          '500': '#9ea2a5',
          '600': '#8b8f92',
          '700': '#74797c',
          '800': '#626467',
          '900': '#4f5154',
          '950': '#343537',
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ]
}
