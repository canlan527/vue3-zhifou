<template>
  <div class="dropdown" ref="dropdownRef">
    <a href="#" class="btn btn-outline-light my-2 dropdown-toggle" @click.prevent="toggleOpen">你好，{{ title }}</a>
    <ul class="dropdown-menu" :style="{ display: 'block' }" v-if="isOpen">
      <slot></slot>
    </ul>
  </div>
</template>
<script lang="ts">
import { ref, defineComponent, onMounted, onUnmounted } from 'vue'

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
      isOpen.value = !isOpen.value
    }
    const dropdownRef = ref<HTMLElement | null>(null)
    // 点击外部区域关闭下拉菜单
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.value) {
        if (!dropdownRef.value?.contains(event.target as HTMLElement) && isOpen.value) {
          isOpen.value = false
        }
      }
    }

    onMounted(() => {
      document.addEventListener('click', handleClickOutside)
    })
    onUnmounted(() => {
      document.removeEventListener('click', handleClickOutside)
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