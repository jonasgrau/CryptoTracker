import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import CoinDetailedScreen from "../screens/CoinDetailedScreen";

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <Stack.Navigator
      initalRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={"Home"} component={HomeScreen} />
      <Stack.Screen
        name={"CoinDetailedScreen"}
        component={CoinDetailedScreen}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
