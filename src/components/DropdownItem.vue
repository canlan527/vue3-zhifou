<template>
  <li class="dropdown-option" :class="{'is-disabled': disabled}">
    <slot></slot>
  </li>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DropdownItem',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    
  }
})
</script>
<style scoped>
.dropdown-option.is-disabled * {
  cursor: not-allowed;
  color: #bbb;
  background: transparent;
}
</style>