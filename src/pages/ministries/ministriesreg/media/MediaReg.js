import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../../../../API/axios";
import "./MediaReg.css";

const REGISTER_URL = "http://localhost:3500/api/media-registration";
const USER_REGEX = /^[a-zA-Z\s]+$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^(?:\+254|0)[17]\d{8}$/; // Kenyan phone number regex
const REGISTRATION_REGEX = /^[A-Z]{3}\/[A-Z]{2}\/\d{5}\/\d{3}$/;

const MediaReg = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [registrationNumberError, setRegistrationNumberError] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [yearOfStudy, setYearOfStudy] = useState(""); // State for Year of Study
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateName = () => {
    if (!USER_REGEX.test(name)) {
      setNameError("Please enter a valid name");
    } else {
      setNameError("");
    }
  };

  const validateEmail = () => {
    if (!EMAIL_REGEX.test(email)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const validateRegistrationNumber = () => {
    if (!REGISTRATION_REGEX.test(registrationNumber)) {
      setRegistrationNumberError("Please enter a valid registration number");
    } else {
      setRegistrationNumberError("");
    }
  };

  const validatePhoneNumber = () => {
    if (!PHONE_REGEX.test(phoneNumber)) {
      setPhoneNumberError("Please enter a valid phone number");
    } else {
      setPhoneNumberError("");
    }
  };

  const validateFields = () => {
    validateName();
    validateEmail();
    validateRegistrationNumber();
    validatePhoneNumber();

    if (
      nameError ||
      emailError ||
      registrationNumberError ||
      phoneNumberError
    ) {
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateFields()) {
      return;
    }

    try {
      setLoading(true);

      // Construct the data object to send to the server
      const data = {
        name,
        email,
        registrationNumber,
        phoneNumber,
        yearOfStudy,
      };

      const response = await API.post(REGISTER_URL, JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      console.log(response.data);
      navigate("pages/home");

      setName("");
      setEmail("");
      setRegistrationNumber("");
      setPhoneNumber("");
      setYearOfStudy("");
      setError("Registration successful!");
    } catch (error) {
      console.error(error);
      if (!error?.response) {
        setError("No Server Response");
      } else if (error.response?.status === 409) {
        setError("Username Taken");
      } else {
        setError("Registration Failed");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="registration">
        <form className="form-container" onSubmit={handleSubmit}>
          <h1>Become a Media Member</h1>
          <input
            type="text"
            id="name"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            onBlur={validateName}
            className={`input-field ${nameError ? "error" : ""}`}
          />
          {nameError && <p className="error-message">{nameError}</p>}
          <input
            type="email"
            id="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateEmail}
            className={`input-field ${emailError ? "error" : ""}`}
          />
          {emailError && <p className="error-message">{emailError}</p>}
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            placeholder="Phone Number"
            onChange={(e) => setPhoneNumber(e.target.value)}
            onBlur={validatePhoneNumber}
            className={`input-field ${phoneNumberError ? "error" : ""}`}
          />
          {phoneNumberError && (
            <p className="error-message">{phoneNumberError}</p>
          )}
          <input
            type="text"
            id="registrationNumber"
            value={registrationNumber}
            placeholder="Registration Number"
            onChange={(e) => setRegistrationNumber(e.target.value)}
            onBlur={validateRegistrationNumber}
            className={`input-field ${registrationNumberError ? "error" : ""}`}
          />
          {registrationNumberError && (
            <p className="error-message">{registrationNumberError}</p>
          )}
          <select
            id="yearOfStudy"
            value={yearOfStudy}
            onChange={(e) => setYearOfStudy(e.target.value)}
            className="input-field"
          >
            <option value="">Select Year of Study</option>
            <option value="year1">Year 1</option>
            <option value="year2">Year 2</option>
            <option value="year3">Year 3</option>
            <option value="year4">Year 4</option>
          </select>
          <button type="submit" className="button" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default MediaReg;
