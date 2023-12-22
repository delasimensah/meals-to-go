import { View, Text } from "react-native";

import { useAuthStore } from "@/hooks/zustand/use-auth-store";

const ErrorText = () => {
  const { error } = useAuthStore();

  return (
    <>
      {error && (
        <View className="my-2 max-w-[300px] items-center self-center ">
          <Text className="text-ui-error">{error}</Text>
        </View>
      )}
    </>
  );
};

export default ErrorText;
