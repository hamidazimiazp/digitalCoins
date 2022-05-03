import './App.css';
import configureStore from './redux/store';
import { Provider } from "react-redux";
import Main from './container/main';

const store = configureStore();

const App = () => {

  return (
    <Provider store={store}>
      <>
        <Main />
      </>
    </Provider>
  );
}

export default App;
