import axios from "axios";

const request = axios.create({
  baseURL: "http://0.0.0.0:3000",
  timeout: 2000,
  headers: {
    "Content-Type": "application/json",
  },
})

export default request;