import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import { Provider } from "react-redux";
import DetailsScreen from "./src/screens/DetailsScreen";
import HomeTabs from "./src/screens/HomeTabs";
import LoginScreen from "./src/screens/LoginScreen";
import store from "./src/store";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#110E47",
    secondary: "#DBE3FF",
    grey: "#9C9C9C",
  },
};

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Home" component={HomeTabs} />
            <Stack.Screen name="Details" component={DetailsScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}

export default App;
