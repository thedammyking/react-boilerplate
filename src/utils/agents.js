import axios from "axios";

const baseURL = "https://.../api";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    // "Access-Control-Allow-Origin": "*",
    post: {
      "Content-Type": "application/json"
    }
  }
});

export const setToken = token => {
  if (token) {
    axiosInstance.defaults.headers.common["Authorization"] = `Token ${token}`;
  }
};

const postRequest = (uri, body) => axiosInstance.post(uri, {
  ...body
});
const getRequest = uri => axiosInstance.get(uri);

export const Auth = {
  login: body => postRequest("...", body),
  register: body => postRequest("...", body),
  resetPassword: body => postRequest("...", body),
  user: params => getRequest(`...${params}`)
};