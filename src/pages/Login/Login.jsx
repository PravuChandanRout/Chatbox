import React, { useState } from "react";
import "./Login.css";
import assets from "../../assets/assets";

const Login = () => {
  const [curState, setCurState] = useState("Sign Up");
  return (
    <div className="login">
      <img src={assets.logo_big} alt="" className="logo" />
      <form className="login-form">
        <h2>{curState}</h2>
        {curState === "Sign Up" ? (
          <input
            type="text"
            placeholder="Username"
            className="form-input"
            required
          />
        ) : null}

        <input
          type="email"
          placeholder="Email"
          className="form-input"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="form-input"
          required
        />
        <button type="submit">
          {curState === "Sign Up" ? "Create account" : "Login Now"}
        </button>
        <div className="login-term">
          <input type="checkbox" />
          <p>Agree to the terms of use & privacy policy.</p>
        </div>
        <div className="login-forgot">
          {curState === "Sign Up" ? (
            <p className="login-toggle">
              Already have an account{" "}
              <span onClick={() => setCurState("Login")}>Login here</span>
            </p>
          ) : (
            <p className="login-toggle">
              Create an account{" "}
              <span onClick={() => setCurState("Sign Up")}>click here</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
