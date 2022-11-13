import LoginView from "./views/loginView/LoginView";
import FuelFillView from "./views/fuelRefillPage/FuelFillView";
import QRScannerView from "./views/qrScannerView/QRScannerView";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginView} />
        <Stack.Screen name="FuelFill" component={FuelFillView} />
        <Stack.Screen
          name="QRScanner"
          component={QRScannerView}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
