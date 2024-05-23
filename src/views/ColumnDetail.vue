<template>
  <div class="column-detail-page w-75 mx-auto mt-5">
    <div class="column-info row mb-4 border-bottom pb-4 align-items-center">
      <div class="col-3 text-center">
        <img :src="currentColumn?.avatar" :alt="currentColumn?.title" class="rounded-circle border  w-100">
      </div>
      <div class="col-9">
        <h4>{{ currentColumn?.title }}</h4>
        <p class="text-muted">{{ currentColumn?.description }}</p>
      </div>
    </div>
    <post-list :postsData="currentPosts"></post-list>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { columnData, postsData } from '@/testData';
import PostList from '@/components/PostList.vue';

export default defineComponent({
  name: 'ColumnDetail',
  components: {
    PostList
  },
  setup() {
    const route = useRoute()
    const currentId = +route.params.id
    const currentColumn = columnData.find(item => item.id === currentId)
    const currentPosts = postsData.filter(item => item.columnId === currentId)
    console.log(currentColumn)
    console.log(currentPosts)

    return {
      currentColumn,
      currentPosts
    }
  }
})
</script>
<style scoped>
  
</style>