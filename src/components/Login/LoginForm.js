import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginForm.css";
import API from "../../API/axios";

const LOGIN_URL = "/api/login";
// Define the admin page URL here
const ADMIN_PAGE_URL = "/admin";

const LoginForm = () => {
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Clear error message on component mount
    return () => {
      setErrMsg("");
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!email || !password) {
      setErrMsg("Please enter both email and password");
      setLoading(false);

      setTimeout(() => {
        setErrMsg("");
      }, 5000);

      return;
    }

    try {
      const response = await API.post(LOGIN_URL, {
        email,
        password,
      });

      const { authToken } = response?.data;

      localStorage.setItem("authToken", authToken);
      console.log("Login successful!");

      // Redirect to the admin page
      navigate(ADMIN_PAGE_URL);
      
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Invalid email or password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
    }

    setLoading(false);

    setTimeout(() => {
      setErrMsg("");
    }, 5000);
  };

  return (
    <div>
    <div className="login">
      <form className="login-form-container" onSubmit={handleSubmit}>
        <h1>Welcome Back</h1>
        <input
          type="email"
          id="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
          ref={emailInputRef}
        />
        <input
          type="password"
          id="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
          ref={passwordInputRef}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
        {errMsg && <p className="error">{errMsg}</p>}
        <div className="register-link">
          
        </div>
      </form>
    </div>
    </div>

  );
};

export default LoginForm;
