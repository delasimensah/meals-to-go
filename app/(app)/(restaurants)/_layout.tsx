import { Stack } from "expo-router";

const RestaurantsLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerBackTitleVisible: false,
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />

      <Stack.Screen
        name="restaurant/[id]"
        options={{
          presentation: "modal",
        }}
      />
    </Stack>
  );
};

export default RestaurantsLayout;
