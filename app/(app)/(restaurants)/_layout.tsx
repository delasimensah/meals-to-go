import { Stack } from "expo-router";

const RestaurantsLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Restaurants",
        }}
      />
    </Stack>
  );
};

export default RestaurantsLayout;
