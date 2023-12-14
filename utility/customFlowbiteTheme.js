export const customFlowbiteTheme = {
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
    radio: {
      root: {
        base: "h-4 w-4 border border-primary-300 focus:ring-2 focus:ring-primary-500 dark:border-primary-600 dark:bg-primary-700 dark:focus:bg-primary-600 dark:focus:ring-primary-600 text-primary-500",
      },
    },
    spinner: {
      base: "inline animate-spin text-gray-200",
      color: {
        failure: "fill-red-600",
        gray: "fill-gray-600",
        info: "fill-cyan-600",
        pink: "fill-pink-600",
        purple: "fill-purple-600",
        success: "fill-primary-500",
        warning: "fill-yellow-400",
        primary:'fill-[#f14e0d]',
        secondary:'fill-secondary-400',
        ternary:'fill-ternary-400'
      },
      
    },
  };
