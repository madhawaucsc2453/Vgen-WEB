import { INCREMENT_COUNTER } from "../constants/ActionTypes";
const initialState = {
    counter: 18,
    count: 6
}
const CounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            //addToDatabase(state);
             
            /*Axios.post("http://localhost:5001/api/insertName", {
                num: state.counter + 1
            })*//*.then(() => {
                 Axios.get("http://localhost:5001/api/get").then((response) => {
                     setUsers(response.data);
                 });
             });*/
            return {
                //counter:getFromDatabase(),
                ...state,
                counter: state.counter+ action.data
            }
        default: return state
    }
}
export default CounterReducer;