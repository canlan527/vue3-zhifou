// 定义接口返回的格式
export interface IDataType<T = any> {
  code: number
  data: T
  msg: string
}