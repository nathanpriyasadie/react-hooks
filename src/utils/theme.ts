export interface ThemeColor {
  background: string;
  primary: string;
  danger: string;
}

const darkTheme: ThemeColor = {
  background: "#303030",
  primary: "#ffffff",
  danger: "#ff1f0f",
};

const lightTheme: ThemeColor = {
  background: "#ffffff",
  primary: "#303030",
  danger: "#ff1f0f",
};

export { darkTheme, lightTheme };
