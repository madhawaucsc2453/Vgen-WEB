import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Button from '../../components/Button';
export default function DeliveryHome() {
    useEffect(() => {
        console.log("Hello Home");
    })
    const number = useSelector(state => state.CounterReducer.counter);
    const val = useSelector(state => state.ValueReducer.value)
    return (
        <div style={{ backgroundColor: "gray", width: "94vw", height: "100vh", overflowY: "auto" }}>
            Home : {number} <Button />
            This is Delivery home window
        </div>

    )
}
