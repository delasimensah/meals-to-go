import { View, Text, Pressable } from "react-native";

import { useAuthStore } from "@/hooks/zustand/use-auth-store";
import { firebaseLogout } from "@/lib/firebase/auth";

const SettingsScreen = () => {
  const { setUser } = useAuthStore();

  return (
    <View className="flex-1 items-center justify-center">
      <Text>Settings</Text>
      <Pressable
        onPress={async () => {
          await firebaseLogout();
          setUser(null);
        }}
      >
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
};

export default SettingsScreen;
