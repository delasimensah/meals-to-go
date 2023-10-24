import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

const App = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Meals To Go App!</Text>

      <StatusBar style="auto" />
    </View>
  );
};

export default App;
