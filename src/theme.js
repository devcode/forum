import { theme } from "@chakra-ui/core";

console.log(theme.colors);

const customTheme = {
  ...theme,
  fonts: {
    heading: "Passion One",
    body: "Poppins",
    mono: "Menlo, monospace",
  },
  colors: {
    ...theme.colors,
    gunmetal: {
      300: "#212832",
    },
    azure: {
      300: "#EEFCFA",
    },
    celeste: {
      300: "#C1F6EC",
    },
    turquoise: {
      300: "#31E1C4",
    },
  },
};

export default customTheme;
