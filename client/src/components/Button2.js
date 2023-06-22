import React from 'react'
import { useDispatch } from 'react-redux'
import { IncreaseValueAction } from '../actions/IncreaseValueAction';

export default function Button2() {
    const dispatch=useDispatch();
    const incrementValue=()=>{
        dispatch(IncreaseValueAction())
    }
    return (
        <button onClick={()=>incrementValue()}>Button2</button>
    )
}
