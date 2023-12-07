import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { Slot, SplashScreen } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";

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
  }, [oswaldLoaded]);

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="auto" />

      <Slot />
    </>
  );
};

export default RootLayout;
