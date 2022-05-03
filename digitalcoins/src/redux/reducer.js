import * as actionTypes from "./action_types";


const reducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.recievedCoins:
            state = action.payload.data
        default:
            return state
    }
}


export default reducer;