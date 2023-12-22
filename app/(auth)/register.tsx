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
import { firebaseRegister } from "@/lib/firebase/auth";
import { useAppTheme } from "@/lib/paperTheme";

const RegisterScreen = () => {
  const { setUser, loading, setLoading, setError } = useAuthStore();

  const theme = useAppTheme();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");

  const handleRegister = async () => {
    setLoading();
    setError("");

    if (password !== repeatedPassword) {
      setError("Error: Passwords do not match");
      setLoading();
      return;
    }

    try {
      const user = await firebaseRegister(email, password);

      setUser(user);
      setLoading();
    } catch (error: any) {
      console.log("Register Error", error);
      setError(error.message);
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

        <TextInput
          label="Repeat Password"
          value={repeatedPassword}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(p) => setRepeatedPassword(p)}
          style={{ width: 300 }}
        />

        <ErrorText />

        {!loading ? (
          <Button icon="email" mode="contained" onPress={handleRegister}>
            Register
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

export default RegisterScreen;
