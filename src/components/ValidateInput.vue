<template>
  <div class="validate-input-container pb-3">
    <input v-if="tag === 'input'" class="form-control" :class="{ 'is-invalid': inputRef.error }" v-bind="$attrs"
      :value="modelValue" @input="updateValue" @blur="validate()">

    <textarea v-else class="form-control" :class="{ 'is-invalid': inputRef.error }" v-bind="$attrs" :value="modelValue"
      @input="updateValue" @blur="validate()" />

    <div v-show="inputRef.error" class="invalid-feedback">{{ inputRef.message }}</div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, onMounted } from 'vue'
import type { PropType } from 'vue'
import { emitter } from './ValidateForm.vue'

const emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
const passwordReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/

export interface RuleProp {
  type: 'required' | 'email' | 'minLength' | 'maxLength' | 'password' | 'custom'
  message: string
  value?: number
  validator?: () => boolean
}

export type RulesProp = RuleProp[]
// 定义 input 类型： input、textarea
type TagType = 'input' | 'textarea'

export default defineComponent({
  name: 'ValidateInput',
  props: {
    rules: Array as PropType<RulesProp>,
    modelValue: String,
    tag: {
      type: String as PropType<TagType>,
      default: 'input'
    }
  },
  inheritAttrs: false, // 阻止继承父组件的属性
  emits: ['update:modelValue'], // 注册触发父组件的update:modelValue事件
  setup(props, { emit, attrs }) {
    const inputRef = reactive({
      val: props.modelValue || '',
      error: false,
      message: ''
    })

    // 监听input值变化
    const updateValue = (e: Event) => {
      const targetVal = (e.target as HTMLInputElement).value
      inputRef.val = targetVal
      emit('update:modelValue', targetVal)
    }

    // 验证方法
    const validate = () => {
      if (props.rules) {
        const allPassed = props.rules.every(rule => {
          let passed = true
          let val = inputRef.val
          switch (rule.type) {
            case 'required':
              passed = val.trim() !== ''
              inputRef.message = rule.message
              break;
            case 'email':
              passed = emailReg.test(val)
              inputRef.message = rule.message
              break;
            case 'password':
              passed = passwordReg.test(val)
              inputRef.message = rule.message
              break;
            case 'maxLength':
              passed = val.length <= rule.value!
              inputRef.message = rule.message
              break;
            case 'minLength':
              passed = val.length >= rule.value!
              inputRef.message = rule.message
              break;
            case 'custom':
              passed = rule.validator ? rule.validator() : true
              inputRef.message = rule.message
              break;
            default:
              break;
          }

          return passed
        })
        inputRef.error = !allPassed
        return allPassed
      }
      return true
    }

    // 清空input方法
    const clearInput = () => {
      inputRef.val = ''
    }

    onMounted(() => {
      // 触发emitter监听事件
      emitter.emit('form-validate-success', validate)
      // 验证失败时触发clearInput方法
      if(!inputRef.error) {
        emitter.emit('clear-input', clearInput)
      }
    })

    return {
      inputRef,
      validate,
      updateValue,
    }
  }
})
</script>
<style scoped></style> 