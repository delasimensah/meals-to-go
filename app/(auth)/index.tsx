import { router } from "expo-router";
import LottieView from "lottie-react-native";
import { View, Text, ImageBackground } from "react-native";
import { Button } from "react-native-paper";

const LoginScreen = () => {
  return (
    <ImageBackground
      className="flex-1 items-center justify-center"
      source={require("../../assets/home_bg-rz.jpg")}
    >
      <View className="absolute h-full w-full bg-white/30" />

      <View className="absolute top-[30px] h-[40%] w-full p-2">
        <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require("../../assets/watermelon.json")}
        />
      </View>

      <Text className="text-[30px]">Meals To Go</Text>

      <View className="mt-2 space-y-[16px] bg-white/70 p-8">
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
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;
