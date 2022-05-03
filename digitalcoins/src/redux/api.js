import * as actionTypes from "./action_types";
import { APICallBegan } from "./actions";



const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false";


export const loadCoins = () => (dispatch, getState) => {
    return dispatch(APICallBegan({
        url,
        method: "get",
        onStart: actionTypes.coinsRequested,
        onRecieved: actionTypes.recievedCoins,
        onSuccess: actionTypes.apiCallSuccess,
        onFaild: actionTypes.apiCallFaild
    }));
}