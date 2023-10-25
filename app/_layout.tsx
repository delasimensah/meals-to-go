import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import { Stack, SplashScreen } from "expo-router";
import { useEffect } from "react";

export { ErrorBoundary } from "expo-router";

SplashScreen.preventAutoHideAsync();

const AppLayout = () => {
  const [loaded, error] = useFonts({
    Inter_900Black,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="modal" options={{ presentation: "modal" }} />
    </Stack>
  );
};

export default AppLayout;
