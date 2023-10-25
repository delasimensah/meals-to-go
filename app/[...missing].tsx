import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View className="flex-1 items-center justify-center">
        <Text className="font-bold text-[20]">This screen doesn't exist.</Text>

        <Link href="/" className="mt-[15] py-[15]">
          <Text className="text-[#2e78b7] text-[14]">Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}
