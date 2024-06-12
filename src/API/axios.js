import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3500", // Replace this with your actual backend API URL
});

export default API;
