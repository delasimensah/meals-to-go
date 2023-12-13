import { FC } from "react";
import { Text, View, Image } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";

import open from "../../assets/open";
import star from "../../assets/star";

// type Restaurant = {
//   name: string;
//   icon: string;
//   photos: string[];
//   address: string;
//   isOpenNow: boolean;
//   rating: number;
//   isClosedTemporarily: boolean;
// };

type RestaurantInfoProps = {
  restaurant: any;
};

const RestaurantInfoCard: FC<RestaurantInfoProps> = ({ restaurant }) => {
  return (
    <Card
      elevation={2}
      className="w-[95%] self-center rounded-md bg-bg-primary"
    >
      <View>
        <Card.Cover
          className="bg-bg-primary p-4"
          key={restaurant.name}
          source={{
            uri: "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
          }}
        />
      </View>

      <View className="p-4">
        <Text className="font-heading text-body font-medium">
          {restaurant.name}
        </Text>

        <View className="flex-row items-center">
          <View className="flex-row pb-2 pt-2">
            {restaurant.rating &&
              Array.from(new Array(Math.floor(restaurant.rating))).map(
                (_, i) => (
                  <SvgXml
                    key={`star-${restaurant.placeId}-${i}`}
                    xml={star}
                    width={20}
                    height={20}
                  />
                ),
              )}
          </View>

          <View className="flex-1 flex-row justify-end">
            {restaurant.isClosedTemporarily && (
              <Text className="text-error">CLOSED TEMPORARILY</Text>
            )}

            <View className="ml-4">
              {restaurant.isOpenNow && (
                <SvgXml xml={open} width={20} height={20} />
              )}
            </View>

            <View className="ml-4">
              <Image source={{ uri: restaurant.icon }} className="h-4 w-4" />
            </View>
          </View>
        </View>

        <Text className="font-body text-caption">{restaurant.address}</Text>
      </View>
    </Card>
  );
};

export default RestaurantInfoCard;
