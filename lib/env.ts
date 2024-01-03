import { Platform } from "react-native";

export const isAndroid = Platform.OS === "android";
export const isDevelopment = process.env.NODE_ENV === "development";
export const isMock = true;

// export const host =
//   !isDevelopment || isAndroid
//     ? process.env.EXPO_PUBLIC_PROD_URL
//     : process.env.EXPO_PUBLIC_DEV_URL;

export const host = process.env.EXPO_PUBLIC_PROD_URL!;
