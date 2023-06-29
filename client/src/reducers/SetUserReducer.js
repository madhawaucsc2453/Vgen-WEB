import { SET_USER } from "../constants/ActionTypes";
const initialState = {
    user:"null"
}
const SetUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            localStorage.setItem('type',action.data);
            return {
                //counter:getFromDatabase(),
                //...state,
                user: action.data
            }
        default: return state
    }
}
export default SetUserReducer;