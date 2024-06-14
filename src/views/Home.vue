<template>
  <div class="home-page">
    <section class="py-5 text-center container">
      <div class="row py-lg-5">
        <!-- <h1>
          count:  {{ count }}
          doubleCount:  {{ doubleCount }}
        </h1> -->
        <!-- <button class="btn btn-primary my-2" @click="increment">+1</button> -->
        <!-- <hr> -->
        <div class="col-lg-6 col-md-8 mx-auto">
          <img src="../assets/imgs/callout.svg" alt="">
          <h2>随心写作，自由表达</h2>
          <p>
            <a href="#" class="btn btn-primary my-2">开始写文章</a>
          </p>
        </div>
      </div>
    </section>
    <div v-if="columnList!.length">
      <column-list :list="columnList" />
    </div>
    
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed, onMounted, watch } from 'vue'
import { storeToRefs } from 'pinia';
import ColumnList from '@/components/ColumnList.vue';
import type { IColumnListProps } from '@/service/column/type';
import { useColumnStore } from '@/stores/column'

export default defineComponent({
  name: 'Home',
  components: {
    ColumnList
  },
  setup() {
    const columnStore = useColumnStore()

    const { fetchColumns } = columnStore
    const columnList = computed(() => columnStore.columnList)

    onMounted(() => {
       fetchColumns()
    })

    return {
      columnList,
    }
  }
})
</script>
<style scoped>
  
</style>