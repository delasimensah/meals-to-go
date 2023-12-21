import { router } from "expo-router";
import { View, Text, Pressable } from "react-native";

import { useAuthStore } from "@/hooks/zustand/use-auth-store";

const SettingsScreen = () => {
  const { logout } = useAuthStore();

  return (
    <View className="flex-1 items-center justify-center">
      <Text>Settings</Text>
      <Pressable
        onPress={() => {
          logout();
          router.replace("/(auth)");
        }}
      >
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
};

export default SettingsScreen;
