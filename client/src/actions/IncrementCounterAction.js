import { INCREMENT_COUNTER } from "../constants/ActionTypes";
export const IncrementCounterAction =(payload)=>{
    return{
        type:INCREMENT_COUNTER,
        data:payload
    }
}