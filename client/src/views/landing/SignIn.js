import React, { useState,useEffect } from 'react'
import '../../styles/SignIn.css'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { SetUserAction } from '../../actions/SetUserAction';
import Axios from 'axios';
export default function SignIn() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    var user = useSelector(state => state.SetUserReducer.user)
    const navigate = useNavigate();
    useEffect(()=>{
        if(user!="null"){
          navigate('/home');
        }
        //console.log("Landing");
      })
    const navigateTo = (page) => {
        if (page == "home") {
            navigate('');
        } else {
            navigate('/' + page);
        }
    }
    const handleSubmit = (e) => {
        Axios.post("http://localhost:5001/api/signinuser", {
            email: email,
            password: password,
        }).then((response) => {
            /*Axios.get("http://localhost:5000/api/get").then((response) => {
              console.log("helo");
            });*/
            if(response.data!="err"){
                console.log("sadasd");
                dispatch(SetUserAction(response.data));
                console.log(user)
                //window.location.reload(true);
            }
            //console.log(response.data);
        });
        //e.preventDefault();
        //console.log(e.target[0].value);


    }
    return (
        <div className='SignInContainer'>
            <div className='form'>
                <div className='formContainer'>
                    <div className='formTitle'>Login</div>
                    <hr className='divider'></hr>
                    <div className='formInput'>
                        <form className='signInForm'>
                            <input type={'name'} autoComplete="off" onChange={(event)=>setEmail(event.target.value)} required></input>
                            <label className='placeholder'>User name</label>
                            <input type={'password'} onChange={(event)=>setPassword(event.target.value)} required></input>
                            <label className='placeholder'>Password</label>
                            <div className='submitButton' onClick={handleSubmit}>Sign In</div>
                            <span className='signupLink'>Not registered yet? <span className='signupText' onClick={() => navigateTo("signup")}>Sign up</span> now.</span>
                        </form>
                    </div>
                </div>
            </div>
            <div className='signInImage'>
                <div className='img'></div>
            </div>
        </div>
    )
}
