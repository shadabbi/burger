import axios from "axios";

export default axios.create({
  baseURL: "https://burger-96dcf.firebaseio.com/",
});
