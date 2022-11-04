
import axios from "axios";
import { stringify } from "qs";

  const axiosClient = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
      "content-type": "application/json"
    },
    paramsSerializer: {
        serialize: stringify
    }
  });
  
  axiosClient.interceptors.response.use(
    (response) => {
      if (response && response.data) {
        return response.data;
      }
      return response;
    },
    (error) => {
      throw error;
    }
  );

export { axiosClient }