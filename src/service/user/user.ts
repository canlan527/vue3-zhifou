// 用户相关接口
import request from "..";
import type { ILoginParams, IRegisterParams, IUserInfo } from "./type";

// 用户登录
export const login = (data: ILoginParams) => {
  return request.post({
    url: "/api/user/login",
    data,
  });
};

// 用户注册
export const register = (data: IRegisterParams) => {
  return request.post({
    url: "/api/users",
    data,
  })
}
// 获取当前用户登录信息
export const getUserInfo = () => {
  return request.get({
    url: "/api/user/current",
  })
}

// 更新当前用户信息
export const updateUserInfo = (data: IUserInfo) => {
  return request.patch({
    url: "/api/user/current",
    data,
  })
}