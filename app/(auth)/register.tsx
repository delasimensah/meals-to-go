import { router } from "expo-router";
import { useState } from "react";
import { View, Text, ImageBackground, ActivityIndicator } from "react-native";
import { Button, TextInput } from "react-native-paper";

import { useAuthStore } from "@/hooks/zustand/use-auth-store";
import { useAppTheme } from "@/lib/paperTheme";

const RegisterScreen = () => {
  const { login } = useAuthStore();

  const theme = useAppTheme();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async () => {
    setLoading(true);
    try {
      login();
      router.push("/");
      setLoading(false);
    } catch (error) {
      console.log("Register Error", error);
      setError("Something went wrong");
      setLoading(false);
    }
  };

  return (
    <ImageBackground
      className="flex-1 items-center justify-center"
      source={require("../../assets/home_bg.jpg")}
    >
      <View className="absolute h-full w-full bg-white/30" />

      <Text className="text-[30px]">Meals To Go</Text>

      <View className="mb-[16px] mt-2 space-y-[16px] bg-white/70 p-8">
        <TextInput
          label="Email"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(e) => setEmail(e)}
          style={{ width: 300 }}
        />

        <TextInput
          label="Password"
          value={password}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(p) => setPassword(p)}
          style={{ width: 300 }}
        />

        <TextInput
          label="Repeat Password"
          value={repeatedPassword}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(p) => setRepeatedPassword(p)}
          style={{ width: 300 }}
        />

        {error && (
          <View className="my-2 max-w-[300px] items-center self-center ">
            <Text className="text-ui-error">{error}</Text>
          </View>
        )}

        {!loading ? (
          <Button icon="email" mode="contained" onPress={handleRegister}>
            Register
          </Button>
        ) : (
          <ActivityIndicator animating color={theme.colors.brand.primary} />
        )}
      </View>

      <Button
        mode="contained"
        onPress={() => {
          router.back();
        }}
      >
        Back
      </Button>
    </ImageBackground>
  );
};

export default RegisterScreen;
