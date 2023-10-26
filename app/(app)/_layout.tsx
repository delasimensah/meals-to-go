import { Ionicons } from "@expo/vector-icons";
import { Tabs, Redirect } from "expo-router";

import { useSession } from "@/hooks/use-session-store";

const AppLayout = () => {
  const { session } = useSession();

  if (!session) {
    return <Redirect href="\login" />;
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
