import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";

export default function ModalScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="font-bold text-[20]">Modal</Text>

      <StatusBar style="auto" />
    </View>
  );
}
