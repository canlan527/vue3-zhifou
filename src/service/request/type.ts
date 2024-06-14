import type { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios"

// 定义拦截器的类型, T是响应数据类型 res.data
export interface XNRequestInterceptor<T = any> {
  requestInterceptor?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig>
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: AxiosResponse<T>) => AxiosResponse<T> | Promise<AxiosResponse<T>>
  responseInterceptorCatch?: (error: any) => any
}

export interface XNRequestConfig<T = any> extends AxiosRequestConfig {
  interceptors?: XNRequestInterceptor<T>
  // 自定义配置项
  [key: string]: any
}
