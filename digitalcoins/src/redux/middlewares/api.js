import axios from "axios";
import * as actionTypes from "../action_types";

// TODO: Handle Error


const api = ({ dispatch }) => next => async action => {

    if (action.type !== actionTypes.apiCallBegan) return next(action);

    const { url, method, data, onSuccess, onRecieved, onStart, onFaild } = action.payload;

    if (onStart) {
        dispatch({ type: onStart });
    }

    next(action);

    try {
        const response = await axios.request({
            url,
            method,
            data
        });

        if (onSuccess) {
            dispatch({ type: onSuccess });
        }

        if (onRecieved) {
            dispatch({ type: onRecieved, payload: { data: response.data } });
        }
    } catch (error) {
        if (onFaild) {
            dispatch({ type: onFaild });
        }
    }
}


export default api;