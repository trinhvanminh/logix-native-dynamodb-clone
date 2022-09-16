import axios from "axios";
import { getData } from "../helpers/AsyncStorage";
export const baseUrl = "https://logix-film-v2.herokuapp.com";
// export const baseUrl = "http://localhost:4000";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
const axiosClient = axios.create({
  headers: {
    "content-type": "application/json",
  },
});

axiosClient.interceptors.request.use(async (config) => {
  const token = await getData("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default axiosClient;
