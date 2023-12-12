import { FC, ReactNode } from "react";
import { SafeAreaView, StatusBar } from "react-native";

import { cn } from "@/lib/utils";

type SafeAreaProps = {
  children: ReactNode;
};

const SafeArea: FC<SafeAreaProps> = ({ children }) => {
  return (
    <SafeAreaView
      className={cn(
        "flex-1 bg-bg-primary",
        StatusBar.currentHeight && `mt-[${StatusBar.currentHeight}px]`,
      )}
    >
      {children}
    </SafeAreaView>
  );
};

export default SafeArea;
