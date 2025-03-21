import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Forgottenpassword.css";
import API from "../../API/axios";

const FORGOT_PASSWORD_URL = "/api/forgot-password";

const ForgottenPassword = () => {
  const emailInputRef = useRef(null);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Clear error and success messages on component mount
    setErrMsg("");
    setSuccessMsg("");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!email) {
      setErrMsg("Please enter your email address");
      setLoading(false);
      setTimeout(() => {
        setErrMsg("");
      }, 5000);
      return;
    }

    try {
      const response = await API.post(FORGOT_PASSWORD_URL, { email });

      setSuccessMsg("Password reset link sent! Check your email.");
      setEmail("");
      
      setTimeout(() => {
        setSuccessMsg("");
        navigate("/login");
      }, 5000);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Invalid email address");
      } else {
        setErrMsg("Password reset failed");
      }
    }

    setLoading(false);

    setTimeout(() => {
      setErrMsg("");
    }, 5000);
  };

  return (
    <div className="forgot-password">
      <form className="forgot-password-form-container" onSubmit={handleSubmit}>
        <h1>Forgotten Password</h1>
        <input
          type="email"
          id="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
          ref={emailInputRef}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Reset Link"}
        </button>
        {errMsg && <p className="error">{errMsg}</p>}
        {successMsg && <p className="success">{successMsg}</p>}
        <div className="login-link">
          <Link to="/login">Back to Login</Link>
        </div>
      </form>
    </div>
  );
};

export default ForgottenPassword;
