import { useLocalSearchParams, router } from "expo-router";
import { View, ScrollView } from "react-native";
import { Divider } from "react-native-paper";

import Accordion from "./_components/accordion";

import { RestaurantInfoCard, SafeAreaView, Button } from "@/components";
import { useCartStore } from "@/hooks/zustand/use-cart-store";
import { useRestaurantsStore } from "@/hooks/zustand/use-restaurants-store";
import { useAppTheme } from "@/lib/paperTheme";

const RestaurantDetailScreen = () => {
  const { name } = useLocalSearchParams();
  const { restaurants } = useRestaurantsStore();
  const { cart, setCart, restaurant: res, setRestaurant } = useCartStore();
  const theme = useAppTheme();

  const restaurant = restaurants.find((restaurant) => restaurant.name === name);

  const addToCart = () => {
    if (!res || restaurant?.placeId !== res.placeId) {
      setRestaurant(restaurant!);
      setCart([{ item: "special", price: 1299 }]);
    } else {
      setCart([...cart, { item: "special", price: 1299 }]);
    }
    router.push("/checkout");
  };

  return (
    <SafeAreaView>
      <View className="my-2">
        <RestaurantInfoCard restaurant={restaurant!} />
      </View>

      <ScrollView>
        <Accordion
          title="Breakfast"
          listItems={["Eggs Benedict", "Classic Breakfast"]}
          icon="bread-slice"
        />

        <Divider />

        <Accordion
          title="Lunch"
          listItems={["Burger w/ Fries", "Steak Sandwich", "Mushroom Soup"]}
          icon="hamburger"
        />

        <Divider />

        <Accordion
          title="Dinner"
          listItems={[
            "Spaghetti Bolognese",
            "Veal Cutlet with Chicken Mushroom Rotini",
            "Steak Frites",
          ]}
          icon="food-variant"
        />

        <Divider />

        <Accordion
          title="Drinks"
          listItems={["Coffee", "Tea", "Modelo", "Coke", "Fanta"]}
          icon="cup"
        />
      </ScrollView>

      <View className="mb-5">
        <Button
          text="Order Special Only 12.99"
          onPress={addToCart}
          icon="cash"
        />

        <View className="p-1" />

        <Button
          text="Close"
          buttonColor={theme.colors.ui.error}
          onPress={() => {
            router.back();
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default RestaurantDetailScreen;
