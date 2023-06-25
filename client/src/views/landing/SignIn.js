import React from 'react'
import '../../styles/SignIn.css'
import { useNavigate } from 'react-router-dom';
export default function SignIn() {
    const navigate = useNavigate();
    const navigateTo = (page) => {
        if (page == "home") {
            navigate('');
        } else {
            navigate('/' + page);
        }
    }
    return (
        <div className='SignInContainer'>
            <div className='form'>
                <div className='formContainer'>
                    <div className='formTitle'>Login</div>
                    <hr className='divider'></hr>
                    <div className='formInput'>
                        <input type={'name'} autoComplete="off" required></input>
                        <label className='placeholder'>User name</label>
                        <input type={'password'} required></input>
                        <label className='placeholder'>Password</label>
                        <div className='submitButton'>Sign In</div>
                        <span className='signupLink'>Not registered yet? <span className='signupText' onClick={()=>navigateTo("signup")}>Sign up</span> now.</span>
                    </div>
                </div>
            </div>
            <div className='signInImage'>
                <div className='img'></div>
            </div>
        </div>
    )
}
