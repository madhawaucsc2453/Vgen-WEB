import { INCREASE_VALUE } from "../constants/ActionTypes";
const initialState={
    value:22
}
const ValueReducer =(state=initialState,action)=>{
    switch (action.type) {
        case INCREASE_VALUE: return {
            ...state,
            value: state.value + 5
        }
        default: return state
    }
}
export default ValueReducer;