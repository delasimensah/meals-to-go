import { FC } from "react";
import { Text } from "react-native";

type Restaurant = {
  name: string;
  icon: string;
  photos: string[];
  address: string;
  isOpenNow: boolean;
  rating: number;
  isClosedTemporarily: boolean;
};

type RestaurantInfoProps = {
  restaurant?: Restaurant;
};

const RestaurantInfo: FC<RestaurantInfoProps> = ({ restaurant }) => {
  return <Text className="font-heading">RestaurantInfo</Text>;
};

export default RestaurantInfo;
