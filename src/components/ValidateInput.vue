<template>
  <div class="validate-input-container pb-3">
    <input class="form-control" :class="{ 'is-invalid': inputRef.error }" v-bind="$attrs" :value="modelValue"
      @input="updateValue" @blur="validate(inputRef.val)">
    <div v-if="inputRef.error" class="invalid-feedback">{{ inputRef.message }}</div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
import type { PropType } from 'vue'

const emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
const passwordReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/

interface RuleProp {
  type: 'required' | 'email' | 'minLength' | 'maxLength' | 'password'
  message: string
  value?: number
}

export type RulesProp = RuleProp[]

export default defineComponent({
  name: 'ValidateInput',
  props: {
    rules: Array as PropType<RulesProp>,
    modelValue: String,
  },
  inheritAttrs: false,
  emits: ['update:modelValue'],
  setup(props, { emit, attrs }) {
    const inputRef = reactive({
      val: props.modelValue || '',
      error: false,
      message: ''
    })

    const updateValue = (e: Event) => {
      const targetVal = (e.target as HTMLInputElement).value
      inputRef.val = targetVal
      emit('update:modelValue', targetVal)
    }


    const validate = (val: string) => {
      if (props.rules) {
        const allPassed = props.rules.every(rule => {
          let passed = true
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
            default:
              break;
          }
          return passed
        })
        inputRef.error = !allPassed
      }
    }

    return {
      inputRef,
      validate,
      updateValue,
    }
  }
})
</script>
<style scoped></style> 