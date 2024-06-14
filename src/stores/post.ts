import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import type { IPostData } from '@/service/post/type'
import { getPostsByColumn } from "@/service/post/post";


export const usePostStore = defineStore('post', () => {
  const postList = ref<IPostData[]>([])
  const currentPost = ref<IPostData | null>(null)

  const fetchPosts = async (columnId: string, params: {}) => {
    params = { page: 1, pageSize: 5 }
    const res = await getPostsByColumn(columnId, params)
    postList.value = res.data.list
  }

  
  
  return {
    postList,
    currentPost,
    fetchPosts
  }
})