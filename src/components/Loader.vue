
<template>
  <Teleport to='#loader' >
    <div class="loader-container d-flex justify-content-center align-items-center h-100"
      :style="{ 'background-color': background }"
    >
      <div class="loading-content">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <p v-if="text" class="text-primary small">{{ text }}</p>
      </div>
    </div>
  </Teleport>
</template>
<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'
import { useDOMCreate } from '@/hooks/useDOMCreate'

export default defineComponent({
  name: 'Loader',
  props: {
    text: {
      type: String,
    },
    background: {
      type: String,
    }
  },
  setup() {
    // 创建loader节点
    useDOMCreate('loader')
  }
})
</script>
<style lang="scss" scoped>
.loader-container {
  background-color: rgba(255,255,255,0.5);
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.loading-content {
  text-align: center;
}
</style>