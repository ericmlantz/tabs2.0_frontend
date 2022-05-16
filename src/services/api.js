import Axios from "axios";

export const BACKEND = 'https://tabs2-backend.herokuapp.com/'
export const FRONTEND = 'http://localhost:3001/'

const Client = Axios.create({ baseURL: FRONTEND });

Client.interceptors.request.use(
  (config) => {
    // Reads the token in localStorage
    const token = localStorage.getItem("token");
    // if the token exists, we set the authorization header
    if (token) {
      config.headers["authorization"] = `Bearer ${token}`;
    }
    return config; // We return the new config if the token exists or the default config if no token exists.
    // Provides the token to each request that passes through axios
  },
  (error) => Promise.reject(error)
);

export default Client;
