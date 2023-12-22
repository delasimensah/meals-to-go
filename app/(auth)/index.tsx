import { router } from "expo-router";
import LottieView from "lottie-react-native";
import { View } from "react-native";
import { Button } from "react-native-paper";

import Container from "./_components/container";
import ImageBackground from "./_components/image-background";
import Overlay from "./_components/overlay";
import Title from "./_components/title";

const LoginScreen = () => {
  return (
    <ImageBackground>
      <Overlay />

      <View className="absolute top-[30px] h-[40%] w-full p-2">
        <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require("../../assets/watermelon.json")}
        />
      </View>

      <Title text="Meals To Go" />

      <Container account>
        <Button
          icon="lock-open-outline"
          mode="contained"
          onPress={() => {
            router.push("/login");
          }}
        >
          Login
        </Button>

        <Button
          icon="email"
          mode="contained"
          onPress={() => {
            router.push("/register");
          }}
        >
          Register
        </Button>
      </Container>
    </ImageBackground>
  );
};

export default LoginScreen;
