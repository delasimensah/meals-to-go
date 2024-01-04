import { router } from "expo-router";
import { FC, useRef } from "react";
import { View, Pressable, Text } from "react-native";
import { Paystack, paystackProps } from "react-native-paystack-webview";

// type PayButtonProps = {}

import { Button } from "@/components";
import { useCartStore } from "@/hooks/zustand/use-cart-store";

const PayButton = () => {
  const paystackWebViewRef = useRef<paystackProps.PayStackRef>();
  const { setCart, setRestaurant } = useCartStore();

  console.log(paystackProps);

  const clearCart = () => {
    setCart([]);
    setRestaurant(null);
  };
  return (
    <View className="flex-1">
      {/* <Button text="Pay" onPress={() => {}} icon="cash" /> */}
      <Pressable onPress={() => paystackWebViewRef.current?.startTransaction()}>
        <Text>Pay</Text>
      </Pressable>

      <Paystack
        paystackKey="pk_test_8b484f986b1590d5861aefbe51acdd82a1fb0028"
        amount={12.99}
        currency="GHS"
        billingEmail="mensadelasi@gmail.com"
        activityIndicatorColor="green"
        // ref={paystackWebViewRef}
        onCancel={(e) => {
          console.log("Payment cancelled", e);
          // router.back();
        }}
        onSuccess={(res) => {
          console.log("Payment successful", res);
          clearCart();
        }}
        // ref={}
        // autoStart
      />
    </View>
  );
};

export default PayButton;
