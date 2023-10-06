import {
  PublicSans_400Regular,
  PublicSans_500Medium,
  PublicSans_700Bold,
  useFonts,
} from "@expo-google-fonts/public-sans";

import Load from "@components/Animations/Load";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import Routes, { navigationRef } from "./routes";
import { store } from "./services/store";
import theme from "./theme";

function App() {
  const [fontsLoaded] = useFonts({
    PublicSans_400Regular,
    PublicSans_500Medium,
    PublicSans_700Bold,
  });

  if (fontsLoaded) {
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ThemeProvider theme={theme}>
          <NavigationContainer ref={navigationRef}>
            <StatusBar
              style="light"
              translucent
              backgroundColor="transparent"
            />
            <Routes />
          </NavigationContainer>
        </ThemeProvider>
      </GestureHandlerRootView>
    );
  }
  return <Load />;
}

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
