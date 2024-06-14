export interface IPostProps {
  _id: string;
  title: string;
  content?: string;
  excerpt?: string;
  image?: string;
  createdAt: string;
  column: string;
}

export interface ICreatePostData {
  title: string
  content: string
  image: string
  column: string
  author: string
}

export interface IPostUserData {
  _id: string
  email: string
  nickName: string
  description: string
  avatar: string
  column: string
  createdAt: string
}

export interface IPostImageData {
  _id: string
  url: string
  createdAt: string
}

export interface IPostData {
  _id: string
  title: string
  content: string
  excerpt: string
  image: IPostImageData
  createdAt: string
  column: string
  author: IPostUserData
}

export interface IUpdatePostData {
  title: string
  content: string
  image: string
}