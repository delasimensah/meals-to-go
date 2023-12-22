import { FC } from "react";
import { Text } from "react-native";

type TitleProps = {
  text: string;
};

const Title: FC<TitleProps> = ({ text }) => {
  return <Text className="text-[30px]">{text}</Text>;
};

export default Title;
