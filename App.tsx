import { Provider } from "react-redux";
import { store } from './src/stores/ducks/index';
import StackNavigator from "./src/configs/routes";

export default function App() {
  return (
    <Provider store={store}>
      <StackNavigator />
    </Provider>
  );
}