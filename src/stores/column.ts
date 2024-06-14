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
  let columnList = ref<IColumnItemProps[] | []>([])
  let column = ref<IColumnItemProps | null>(null)
  const currentPage = ref(1)
  const total = ref(0)

  async function fetchColumns(params: any = {}) {
    const { currentPage = 1, pageSize = 6 } = params
    const res = await getColumnList(params)
    columnList.value = res.data.list
  }

  async function fetchColumn(id: string) {
    const res = await getColumn(id)
    column.value = res.data
  }

  return {
    columnList,
    column,
    currentPage,
    total,
    fetchColumns,
    fetchColumn,
  }
})