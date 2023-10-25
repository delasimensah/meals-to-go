import { Ionicons } from "@expo/vector-icons";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import { Tabs, SplashScreen } from "expo-router";
import { useEffect } from "react";

export { ErrorBoundary } from "expo-router";

// /
// /retaurants/detail

// /checkout
// /checkout/success
// /checkout/error

// /map

// /settings
// /settings/favourites

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
        tabBarActiveTintColor: "#2f95dc",
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
            <Ionicons name="md-restaurant" color={color} size={28} />
          ),
        }}
      />

      <Tabs.Screen
        name="map"
        options={{
          title: "Map",
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-restaurant" color={color} size={28} />
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-restaurant" color={color} size={28} />
          ),
        }}
      />
    </Tabs>
  );
};

export default AppLayout;
