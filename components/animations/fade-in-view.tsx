import { ReactNode, useEffect, useRef, FC } from "react";
import { Animated } from "react-native";

type FadeInViewProps = {
  children: ReactNode;
  duration?: number;
};

const FadeInView: FC<FadeInViewProps> = ({ children, duration = 1500 }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, duration]);

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
      }}
    >
      {children}
    </Animated.View>
  );
};

export default FadeInView;
