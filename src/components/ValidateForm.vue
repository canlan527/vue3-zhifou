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
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ValidateForm',
  emits: ['submit'],
  setup(props, { emit}) {
    const handleSubmit = () => {
      emit('submit', true)
    }
    return {
      handleSubmit, 
    }
  }
})
</script>
<style scoped>
  
</style>