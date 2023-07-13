import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "http://localhost:8081/api/v2",
  withCredentials: true,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});
