import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Button2 from '../../components/Button2'
export default function DeliveryOrder() {
    useEffect(() => {
        console.log("Hello Home");
    })
    const val = useSelector(state => state.ValueReducer.value)
    return (
        <div>
            Order : {val} <Button2 />
            This is Delivery order  window
        </div>
    )
}
