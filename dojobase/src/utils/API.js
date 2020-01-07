import axios from "axios";

export default axios.create({
  baseURL: "https://fast-ridge-63384.herokuapp.com/api/",
  responseType: "json"
});