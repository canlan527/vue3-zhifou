<template>
  <div class="row">
    <div v-for="item in columnList" :key="item._id" class="col-4 mb-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <img :src="item.avatar.url" :alt="item.title" class="rounded-circle border border-light my-3">
          <h5 class="card-title">{{ item.title }}</h5>
          <p class="card-text text-left">{{ item.description }}</p>
          <!-- <router-link :to="{ name: 'column', params: { id: item.id } }" class="btn btn-outline-primary">进入专栏</router-link> -->
          <router-link :to="`/column/${item._id}`" class="btn btn-outline-primary">进入专栏</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import emptyPic from '@/assets/imgs/column.jpg'
import router from '@/router'
import { computed, defineComponent, type PropType } from 'vue'
import type { IColumnItemProps } from '@/service/column/type'

export default defineComponent({
  name: 'ColumnList',
  props: {
    list: {
      // 将构造函数断言成类型，需要使用PropType
      type: Array as PropType<IColumnItemProps[]>,
      required: true
    }
  },
  setup(props) {

    const columnList = computed(() => {
      return props.list.map((item) => {
        if(item.avatar.url === '') {
          item.avatar.url = emptyPic
        }
        return item
      })
    })
    console.log(props.list)
    return {
      columnList,
    }
  }
})
</script>
<style lang="scss" scoped> 
.card-body {
  img {

  }
}
</style>