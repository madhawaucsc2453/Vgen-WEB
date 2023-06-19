import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Button2 from '../components/Button2'
export default function Order() {
    const val = useSelector(state => state.ValueReducer.value)
    return (
        <div>Order : {val} <Button2/></div>
    )
}
