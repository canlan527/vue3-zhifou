import { defineStore } from "pinia"
import type { ImageProps, ListDictType, ResponseType, ListResType } from "./utils"
import { ref } from "vue"
import type { IColumnItemProps, IColumnListProps } from "@/service/column/type"
import { getColumn, getColumnList } from "@/service/column/column"
// export interface ColumnProps {
//   _id: string
//   title: string
//   avatar?: ImageProps
//   description: string
// }

// export interface GlobalColumnProps {
//   data: ListDictType<ColumnProps>
//   currentPage: number
//   total: number
// }

export const useColumnStore = defineStore("column", () => {
  // let columnList = ref<ListDictType<IColumnItemProps>>({})
  // 专栏列表
  let columnList = ref<IColumnItemProps[] | []>([])
  // 单个专栏项
  let column = ref<IColumnItemProps | null>(null)
  const currentPage = ref(1) // 当前页数
  const total = ref(0) // 总页数
  // 根据id获取专栏项 getters
  const getColumnById = (id: string) => columnList.value.find((item) => item._id === id) || null
  // 获取专栏列表
  async function fetchColumns(params: any = {}) {
    const { currentPage = 1, pageSize = 6 } = params
    const res = await getColumnList(params)
    if(res.data) {
      columnList.value = res.data.list
    }
  }
  // 获取单个专栏详情
  async function fetchColumn(id: string) {
    const res = await getColumn(id)
    column.value = res.data
  }

  return {
    columnList,
    column,
    getColumnById,
    currentPage,
    total,
    fetchColumns,
    fetchColumn,
  }
})