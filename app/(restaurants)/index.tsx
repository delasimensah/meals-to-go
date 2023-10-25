import { Link } from "expo-router";
import { View, Text } from "react-native";

const RestaurantsScreen = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Restaurants</Text>
      <Link href="/restaurant/detail">Details</Link>
    </View>
  );
};

export default RestaurantsScreen;
