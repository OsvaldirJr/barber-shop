import { Provider } from "react-redux";
import { store } from './app/stores/ducks/index';
import StackNavigator from "./app/configs/routes";

export default function App() {
  return (
    <Provider store={store}>
      <StackNavigator />
    </Provider>
  );
}