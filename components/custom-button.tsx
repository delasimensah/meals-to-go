import { FC } from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";

type CustomButtonProps = {
  onPress: () => void;
  buttonColor: string;
  icon?: string;
  text: string;
};

const CustomButton: FC<CustomButtonProps> = ({
  onPress,
  buttonColor,
  icon,
  text,
}) => {
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
          borderRadius: 2,
        }}
        buttonColor={buttonColor}
      >
        {text}
      </Button>
    </View>
  );
};

export default CustomButton;
