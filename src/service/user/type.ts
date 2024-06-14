// 用户登录
export interface ILoginParams {
  email: string
  password: string
}
// 用户注册
export interface IRegisterParams {
  email: string
  password: string
  nickName: string
}

// 更新用户信息
export interface IUserInfo {
  _id: number
  email: string
  nickName: string
  avatar: string
  column: string
  createdAt: string
}
