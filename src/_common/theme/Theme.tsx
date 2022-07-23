import { ThemeProvider } from "styled-components";

interface IColors {
  bg_color_light: string
  bg_color_dark: string
  bg_button_color_light: string
  bg_button_color_gray: string
  bg_button_color_dark: string
  font_color_dark: string
  font_color_gray: string
  font_color_white: string
}

interface IFonts {
  family: string
}

interface IFontsSizes {
  small: string
  medium: string
  large: string
}

interface ITheme {
  colors: IColors
  fonts: IFonts
  fontsSizes: IFontsSizes
}

const theme = {
  colors: {
    bg_color_light: "#fffdf9",
    bg_color_dark: "#030303",
    bg_button_color_light: "#ffffff",
    bg_button_color_gray: "#a4a4a4",
    bg_button_color_dark: "#030303",
    font_color_dark: "#333333",
    font_color_gray: "#a4a4a4",
    font_color_white: "#ffffff",
  },
  fonts: {
    family: "Poppins"
  },
  fontsSizes: {
    small: "14px",
    medium: "16px",
    large: "48px",
  },
} as ITheme;

const Theme = ({ children } : any) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
