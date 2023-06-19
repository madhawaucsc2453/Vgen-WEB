import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IncrementCounterAction } from '../actions/IncrementCounterAction'
export default function Button() {
    const dispatch = useDispatch();
    const increaseCounter = () => {
        dispatch(IncrementCounterAction());
    };

    return (
        <button onClick={() => increaseCounter()} >Increment</button>
    )
}
