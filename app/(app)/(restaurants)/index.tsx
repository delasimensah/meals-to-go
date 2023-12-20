import { Link } from "expo-router";
import { FlatList, View, Text, Pressable } from "react-native";
import { ActivityIndicator } from "react-native-paper";

import {
  Search,
  RestaurantInfoCard,
  FadeInView,
  SafeAreaView,
} from "@/components";
import { useLocationStore } from "@/hooks/use-location-store";
import { useRestaurantsStore } from "@/hooks/use-restaurants-store";
import { colors } from "@/lib/theme/colors";

const RestaurantsScreen = () => {
  const { locError } = useLocationStore();
  const { restaurants, resLoading, resError } = useRestaurantsStore();
  const hasError = !!resError || !!locError;

  return (
    <SafeAreaView>
      <Search inputStyle="min-h-[30px]" searchStyle="rounded-xl bg-white" />

      {resLoading && (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator
            size="large"
            color={colors.brand.primary}
            animating
          />
        </View>
      )}

      {/* TODO: Favourites here */}

      {hasError && (
        <View className="flex-1 items-center justify-center">
          <Text className="text-ui-error">
            Something went wrong getting restaurants!
          </Text>
        </View>
      )}

      {!hasError && !resLoading && (
        <FlatList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <Link href={`restaurant/${item.name}`} asChild>
                <Pressable>
                  <View className="mb-4">
                    <FadeInView>
                      <RestaurantInfoCard restaurant={item} />
                    </FadeInView>
                  </View>
                </Pressable>
              </Link>
            );
          }}
          keyExtractor={(item) => item.name!}
          className="mt-[60px] p-4"
        />
      )}
    </SafeAreaView>
  );
};

export default RestaurantsScreen;
