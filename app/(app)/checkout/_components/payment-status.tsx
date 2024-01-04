import { FC } from "react";
import { View, Text } from "react-native";
import { Avatar } from "react-native-paper";

type PaymentStatusProps = {
  text: string;
  color: string;
  icon: "check-bold" | "close";
};

const PaymentStatus: FC<PaymentStatusProps> = ({ icon, text, color }) => {
  return (
    <View className="mb-5 items-center">
      <Avatar.Icon
        icon={icon}
        size={128}
        style={{
          backgroundColor: color,
        }}
      />

      <Text className="font-body">{text}</Text>
    </View>
  );
};

export default PaymentStatus;
