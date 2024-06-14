import request from '..'
import type { ICreatePostData, IUpdatePostData } from './type'

// 获取某一专栏的文章列表
export function getPostsByColumn(columnId: string, { currentPage = 1, pageSize = 5 }) {
  return request.get({
    url: `/api/columns/${columnId}/posts`,
    params: {
      currentPage,
      pageSize
    }
  })
} 

// 获取单个文章详情
export function getPost(id: string) {
  return request.get({
    url: `/api/posts/${id}`
  })  
}
// 新建文章
export function createPost(data: ICreatePostData) {
  return request.post({
    url: '/api/posts',
    data
  })
}
// 更新文章
export function updatePost(id: string, data: IUpdatePostData) {
  return request.patch({
    url: `/api/posts/${id}`,
    data
  })
}
// 删除文章
export function deletePost(id: string) {
  return request.delete({
    url: `/api/posts/${id}`
  })
}