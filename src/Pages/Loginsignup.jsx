import React from 'react' 
import './css/Loginsignup.css'
const Loginsignup = () => {
  return (
   <>
   <div className="loginsignup">
    <div className="loginsignup-container">
      <h1>SignUp</h1>
      <div className="loginsignup-field">
        <input type="text" placeholder='YourName : ' />
        <input type="email" placeholder='YourEmail : ' />
        <input type="text" placeholder='YourPassword : ' />
      </div>
      <button>Continue</button>
      <p className="loginsignup-login">
        Already have an acount? <span>login here</span>
      </p>
      <div className="loginsignup-agree">
        <input type="checkbox" name='' id='' />
        <p>By continuoing , i agree to the terms & privacy policy.</p>
      </div>
    </div>
   </div>
   </>
  )
}

export default Loginsignup