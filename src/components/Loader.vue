<template>
  <div class="loader-container d-flex justify-content-center align-items-center h-100">
    <div class="loading-content">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Loader',
  setup() {
    
  }
})
</script>
<style scoped>
  
</style>