import { FC, ReactNode } from "react";
import { SafeAreaView, StatusBar } from "react-native";

import { cn } from "@/lib/utils";

type SafeAreaProps = {
  children: ReactNode;
  isTransparent?: boolean;
  classes?: string;
};

const SafeArea: FC<SafeAreaProps> = ({ children, isTransparent, classes }) => {
  return (
    <SafeAreaView
      className={cn(
        `flex-1 ${classes}`,
        StatusBar.currentHeight && `mt-[${StatusBar.currentHeight}px]`,
        isTransparent ? "bg-transparent" : "bg-bg-primary",
      )}
    >
      {children}
    </SafeAreaView>
  );
};

export default SafeArea;
