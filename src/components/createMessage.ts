import { createApp, h, render } from "vue";
import Message from "./Message.vue";

export type MessageType = "success"  | "default" | "error";

const createMessage = (type: MessageType, message: string,  timeout?: number) => {
  // 创建实例
  const messageVNode = h(Message, {
    message,
    type,
  })
  // 挂载到节点
  const mountNode = document.createElement("div");
  document.body.appendChild(mountNode);
  render(messageVNode, mountNode);

  // 销毁
  const destory = () => {
    render(null, mountNode);
    document.body.removeChild(mountNode);
  }
  // 定时销毁
  if(timeout) {
    setTimeout(() => {
      destory();
    }, timeout);  
  }

  return {
    destory,
  }
}

export default createMessage; 