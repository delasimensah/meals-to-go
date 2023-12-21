import { AntDesign } from "@expo/vector-icons";
import { FC } from "react";
import { Pressable } from "react-native";

import { useFavouritesStore } from "@/hooks/zustand/use-favourites-store";
import { Restaurant } from "@/types";

type FavouriteIconProps = {
  restaurant: Restaurant;
};

const FavouriteIcon: FC<FavouriteIconProps> = ({ restaurant }) => {
  const { favourites, setFavourites } = useFavouritesStore();

  const isFavourite = favourites.find(
    (fav) => fav.placeId === restaurant.placeId,
  );

  const addFavourite = (restaurant: Restaurant) => {
    const newFavourites = [...favourites, restaurant];

    setFavourites(newFavourites);
  };

  const removeFavourite = (restaurant: Restaurant) => {
    const newFavourites = favourites.filter((res) => {
      return res.placeId !== restaurant.placeId;
    });

    setFavourites(newFavourites);
  };

  return (
    <Pressable
      className="absolute right-[25px] top-[25px] z-10"
      onPress={() =>
        isFavourite ? removeFavourite(restaurant) : addFavourite(restaurant)
      }
    >
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={24}
        color={isFavourite ? "red" : "white"}
      />
    </Pressable>
  );
};

export default FavouriteIcon;
