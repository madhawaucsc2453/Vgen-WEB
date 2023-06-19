import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Button from '../components/Button';
export default function Home() {
    const number = useSelector(state => state.CounterReducer.counter);
    const val = useSelector(state => state.ValueReducer.value)
    return (
        <div style={{ backgroundColor: "gray", width: "94vw", height: "100vh", overflowY: "auto" }}>Home : {number} <Button /></div>

    )
}
