import { Link } from "expo-router";
import { FC } from "react";
import { FlatList, Text, Pressable, View } from "react-native";

import { SafeAreaView, RestaurantInfoCard } from "@/components";
import { useFavouritesStore } from "@/hooks/zustand/use-favourites-store";

type FavouritesScreenProps = {
  name?: string;
};

const FavouritesScreen: FC<FavouritesScreenProps> = () => {
  const { favourites } = useFavouritesStore();

  return favourites.length ? (
    <SafeAreaView>
      <FlatList
        data={favourites}
        renderItem={({ item }) => {
          return (
            <Link href={`restaurant/${item.name}`} asChild>
              <Pressable>
                <View className="mb-4">
                  <RestaurantInfoCard restaurant={item} />
                </View>
              </Pressable>
            </Link>
          );
        }}
        keyExtractor={(item) => item.name!}
        className="p-4"
      />
    </SafeAreaView>
  ) : (
    <SafeAreaView classes="items-center justify-center">
      <Text>No Favourites</Text>
    </SafeAreaView>
  );
};

export default FavouritesScreen;
