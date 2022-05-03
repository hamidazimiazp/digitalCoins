import axios from "axios";
import * as actionTypes from "../action_types";


const api = ({ dispatch }) => next => async action => {
    if (action.type === actionTypes.apiCallBegan) return next(action);

    const { url, method, data, onSuccess, onError, onStart, onFaild } = action.payload;

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

        dispatch(actionTypes.apiCallSuccess({ data: response.data }));

        if (onSuccess) {
            dispatch({ type: onSuccess, payload: { data: response.data } });
        }
    } catch (error) {
        dispatch(actionTypes.apiCallFaild({ message: error.message }));
        if (onFaild) {
            dispatch({ type: onFaild });
        }
        if (onError) {
            dispatch({ type: onError, payload: { message: error.message } });
        }
    }
}


export default api;