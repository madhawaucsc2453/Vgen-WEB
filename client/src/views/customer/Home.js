import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Button from '../../components/Button';
import Axios from 'axios';
export default function Home() {
    const number = useSelector(state => state.CounterReducer.counter);
    const [name, setName] = useState('');
    const val = useSelector(state => state.ValueReducer.value)
    var num = "";
    useEffect(() => {
        console.log("hello")
        Axios.get("http://localhost:5001/api/data").then((response) => {
            //num = response.name;
            //console.log((response.data[0].name));
            setName(response.data[0].name);
        });
    })

    return (
        <div style={{ width: "94vw", height: "100vh", overflowY: "auto" }}>
            Home : {number} <Button /><br></br>
            This is Customer home window {name}
        </div>

    )
}
