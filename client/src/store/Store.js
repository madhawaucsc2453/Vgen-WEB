import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "@reduxjs/toolkit"
import CounterReducer from "../reducers/CounterReducer"
import ValueReducer from "../reducers/ValueReducer";
const rootReducer = combineReducers({ 
    CounterReducer,
    ValueReducer
})
const Store = configureStore({
    reducer:rootReducer
});
export default Store;