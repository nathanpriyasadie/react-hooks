export interface ThemeColor {
  background: string;
  primary: string;
  secondary: string;
  danger: string;
}

const darkTheme: ThemeColor = {
  background: "#303030",
  primary: "#ffffff",
  secondary: "#ffffff",
  danger: "#ff1f0f",
};

const lightTheme: ThemeColor = {
  background: "#ffffff",
  primary: "#303030",
  secondary: "#d1d1d1",
  danger: "#ff1f0f",
};

export { darkTheme, lightTheme };
