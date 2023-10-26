import { Link } from "expo-router";
import { View, Text } from "react-native";

import { useSession } from "@/hooks/use-session-store";

const RestaurantsScreen = () => {
  const { logout } = useSession();

  return (
    <View className="flex-1 items-center justify-center space-y-2">
      <Text>Restaurants</Text>
      <Link href="/restaurant/res-one">Restaurant One</Link>
      <Link href="/restaurant/res-two">Restaurant Two</Link>
      <Link href="/restaurant/res-three">Restaurant Three</Link>
      <Link href="/restaurant/res-four">Restaurant Four</Link>
      <Link href="/restaurant/res-five">Restaurant Five</Link>
      <Text onPress={() => logout()}>Logout</Text>
    </View>
  );
};

export default RestaurantsScreen;
