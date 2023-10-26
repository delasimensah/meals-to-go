import { View, SafeAreaView, StatusBar } from "react-native";

import { Search, RestaurantInfoCard } from "@/components";

const RestaurantsScreen = () => {
  return (
    <SafeAreaView className={`flex-1 mt-[${StatusBar.currentHeight}]`}>
      <Search
        inputStyle="min-h-[30] text-sm"
        searchStyle="rounded-xl bg-white"
      />
      <View className="flex-1 bg-blue-400 p-2">
        <RestaurantInfoCard />
      </View>
    </SafeAreaView>
  );
};

export default RestaurantsScreen;
