import { useLocalSearchParams, Stack } from "expo-router";
import { View, Text } from "react-native";

const RestaurantDetailScreen = () => {
  const { id } = useLocalSearchParams();

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: (props) => <Text>{id}</Text>,
        }}
      />
      <View className="flex-1 items-center justify-center">
        <Text>{id}</Text>
      </View>
    </>
  );
};

export default RestaurantDetailScreen;
