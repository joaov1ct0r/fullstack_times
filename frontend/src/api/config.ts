import axios from "axios"

const apiURL = import.meta.env.VITE_API
const apiPORT = import.meta.env.VITE_API_PORT

const request = axios.create({
  baseURL: `http://${apiURL}:${apiPORT}`,
  timeout: 2000,
  headers: {
    "Content-Type": "application/json",
  },
})

export default request