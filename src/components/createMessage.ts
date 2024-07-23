import { createApp } from "vue";
import Message from "./Message.vue";

export type MessageType = "success"  | "default" | "error";

const createMessage = (type: MessageType, message: string,  timeout: number = 1500) => {
  // 创建实例
  const messageInstance = createApp(Message, {
    message,
    type,
  })
  // 挂载到节点
  const mountNode = document.createElement("div");
  document.body.appendChild(mountNode);
  messageInstance.mount(mountNode);
  // 定时销毁
  setTimeout(() => {
    messageInstance.unmount();
    document.body.removeChild(mountNode);
  }, timeout);  
}

export default createMessage; 