import { INCREMENT_COUNTER } from "../constants/ActionTypes";
import Axios from 'axios';
const initialState = {
    counter: 18,
    count: 6
}
const CounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            //incCounter(state)
            Axios.post("http://localhost:5001/api/insertName", {
                 num: state.counter + 1
             })/*.then(() => {
                 Axios.get("http://localhost:5001/api/get").then((response) => {
                     setUsers(response.data);
                 });
             });*/
            return {
                ...state,
                counter: state.counter + 1
            }
        default: return state
    }
}
export default CounterReducer;