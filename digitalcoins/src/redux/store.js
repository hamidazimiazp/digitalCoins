import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk'
import reducer from "./reducer";
import api from "./middlewares/api";
import { composeWithDevTools } from 'redux-devtools-extension';


export default function configureStore() {
    const store = createStore(
        reducer,
        composeWithDevTools(
            applyMiddleware(thunk, api),
        ),
    );

    return store;
}