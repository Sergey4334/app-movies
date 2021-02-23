import axios from "axios";
const insrance = axios.create({
  baseUrl: process.env.VUE_APP_API_URL,
  params: {
    apikey: process.env.VUE_APP_API_KEY,
    plot: "full",
  },
});
export default insrance;