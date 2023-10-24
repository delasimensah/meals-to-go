import { View, Text } from "react-native";
import { FC, ReactNode } from "react";

type TestProps = {
  children: ReactNode;
};

const Test: FC<TestProps> = ({ children }) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};

export default Test;
