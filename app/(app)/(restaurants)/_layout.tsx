import { Stack } from "expo-router";

export const unstable_settings = {
  initialRouteName: "index",
};

const RestaurantsLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />

      <Stack.Screen
        name="restaurant/[name]"
        options={{
          presentation: "containedModal",
        }}
      />
    </Stack>
  );
};

export default RestaurantsLayout;
