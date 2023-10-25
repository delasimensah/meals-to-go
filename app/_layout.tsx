import { Ionicons } from "@expo/vector-icons";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import { Tabs, SplashScreen } from "expo-router";
import { useEffect } from "react";

export { ErrorBoundary } from "expo-router";

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
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="(restaurants)"
        options={{
          title: "Restaurants",
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-restaurant" color={color} size={28} />
          ),
        }}
      />

      <Tabs.Screen
        name="checkout"
        options={{
          title: "Checkout",
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-cart" color={color} size={28} />
          ),
        }}
      />

      <Tabs.Screen
        name="map"
        options={{
          title: "Map",
          headerShown: true,
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-map" color={color} size={28} />
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-settings" color={color} size={28} />
          ),
        }}
      />
    </Tabs>
  );
};

export default AppLayout;
