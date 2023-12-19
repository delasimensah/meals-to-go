import { FC } from "react";
import { View, Text, Image, Platform } from "react-native";
import { WebView } from "react-native-webview";

import { Restaurant } from "@/types";

type CompactRestaurantInfoProps = {
  restaurant: Restaurant;
  isMap: boolean;
};

const isAndroid = Platform.OS === "android";

const CompactRestaurantInfo: FC<CompactRestaurantInfoProps> = ({
  restaurant,
  isMap,
}) => {
  const src = restaurant.photos[0];
  return (
    <View className="max-w-[120px] items-center p-[10px]">
      {isAndroid && isMap ? (
        <WebView
          source={{ uri: src }}
          style={{ height: 120, width: 120, borderRadius: 10 }}
        />
      ) : (
        <Image
          className="h-[120px] w-[120px] rounded-[10px]"
          source={{ uri: src }}
        />
      )}
      <Text
        className="text-center font-body text-caption font-bold"
        numberOfLines={3}
      >
        {restaurant.name}
      </Text>
    </View>
  );
};

export default CompactRestaurantInfo;
