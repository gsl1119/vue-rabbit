import axios from "axios";

const httpInstance = axios.create({
  baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
  timeout: 5000,
});

httpInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (e) => Promise.inject(e)
);

httpInstance.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (e) => Promise.inject(e)
);

export default httpInstance;
