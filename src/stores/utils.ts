// 图片接口返回类型
export interface ImageProps {
  _id?: string
  url?: string
  createdAt?: string
  fitUrl?: string
}

// 请求接口返回类型
export interface ResponseType<P = Record<string, never>> {
  code: number
  msg: string
  data: P
}

export interface ListDictType<P> {
  [id: string]: P
}

// 列表接口返回类型
export interface ListResponseType<P> {
  list: P[]
  count: number
  currentPage: number
  pageSize: number
}

export type ListResType<P = any> = ResponseType<ListResponseType<P>>