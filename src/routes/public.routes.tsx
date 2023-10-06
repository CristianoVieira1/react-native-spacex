import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "@scenes/Home";
import InitialAccess from "@scenes/InitialAccess";
import SplashScreen from "@scenes/SplashScreen";
import WebViewPage from "@scenes/WebViewPage";
import React from "react";

const Stack = createNativeStackNavigator();

export const PublicRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName={"SplashScreenPage"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="SplashScreenPage" component={SplashScreen} />
      <Stack.Screen name="InitialAccess" component={InitialAccess} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="WebViewPage" component={WebViewPage} />
    </Stack.Navigator>
  );
};
