import axios from "axios";

const service = axios.create({
  baseURL: "http://192.168.10.113:5173/",
  timeout: 5000,
});

export default service;
