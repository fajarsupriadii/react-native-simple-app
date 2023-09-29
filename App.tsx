import AuthNavigator from "./js/AuthNavigator";
import { Provider } from "react-redux";
import store from "./js/store";

function App() {
  return (
    <Provider store={store}>
      <AuthNavigator />
    </Provider>
  );
}

export default App;