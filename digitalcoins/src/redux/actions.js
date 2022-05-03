import * as actionTypes from "./action_types";


export const coinsRequested = () => {
    return {
        type: actionTypes.coinsRequested,
    }
}


export const APICallBegan = (data) => {
    return {
        type: actionTypes.apiCallBegan,
        payload: data
    }
}


export const APICallSuccess = () => {
    return {
        type: actionTypes.apiCallSuccess,
    }
}


export const APICallFaild = () => {
    return {
        type: actionTypes.apiCallFaild,
    }
}


export const recievedCoins = (data) => {
    return {
        type: actionTypes.recievedCoins,
        payload: data
    }
}
