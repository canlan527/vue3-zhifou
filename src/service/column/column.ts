import request from ".."
import type { IUpdateColumnProps } from "./type"

// column 获得专栏列表 
export const getColumnList = ({currentPage = 1, currentSize = 5}) => {
  return request.get({
    url: "/api/columns",
    method: "get",
    params: {
      currentPage,
      currentSize
    }
  })
}


// 获得单个专栏详情
export const getColumn = (id: string) => {
  return request.get({
    url: `/api/columns/${id}`,
    method: "get"
  })
}

// 更新专栏
export const updateColumn = (id: string, data: IUpdateColumnProps) => {
  return request.put({
    url: `/api/columns/${id}`,
    method: "patch",
    data
  })
}