import axios from "axios";
const BASE_URL = "https://resume.redberryinternship.ge/api";

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
  },
});
