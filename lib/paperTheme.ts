import { MD3LightTheme as DefaultTheme, useTheme } from "react-native-paper";

export const paperTheme = {
  ...DefaultTheme,
  roundness: 1,
  colors: {
    ...DefaultTheme.colors,
    primary: "#696AC3",
    brand: {
      primary: "#696AC3",
      secondary: "#5D6CC6",
      muted: "#C6DAF7",
    },
    ui: {
      primary: "#262626",
      secondary: "#757575",
      tertiary: "#F1F1F1",
      quaternary: "#FFFFFF",
      disabled: "#DEDEDE",
      error: "#D0421B",
      success: "#138000",
    },
    bg: {
      primary: "#FFFFFF",
      secondary: "#F1F1F1",
    },
    text: {
      primary: "#262626",
      secondary: "#757575",
      disabled: "#9C9C9C",
      inverse: "#FFFFFF",
      error: "#D0421B",
      success: "#138000",
    },
  },
};

export type AppTheme = typeof paperTheme;

export const useAppTheme = () => useTheme<AppTheme>();
