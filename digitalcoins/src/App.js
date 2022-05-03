import './App.css';
import configureStore from './redux/store';
import { Provider } from "react-redux";

const store = configureStore();

const App = () => {

  return (
    <Provider store={store}>
      <>
        Hello World !
      </>
    </Provider>
  );
}

export default App;
