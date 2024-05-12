import { onMounted, onUnmounted, ref } from 'vue'

import type { Ref } from 'vue'

export default function useClickOutside(el: Ref<Element | null>) {
  const isClickOutside = ref(false)

  const handleClick = (event: MouseEvent) => {
    if (el.value &&!el.value.contains(event.target as HTMLElement)) {
      isClickOutside.value = true
    } else {
      isClickOutside.value = false
    }
  }

  onMounted(() => {
    document.addEventListener('click', handleClick)
  })

  onUnmounted(() => {
    document.removeEventListener('click', handleClick)
  })

  return {
     isClickOutside
  }
}