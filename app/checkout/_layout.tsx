import { Stack } from "expo-router";

const CheckoutLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Checkout",
        }}
      />
    </Stack>
  );
};

export default CheckoutLayout;
