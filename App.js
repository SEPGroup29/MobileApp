import LoginView from "./views/loginView/LoginView";
import FuelFillView from "./views/fuelRefillPage/FuelFillView";
import QRScannerView from "./views/qrScannerView/QRScannerView";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppLoader from "./views/loader/AppLoader";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AppLoader"
          component={AppLoader}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="FuelFill"
          component={FuelFillView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QRScanner"
          component={QRScannerView}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
