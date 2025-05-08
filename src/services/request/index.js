// 封装网络请求库 便于随时切换网络请求库、降低切换时的维护成本
import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";

class HYRequest {
    constructor(baseURL, timeout) {
        this.instance = axios.create({
            // 请注意：axios库中封装的基路径字段名就是baseURL 不要随意篡改
            baseURL,
            timeout
        })

        // 在此对响应数据做统一拦截 需要将返还的数据进行拆解得到最真实的数据
        this.instance.interceptors.response.use(res => res.data, err => err)
    }

    request(config) {
        return this.instance.request(config)
    }

    get(config) {
        return this.request({...config, method: "get"})
    }

    post(config) {
        return this.request({...config, method: "post"})
    }
}

const request1 = new HYRequest(BASE_URL, TIMEOUT)
export default request1