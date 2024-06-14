<template>
  <div class="column-detail-page w-75 mx-auto mt-5">
    <div class="column-info row mb-4 border-bottom pb-4 align-items-center">
      <div class="col-3 text-center">
        <img :src="currentColumn?.avatar.url" :alt="currentColumn?.title" class="rounded-circle border w-100">
      </div>
      <div class="col-9">
        <h4>{{ currentColumn?.title }}</h4>
        <p class="text-muted">{{ currentColumn?.description }}</p>
      </div>
    </div>
    <post-list :postsData="postList"></post-list>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import PostList from '@/components/PostList.vue';
import { useColumnStore } from '@/stores/column';
import { usePostStore } from '@/stores/post';

export default defineComponent({
  name: 'ColumnDetail',
  components: {
    PostList
  },
  setup() {
    const route = useRoute()
    const columnStore = useColumnStore()
    

    const currentId = route.params.id.toString()
    const columnList = computed(() => columnStore.columnList)
    const currentColumn = columnList.value.find(item => {
      if (item.avatar) {
        // item.avatar.url 
        console.log(item.avatar.url)
        item.avatar.url = item.avatar.url
      }
      return item._id === currentId
    })

    const postStore = usePostStore()
    const postList = computed(() => postStore.postList)
    const { fetchPosts } = postStore
    
    onMounted(() => {
      fetchPosts(currentId, {})
    })

    return {
      currentColumn,
      postList
    }
  }
})
</script>
<style scoped>
  
</style>