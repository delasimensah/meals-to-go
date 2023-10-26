import { router } from "expo-router";
import { View, Text } from "react-native";

import { useSession } from "@/hooks/use-session-store";

const LoginScreen = () => {
  const { login } = useSession();

  return (
    <View className="flex-1 items-center justify-center">
      <Text>LoginScreen</Text>
      <Text
        onPress={() => {
          login();
          router.replace("/");
        }}
      >
        Login
      </Text>
    </View>
  );
};

export default LoginScreen;
