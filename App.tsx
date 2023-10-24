import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

const App = () => {
  return (
    <View className="flex-1 bg-white items-center justify-center">
      <Text className="text-red-500 text-3xl font-bold">Meals To Go App!</Text>

      <StatusBar style="auto" />
    </View>
  );
};

export default App;
