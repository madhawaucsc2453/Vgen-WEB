import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IncrementCounterAction } from '../actions/IncrementCounterAction'
export default function Button(props) {
    return (
        <button onClick={props.fun} >Increment</button>
    )
}
