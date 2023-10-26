import { View, SafeAreaView, StatusBar } from "react-native";

import { Search, RestaurantInfo } from "@/components";

const RestaurantsScreen = () => {
  return (
    <SafeAreaView className={`flex-1 mt-[${StatusBar.currentHeight}]`}>
      <Search
        inputStyle="bg-white min-h-0 rounded-full"
        searchStyle="bg-white "
      />
      <View className="flex-1 bg-blue-400 p-2">
        <RestaurantInfo />
      </View>
    </SafeAreaView>
  );
};

export default RestaurantsScreen;
