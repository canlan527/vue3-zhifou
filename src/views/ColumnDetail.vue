<template>
  <div>
    <pre>{{ route }}</pre>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'ColumnDetail',
  setup() {
    const route = useRoute()

    return {
      route
    }
  }
})
</script>
<style scoped>
  
</style>