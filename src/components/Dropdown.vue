<template>
  <div class="dropdown" ref="dropdownRef" @click.prevent="toggleOpen">
    <a href="#" class="btn btn-outline-light my-2 dropdown-toggle">你好，{{ title }}</a>
    <ul class="dropdown-menu" :style="{ display: 'block' }" v-if="isOpen">
      <slot></slot>
    </ul>
  </div>
</template>
<script lang="ts">
import { ref, defineComponent, computed, watchEffect, watch} from 'vue'
import useClickOutside from '@/hooks/useClickOutside'

export default defineComponent({
  name: 'Dropdown',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup() {
    const isOpen = ref(false)
    const toggleOpen = () => {
      isOpen.value =!isOpen.value
    }
    const dropdownRef = ref<HTMLElement | null>(null)
    
    const { isClickOutside } = useClickOutside(dropdownRef)
    // 1.监听isClickOutside，如果点击了外部，则关闭dropdown
    watch(isClickOutside, (value) => {
      if (value) {
        isOpen.value = false
      }
    })

    return {
      isOpen,
      toggleOpen,
      dropdownRef,
    }
  }
})
</script>
<style scoped></style>