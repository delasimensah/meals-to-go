import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { Slot, SplashScreen } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { PaperProvider } from "react-native-paper";

import { paperTheme } from "@/lib/paperTheme";

export { ErrorBoundary } from "expo-router";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [oswaldLoaded, oswaldError] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded, latoError] = useLato({
    Lato_400Regular,
  });

  useEffect(() => {
    if (oswaldError || latoError) throw new Error("Error loading fonts");
  }, [oswaldError, latoError]);

  useEffect(() => {
    if (oswaldLoaded && latoLoaded) {
      SplashScreen.hideAsync();
    }
  }, [oswaldLoaded, latoLoaded]);

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="auto" />

      <PaperProvider theme={paperTheme}>
        <Slot />
      </PaperProvider>
    </>
  );
};

export default RootLayout;
