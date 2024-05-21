<template>
  <form class="validate-form">
    <!-- 默认内容 -->
    <slot></slot>
    <!-- 指定按钮 -->
    <div class="btn-area" @click.prevent="handleSubmit">
      <slot name="btn">
        <!-- 不传内容时默认显示 -->
        <button class="btn btn-primary">提交</button>
      </slot>
    </div>
  </form>
</template>
<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'
import mitt from 'mitt'


type ValidateFuncType = () => boolean
type ClearInputType = () => void

type Events = {
  'form-validate-success': ValidateFuncType
  'clear-input': ClearInputType
}

export const emitter = mitt<Events>()

export default defineComponent({
  name: 'ValidateForm',
  emits: ['submit'],
  setup(props, { emit}) {
    let validFuncArr: ValidateFuncType[] = []
    let clearFuncArr: ClearInputType[] = []

    // 表单提交
    const handleSubmit = () => {
      // 表单验证
      const flags = validFuncArr.map(func => func())
      const flag = flags.every(flag => flag)
      
      if(!flag) { // 表单验证失败
        // 执行清空操作
        console.log('表单验证失败,  清空表单项')
        clearFuncArr.forEach(func => {
          console.log(func)
          func()
        })
      }
      // 执行提交操作
      emit('submit', flag) 
    }
    
    // 添加清空事件
    const clearInput = (func: ClearInputType) => {
      clearFuncArr.push(func)
    }

    // 添加表单验证成功回调事件
    const formValidateSuccess = (func: ValidateFuncType) => {
      validFuncArr.push(func)
    }

    // 添加监听事件
    emitter.on('form-validate-success', formValidateSuccess)
    emitter.on('clear-input', clearInput)

    // 组件销毁时移除监听事件
    onUnmounted(() => {
      emitter.off('form-validate-success', formValidateSuccess)
      emitter.off('clear-input', clearInput)
      validFuncArr = []
      clearFuncArr = []
    })

    return {
      handleSubmit, 
    }
  }
})
</script>
<style scoped>
  
</style>