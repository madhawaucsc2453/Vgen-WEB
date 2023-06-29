import React, { useState,useEffect } from 'react'
import '../../styles/SignUp.css'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Axios from 'axios';
export default function SignUp() {
  var user = useSelector(state => state.SetUserReducer.user)
  const [role, setRole] = useState('customer');
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [confirmpassword,setConfirmPassword] = useState('');
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
  const handleSubmit =(e)=>{
    Axios.post("http://localhost:5001/api/registeruser", {
      email: email,
      password: password,
    }).then((response) => {
      /*Axios.get("http://localhost:5000/api/get").then((response) => {
        console.log("helo");
      });*/
      console.log(response.data);
    });
   //e.preventDefault();
    //console.log(e.target[0].value);
    
    
  }
  return (
    <div className='SignUpContainer'>
      <div className='formSignUp'>
        <div className='formSignUpContainer'>
          <div className='formSignUpTitle'>Sign Up</div>
          <hr className='divider'></hr>
          <div className='formSignUpInput'>
            <form className='signUpFormClass' >
            {name}
              <input type={'text'} name="username" autoComplete="off" onChange={(event)=>setName(event.target.value)}  required></input>
              <label className='signUpPlaceholder'>Name</label>
              <input type={'email'} autoComplete="off" name="email" onChange={(event)=>setEmail(event.target.value)} required></input>
              <label className='signUpPlaceholder'>Email</label>
              <input type={'password'} autoComplete="off" name="password" onChange={(event)=>setPassword(event.target.value)} required></input>
              <label className='signUpPlaceholder'>Password</label>
              <input type={'password'} autoComplete="off" onChange={(event)=>setConfirmPassword(event.target.value)} required></input>
              <label className='signUpPlaceholder'>Confirm password</label>
              <div className='submitButton' onClick={handleSubmit}>Sign In</div>
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