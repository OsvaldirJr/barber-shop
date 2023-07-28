import StackNavigator from "./app/configs/routes";
import AuthProvider from "./app/contexts/auth";
import { NavigationContainer } from "@react-navigation/native";
import LoginModalProvider from "./app/contexts/modals";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <LoginModalProvider>
          <StackNavigator />
        </LoginModalProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}