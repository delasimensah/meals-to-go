import { Stack, Redirect } from "expo-router";

// import { useAuthState } from "@/hooks/use-auth-state";
import { useAuthStore } from "@/hooks/zustand/use-auth-store";

const AuthLayout = () => {
  const { user } = useAuthStore();

  // useAuthState();

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
