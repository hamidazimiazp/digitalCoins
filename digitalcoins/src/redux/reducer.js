import * as actionTypes from "./action_types";


const reducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.recievedCoins:
            return [...action.payload.data];
        default:
            return state
    }
}


export default reducer;