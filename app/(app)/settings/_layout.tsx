import { Stack } from "expo-router";

import { useAppTheme } from "@/lib/paperTheme";

const SettingsLayout = () => {
  const { colors } = useAppTheme();
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Settings",
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="favourites"
        options={{
          title: "Favourites",
          headerTintColor: colors.brand.primary,
          headerTitleStyle: {
            color: colors.text.primary,
          },
        }}
      />
    </Stack>
  );
};

export default SettingsLayout;
