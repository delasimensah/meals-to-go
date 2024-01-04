import { router } from "expo-router";
import { FC, useState } from "react";
import { View } from "react-native";
import { Paystack } from "react-native-paystack-webview";

import PaymentStatus from "./_components/payment-status";

import { Button } from "@/components";
import { useCartStore } from "@/hooks/zustand/use-cart-store";
import { useAppTheme } from "@/lib/paperTheme";

type PaymentScreenProps = {
  params: null;
};

const PaymentScreen: FC<PaymentScreenProps> = () => {
  const { colors } = useAppTheme();
  const { setCart, setRestaurant } = useCartStore();
  const [status, setStatus] = useState("starting");

  const clearCart = () => {
    setCart([]);
    setRestaurant(null);
  };

  return (
    <View className="flex-1 items-center justify-center">
      {status === "starting" && (
        <PaymentStatus
          icon="close"
          color={colors.ui.error}
          text="Process Starting"
        />
      )}

      {status === "cancelled" && (
        <PaymentStatus
          icon="close"
          color={colors.ui.error}
          text="Payment Failed"
        />
      )}

      {status === "successful" && (
        <PaymentStatus
          icon="check-bold"
          color={colors.ui.success}
          text="Success!"
        />
      )}

      <Button text="Dismiss" onPress={() => router.push("../")} />

      <Paystack
        paystackKey="pk_test_8b484f986b1590d5861aefbe51acdd82a1fb0028"
        amount={12.99}
        currency="GHS"
        billingEmail="mensadelasi@gmail.com"
        activityIndicatorColor="green"
        onCancel={(e) => {
          // console.log("Payment cancelled", e);
          setStatus(e.status);
        }}
        onSuccess={(res) => {
          // console.log("Payment successful", res.data.event);
          setStatus("successful");
          clearCart();
        }}
        channels={["card", "mobile_money"]}
        autoStart
      />
    </View>
  );
};

export default PaymentScreen;
