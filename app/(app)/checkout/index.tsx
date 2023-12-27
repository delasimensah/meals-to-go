import { View, Text, ScrollView } from "react-native";
import { Avatar, List, Divider } from "react-native-paper";

import { SafeAreaView, RestaurantInfoCard, Button } from "@/components";
import { useCartStore } from "@/hooks/zustand/use-cart-store";
import { useAppTheme } from "@/lib/paperTheme";
import { cn } from "@/lib/utils";

const CheckoutScreen = () => {
  const { cart, restaurant, setCart, setRestaurant } = useCartStore();
  const theme = useAppTheme();

  const totalPrice = cart.reduce((acc, curr) => {
    return acc + curr.price;
  }, 0);

  const clearCart = () => {
    setCart([]);
    setRestaurant(null);
  };

  if (!cart.length || !restaurant) {
    return (
      <SafeAreaView>
        <View className="flex-1 items-center justify-center">
          <Avatar.Icon
            icon="cart"
            size={128}
            style={{
              backgroundColor: theme.colors.brand.primary,
            }}
          />

          <Text className="font-body">Your cart is empty!</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <RestaurantInfoCard restaurant={restaurant} />

      <ScrollView>
        <View className="ml-2">
          <View className="mt-16">
            <Text
              className={cn(
                "flex-wrap font-body text-title",
                theme.colors.text.primary,
              )}
            >
              Your Order
            </Text>
          </View>

          <List.Section>
            {cart.map(({ item, price }, idx) => {
              return <List.Item key={idx} title={`${item} - ${price / 100}`} />;
            })}
          </List.Section>

          <Text
            className={cn(
              "flex-wrap font-body text-body",
              theme.colors.text.primary,
            )}
          >
            Total: {totalPrice / 100}
          </Text>
        </View>

        <View className="my-4">
          <Divider />
        </View>

        <Button text="Pay" onPress={() => {}} icon="cash" />

        <View className="p-1" />

        <Button
          icon="cart-off"
          buttonColor={theme.colors.ui.error}
          onPress={clearCart}
          text="Clear Cart"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CheckoutScreen;
