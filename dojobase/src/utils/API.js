import axios from "axios";

export default axios.create({
  // baseURL: "https://fast-ridge-63384.herokuapp.com/api/",
  baseURL: "http://localhost:3000/api/",
  responseType: "json"
});

