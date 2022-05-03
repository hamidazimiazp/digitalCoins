import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk'
import reducer from "./reducer";
import api from "./middlewares/api";

export default function configureStore() {
    const store = createStore(
        reducer,
        applyMiddleware(thunk, api)
    );

    return store;
}