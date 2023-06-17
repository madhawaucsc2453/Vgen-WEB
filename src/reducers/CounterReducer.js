import { INCREMENT_COUNTER } from "../constants/ActionTypes";
const initialState={
    counter:18
}
const CounterReducer =(state=initialState,action)=>{
    switch (action.type) {
        case INCREMENT_COUNTER: return {
            ...state,
            counter: state.counter + 1
        }
        default: return state
    }
}
export default CounterReducer;