import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Button2 from '../../components/Button2'
export default function Order() {
    useEffect(() => {
        console.log("Hello Home");
    })
    const val = useSelector(state => state.ValueReducer.value)
    return (
        <div>
            Order : {val} <Button2 /><br></br>
            This is Customer order window
        </div>
    )
}
