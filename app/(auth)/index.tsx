import { Link } from "expo-router";
import { View, Text } from "react-native";

const LoginScreen = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Auth</Text>
      <Link href="/login">Login</Link>
      <Link href="/register">Register</Link>
    </View>
  );
};

export default LoginScreen;
