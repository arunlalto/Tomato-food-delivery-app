import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currentState, setcurrentState] = useState("Login");
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currentState === "Login" ? (
            <></>
          ) : (
            <>
            <input type="text" placeholder="Your name" required />
            <input type="text" placeholder="Your phone number" required />
            </>
          )}
          <input type="text" placeholder="email" required />
          <input type="text" placeholder="password" required />
        </div>
        <button>
          {currentState === "SignUp" ? "Create Account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continouing I agree to the terms of use & privacy policy.</p>
        </div>
        {currentState === "Login" ? (
          <p>
            Create a new Account?<span onClick={()=>setcurrentState("SignUp")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an Account?<span onClick={()=>setcurrentState("Login")}>Click here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
