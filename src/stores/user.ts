import { defineStore } from "pinia"
import type { ImageProps } from "./utils"
import { ref } from "vue"
import { getUserInfo, login, register } from "@/service/user/user"
import type { ILoginParams, IRegisterParams } from "@/service/user/type"
import localstorage from '@/utils/storage'

export interface UserDataProps {
  nickName?: string
  _id?: string
  column?: string
  email?: string
  avatar?: ImageProps
  description?: string
}

export interface UserProps {
  isLogin: boolean
  nickName?: string
  _id?: string
  column?: string
  email?: string
}

export const useUserStore = defineStore('user', () => {
  const user = ref<UserProps>({
    isLogin: false,
  })
  let token = ref(localstorage.get('token') || '')

  async function fetchUserLogin(data: ILoginParams) {
    const res = await login(data)
    if (res.code === 0) {
      // 请求成功, 保存token
      token = res.data?.token
      localstorage.set('token', token)
    }
  }

  async function fetchCurrentUser() {
    const res = await getUserInfo()
    // console.log(res)
    if (res.code === 0) {
      // 保存用户信息
      user.value = { isLogin: true, ...res.data }
    }
  }

  async function loginAndFetch(data: ILoginParams) {
    return await fetchUserLogin(data).then(async () => {
      return await fetchCurrentUser()
    })
  }

  async function signup(data: IRegisterParams) {
    const res = await register(data)
    console.log(res)
  }

  return {
    user,
    token,
    fetchCurrentUser,
    loginAndFetch,
    signup,
  }
})