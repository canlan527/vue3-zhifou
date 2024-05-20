<template>
  <div class="validate-form">
    <!-- 默认内容 -->
    <slot></slot>
    <!-- 指定按钮 -->
    <div class="btn-area" @click="handleSubmit">
      <slot name="btn">
        <!-- 不传内容时默认显示 -->
        <button class="btn btn-primary">提交</button>
      </slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'
import mitt from 'mitt'


type funcType = () => boolean

type Events = {
  'form-validate-success': funcType
}

export const emitter = mitt<Events>()

export default defineComponent({
  name: 'ValidateForm',
  emits: ['submit'],
  setup(props, { emit}) {
    let funcArr: funcType[] = []

    const handleSubmit = () => {
      // 表单验证
      const result = funcArr.map(func => func()).every(item => item)
      
      emit('submit', result)
    }

    const formValidateSuccess = (func: funcType) => {
      funcArr.push(func)
    }
    // 添加监听事件
    emitter.on('form-validate-success', formValidateSuccess)

    // 组件销毁时移除监听事件
    onUnmounted(() => {
      emitter.off('form-validate-success', formValidateSuccess)
      funcArr = []
    })

    return {
      handleSubmit, 
    }
  }
})
</script>
<style scoped>
  
</style>