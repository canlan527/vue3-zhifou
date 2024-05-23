<template>
  <div class="row">
    <div v-for="item in columnList" :key="item.id" class="col-4 mb-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <img :src="item.avatar" :alt="item.title" class="rounded-circle border border-light w-25 my-3">
          <h5 class="card-title">{{ item.title }}</h5>
          <p class="card-text text-left">{{ item.description }}</p>
          <!-- <router-link :to="{ name: 'column', params: { id: item.id } }" class="btn btn-outline-primary">进入专栏</router-link> -->
          <router-link :to="`/column/${item.id}`" class="btn btn-outline-primary">进入专栏</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import emptyPic from '@/assets/imgs/column.jpg'
import router from '@/router'
import { computed, defineComponent, type PropType } from 'vue'
import type { ColumnProps } from '@/testData'

export default defineComponent({
  name: 'ColumnList',
  props: {
    list: {
      // 将构造函数断言成类型，需要使用PropType
      type: Array as PropType<ColumnProps[]>,
      required: true
    }
  },
  setup(props) {
    const columnList = computed(() => {
      return props.list.map((item) => {
        if(!item.avatar) {
          item.avatar = emptyPic
        }
        return item
      })
    })
    return {
      columnList,
    }
  }
})
</script>
<style lang=""> 

</style>