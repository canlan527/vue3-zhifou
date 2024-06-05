import { defineStore } from "pinia"
import type { ImageProps } from "./utils"
import { ref } from "vue"

export interface UserDataProps {
  nickName?: string
  _id?: string
  column?: string
  email?: string
  avatar?: ImageProps
  description?: string
}

export interface UserProps {
  // token: string
  isLogin: boolean
  // data: null | UserDataProps
  name: string
}

export const useUserStore = defineStore('user', () => {
  // const token = ref(localStorage.getItem('token') || '')
  // const isLogin = ref(false)
  // const name = ref('canlan')
  // const data = ref<null | UserDataProps>(null)
  const user = ref<UserProps>({
    isLogin: false,
    name: 'canlan'
  })
  
  return {
    // token,
    // isLogin,
    // name,
    // data
    user,
  }
})