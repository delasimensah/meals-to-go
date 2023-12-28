import { Stack, Redirect } from "expo-router";

import { useAuthStore } from "@/hooks/zustand/use-auth-store";

const AuthLayout = () => {
  const { user } = useAuthStore();

  if (user) {
    return <Redirect href="\" />;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
};

export default AuthLayout;
