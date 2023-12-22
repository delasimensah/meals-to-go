import { router } from "expo-router";
import { useState } from "react";
import { ActivityIndicator } from "react-native";
import { Button, TextInput } from "react-native-paper";

import Container from "./_components/container";
import ErrorText from "./_components/error-text";
import ImageBackground from "./_components/image-background";
import Overlay from "./_components/overlay";
import Title from "./_components/title";

import { useAuthStore } from "@/hooks/zustand/use-auth-store";
import { firebaseLogin } from "@/lib/firebase/auth";
import { useAppTheme } from "@/lib/paperTheme";

const LoginScreen = () => {
  const { setUser, loading, setLoading, setError } = useAuthStore();

  const theme = useAppTheme();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    setLoading();
    setError("");

    try {
      const user = await firebaseLogin(email, password);

      setUser(user);
      setLoading();
    } catch (error: any) {
      console.log("Register Error", error.message);

      setError(error.message);
      setEmail("");
      setPassword("");
      setLoading();
    }
  };

  return (
    <ImageBackground>
      <Overlay />

      <Title text="Meals To Go" />

      <Container>
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

        <ErrorText />

        {!loading ? (
          <Button
            icon="lock-open-outline"
            mode="contained"
            onPress={handleLogin}
          >
            Login
          </Button>
        ) : (
          <ActivityIndicator animating color={theme.colors.brand.primary} />
        )}
      </Container>

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

export default LoginScreen;
