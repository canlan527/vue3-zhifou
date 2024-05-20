<template>
  <div class="validate-input-container pb-3">
    <input type="text" class="form-control" :class="{ 'is-invalid': inputRef.error }" 
      :value="modelValue" @input="updateValue" @blur="validate(inputRef.val)">
    <div v-if="inputRef.error" class="invalid-feedback">{{ inputRef.message }}</div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
import type { PropType } from 'vue'

const emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/

interface RuleProp {
  type: 'required' | 'email'
  message: string
}

export type RulesProp = RuleProp[]

export default defineComponent({
  name: 'ValidateInput',
  props: {
    rules: Array as PropType<RulesProp>,
    modelValue: String,
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
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
      if(props.rules) {
        const allPassed = props.rules.every(rule => {
          let passed = true
          switch (rule.type) {
            case 'required':
              passed = val.trim()!== ''
              inputRef.message = rule.message
              break;
            case 'email':
              passed = emailReg.test(val)
              inputRef.message = rule.message
              break;
            default:
              break;
          }
          return passed
        })
        inputRef.error =!allPassed
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
<style scoped>
  
</style> 