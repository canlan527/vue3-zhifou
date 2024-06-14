import axios from 'axios'
import type { AxiosInstance, AxiosRequestHeaders, AxiosResponse } from 'axios'
import type { XNRequestInterceptor, XNRequestConfig } from './type'
import API_KEY from './api_keys'
import type { IDataType } from '../types'


class XNRequest<T = any> {
  instance: AxiosInstance
  interceptors?: XNRequestInterceptor<T> // 请求拦截器
  

  constructor(config: XNRequestConfig) {
    this.instance = axios.create(config)// 创建axios实例
    this.interceptors = config.interceptors // 请求拦截器
    // 设置默认请求头
    //this.instance.defaults.headers.common['Content-Type'] = 'application/json';

    // 如果某个实例的config中有定义拦截的回调函数，那么将这些函数添加到实例的拦截器中
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    // 响应拦截器
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 给所有实例添加全局拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // 这里可以做一些全局的请求拦截器的操作
        // 将 API_KEY 添加到请求参数中，get请求添加到url中
        config.params = config.method === 'get'? {
          ...config.params,
          icode: API_KEY 
        } : {
          ...config.params,
        }
        // 其他请求添加到 body 中， 如果是上传文件 添加到 FormData 中
        if (config.data instanceof FormData) {
          config.data.append('icode', API_KEY)
        } else {
          config.data = {
           ...config.data,
            icode: API_KEY
          }
        }
        return config
      },
      (error) => {
        // 这里可以做一些全局的请求拦截器的错误处理
        return Promise.reject(error)
      }
    )
    // 响应拦截器
    this.instance.interceptors.response.use(
      (res) => {
        // 这里可以做一些全局的响应拦截器的操作
        return res
      },
      (error) => {
        // 这里可以做一些全局的响应拦截器的错误处理
        return Promise.reject(error)
      }
    )
  }

  request<T = any>(config: XNRequestConfig): Promise<T> {
    // return this.instance.request(config)
    return new Promise((resolve, reject) => {
      this.instance.request<T, T>(config).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
        return Promise.reject(err)
      })
    })
  }

  get<T = any>(config: XNRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config,method: 'GET' })
  }

  post<T = any>(config: XNRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  put<T = any>(config: XNRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PUT' })
  }

  patch<T = any>(config: XNRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }

  delete<T = any>(config: XNRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
}

export default XNRequest
