import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";

class HYRequest {
  constructor() {
    this.instance = axios.create({
      baseURL: BASE_URL,
      timeout: TIMEOUT
    })

    this.instance.interceptors.response.use((res) => {
      return res.data
    }, (err) => {
      // 只返回序列化的错误信息，避免在Redux中存储不可序列化的对象
      return Promise.reject({
        message: err.message,
        code: err.code,
        status: err.response?.status,
        statusText: err.response?.statusText
      })
    })
  }

  request(config) {
    return this.instance.request(config)
  }

  get(config) {
    return this.request({ ...config, method: "GET" })
  }

  post(config) {
    return this.request({ ...config, method: "POST" })
  }
}
export default HYRequest;