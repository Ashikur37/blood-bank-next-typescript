import Cookies from "universal-cookie";

const axios = require("axios");
// const url = "https://admin.beautyboothbd.com/";
const url = "http://localhost:3000/";
// const url = "https://beautybooth.com.bd/";

const cookies = new Cookies();
export default axios.create({
  baseURL: url,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${cookies.get("user_token") || ""}`,
  },
});