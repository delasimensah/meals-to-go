import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Test from "@/components/test";

const App = () => {
  return (
    <View style={styles.container}>
      <Test>
        <Text>Meals To Go App!</Text>
      </Test>
      <StatusBar style="auto" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
