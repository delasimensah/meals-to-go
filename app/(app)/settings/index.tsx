import { router } from "expo-router";
import { View, Text, ImageBackground } from "react-native";
import { Avatar, List } from "react-native-paper";

import ListItem from "./_components/list-item";

import { SafeAreaView } from "@/components";
import { useAuthStore } from "@/hooks/zustand/use-auth-store";
import { firebaseLogout } from "@/lib/firebase/auth";
import { useAppTheme } from "@/lib/paperTheme";

const SettingsScreen = () => {
  const { setUser, user } = useAuthStore();
  const { colors } = useAppTheme();

  return (
    <ImageBackground
      className="flex-1"
      source={require("../../../assets/home_bg-rz.jpg")}
    >
      <SafeAreaView isTransparent>
        <View className="mb-5 items-center space-y-3">
          <Avatar.Icon size={180} icon="human" />

          <Text className="font-bold">{user?.email}</Text>
        </View>

        <List.Section>
          <ListItem
            title="Favourites"
            description="View your favourites"
            left={(props) => {
              return (
                <List.Icon {...props} icon="heart" color={colors.ui.error} />
              );
            }}
            onPress={() => router.push("/settings/favourites")}
          />

          <ListItem
            title="Payment"
            left={(props) => {
              return (
                <List.Icon {...props} icon="cart" color={colors.ui.secondary} />
              );
            }}
            onPress={() => null}
          />

          <ListItem
            title="Past Orders"
            left={(props) => {
              return (
                <List.Icon
                  {...props}
                  icon="history"
                  color={colors.ui.secondary}
                />
              );
            }}
            onPress={() => null}
          />

          <ListItem
            title="Logout"
            left={(props) => {
              return (
                <List.Icon {...props} icon="door" color={colors.ui.secondary} />
              );
            }}
            onPress={async () => {
              await firebaseLogout();
              setUser(null);
            }}
          />
        </List.Section>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default SettingsScreen;
