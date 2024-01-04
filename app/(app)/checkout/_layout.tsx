import { Stack } from "expo-router";

const CheckoutLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="home"
        options={{
          title: "Checkout",
        }}
      />

      <Stack.Screen
        name="payment"
        options={{
          title: "Payment",
          presentation: "modal",
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default CheckoutLayout;
