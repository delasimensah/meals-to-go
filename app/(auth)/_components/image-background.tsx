import { FC, ReactNode } from "react";
import { ImageBackground as Background } from "react-native";

type ImageBackgroundProps = {
  children: ReactNode;
};

const ImageBackground: FC<ImageBackgroundProps> = ({ children }) => {
  return (
    <Background
      className="flex-1 items-center justify-center"
      source={require("../../../assets/home_bg-rz.jpg")}
    >
      {children}
    </Background>
  );
};

export default ImageBackground;
