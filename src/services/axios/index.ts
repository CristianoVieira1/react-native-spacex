import axios from "axios";

const API = axios.create({
  baseURL: "https://api.spacexdata.com/v5",
  timeout: 90000,
});

export default API;
