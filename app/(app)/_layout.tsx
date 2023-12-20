import { Ionicons } from "@expo/vector-icons";
import { Tabs, Redirect } from "expo-router";

import { useLocation } from "@/hooks/use-location";
import { useRestaurants } from "@/hooks/use-restaurants";
import { useSession } from "@/hooks/use-session-store";
import { useAppTheme } from "@/lib/paperTheme";

const getTabBarIcon = (
  name: "md-restaurant" | "md-cart" | "md-map" | "md-settings",
) => {
  return ({
    color,
    size,
  }: {
    color: string;
    size: number;
    focused: boolean;
  }) => {
    return <Ionicons name={name} color={color} size={size} />;
  };
};

const AppLayout = () => {
  const { session } = useSession();
  const theme = useAppTheme();

  useLocation();
  useRestaurants();

  if (!session) {
    return <Redirect href="\(auth)" />;
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.brand.primary,
        tabBarInactiveTintColor: theme.colors.brand.muted,
      }}
    >
      <Tabs.Screen
        name="(restaurants)"
        options={{
          title: "Restaurants",
          tabBarIcon: getTabBarIcon("md-restaurant"),
        }}
      />

      <Tabs.Screen
        name="checkout"
        options={{
          title: "Checkout",
          tabBarIcon: getTabBarIcon("md-cart"),
        }}
      />

      <Tabs.Screen
        name="map"
        options={{
          title: "Map",
          tabBarIcon: getTabBarIcon("md-map"),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: getTabBarIcon("md-settings"),
        }}
      />
    </Tabs>
  );
};

export default AppLayout;
