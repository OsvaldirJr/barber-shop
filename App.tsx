import StackNavigator from "./app/configs/routes";
import AuthProvider from "./app/contexts/auth";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
          <StackNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}