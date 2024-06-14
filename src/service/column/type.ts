// 专栏中的image类型
export interface IImageProps {
  _id: string
  url: string
  createdAt: string
}
// 单个专栏类型
export interface IColumnItemProps {
  _id: string
  title: string
  description: string
  avatar: IImageProps
  author: string
  createdAt: string
}
// 整体专栏列表类型
export interface IColumnListProps<T> {
  count: number
  pageSizes: number
  currentPage: number
  list: T[]
}

export interface IUpdateColumnProps {
  title: string
  description: string
  avatar: string
}