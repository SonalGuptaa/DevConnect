import React from 'react'
import './css/login.css'
function Login() {
  return (
   <div className="loginScreen">
      <form>
      {/* <img src='DevConnect-removebg'/> */}
      <img src={require('./img/DevConnect-removebg.png')} alt="Logo" />
        <input type='text' placeholder='Full Name'/>
        <input type='text' placeholder='Profile Picture URL'/>
        <input type='email' placeholder='Email'/>
        <input type='password' placeholder='Password'/>
        <input type='submit' placeholder='Sign Up'/>

        <h4>Already a member? <span>Login Here</span></h4>
      </form>
   </div>
  )
}

export default Login
