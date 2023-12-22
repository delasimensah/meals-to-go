import { FC, ReactNode } from "react";
import { View } from "react-native";

import { cn } from "@/lib/utils";

type ContainerProps = {
  children: ReactNode;
  account?: boolean;
};

const Container: FC<ContainerProps> = ({ children, account }) => {
  return (
    <View
      className={cn(
        "mt-2 space-y-[16px] bg-white/70 p-8",
        !account && "mb-[16px]",
      )}
    >
      {children}
    </View>
  );
};

export default Container;
