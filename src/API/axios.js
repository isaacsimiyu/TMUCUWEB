import axios from "axios";

// Log the API URL to verify it's set correctly
console.log("API URL:", process.env.REACT_APP_API_URL);

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:3500",
});

export default API;
