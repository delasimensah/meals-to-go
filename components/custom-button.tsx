import { FC } from "react";
import { View } from "react-native";
import { Button, useTheme } from "react-native-paper";

import { fonts } from "@/lib/theme/fonts";

type CustomButtonProps = {
  onPress: () => void;
  buttonColor?: string;
  icon?: string;
  text: string;
};

const CustomButton: FC<CustomButtonProps> = ({
  onPress,
  buttonColor,
  icon,
  text,
}) => {
  const theme = useTheme();

  return (
    <View>
      <Button
        mode="contained"
        icon={icon}
        onPress={onPress}
        style={{
          width: "80%",
          alignSelf: "center",
          padding: 4,
          borderRadius: theme.roundness,
        }}
        labelStyle={{
          fontFamily: fonts.heading,
        }}
        buttonColor={buttonColor}
      >
        {text}
      </Button>
    </View>
  );
};

export default CustomButton;
