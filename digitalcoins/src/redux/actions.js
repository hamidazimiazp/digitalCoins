import * as actionTypes from "./action_types";


export const recievedCoins = (data) => {
    return {
        type: actionTypes.recievedCoins,
        payload: {
            data
        }
    }
}