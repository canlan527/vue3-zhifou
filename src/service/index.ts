// service 统一出口
import type { AxiosRequestHeaders } from "axios";
import XNRequest from "./request";
import { BASE_URL, TIMEOUT } from "./request/config";
import localstorage from "@/utils/storage";
import { useGlobalStore } from "@/stores/global";

const request = new XNRequest({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  // headers: {
  //   "Content-Type": "application/json;charset=UTF-8"
  // } as AxiosRequestHeaders,
  interceptors: {
    requestInterceptor: (config) => {
      const token = localstorage.get("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      // loading
      const globalStore = useGlobalStore();
      const { setLoading } = globalStore;
      setLoading(true);
      return config;
    },
    requestInterceptorCatch: (error) => {
      return error
    },
    responseInterceptor: (res) => {
      // loading
      const globalStore = useGlobalStore();
      const { setLoading } = globalStore;
      setTimeout(() => {
        setLoading(false);
      },1500)

      return res.data
    },
    responseInterceptorCatch: (error) => {
      return error
    }
  },
})

export default request;