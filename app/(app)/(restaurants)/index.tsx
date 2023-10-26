import { Link } from "expo-router";
import { View, Text } from "react-native";

import { useSession } from "@/hooks/use-session-store";

const RestaurantsScreen = () => {
  const { logout } = useSession();

  return (
    <View className="flex-1 items-center justify-center">
      <Text>Restaurants</Text>
      <Link href="/restaurant/detail">Details</Link>
      <Text onPress={() => logout()}>Logout</Text>
    </View>
  );
};

export default RestaurantsScreen;
