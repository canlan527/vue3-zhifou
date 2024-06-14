import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { postsData, type PostProps } from "@/testData";

defineStore('post', () => {
  const posts = reactive<PostProps[]>(postsData)
  const currentPost = ref<PostProps | null>(null)


  return {
    posts,
    currentPost
  }
})