<template>
  <div class="post-list">
    <article v-for="post in postsData" :key="post._id" class="card mb-3 shadow-sm">
      <div class="card-body">
        <h4>{{ post.title }}</h4>
        <div class="row my-3 align-items-center">
          <div v-if="post.image" class="post-cover col-3">
            <img :src="post.image.url" :alt="post.title" class="rounded-lg w-100">
          </div>
          <p :class="{ 'col-9': post.image.url }">{{ post.excerpt }}</p>
        </div>
        <span class="text-muted">{{ post.createdAt }}</span>
      </div>
    </article>
  </div>
</template>
<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import type { IPostData } from '@/service/post/type';

export default defineComponent({
  name: 'PostList',
  props: {
    postsData: {
      required: true,
      type: Array as PropType<IPostData[]>
    }
  }
})
</script>
<style lang="scss" scoped>
.post-cover {
  max-height: 120px;
  img {
    height: 120px;
    object-fit: cover;
  }
}
</style>