<template>
  <div class="home-page">
    <section class="py-5 text-center container">
      <div class="row py-lg-5">
        <!-- <h1>
          count:  {{ count }}
          doubleCount:  {{ doubleCount }}
        </h1> -->
        <button class="btn btn-primary my-2" @click="increment">+1</button>
        <hr>
        <div class="col-lg-6 col-md-8 mx-auto">
          <img src="../assets/imgs/callout.svg" alt="">
          <h2>随心写作，自由表达</h2>
          <p>
            <a href="#" class="btn btn-primary my-2">开始写文章</a>
          </p>
        </div>
      </div>
    </section>
    <column-list :list="columnData" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { storeToRefs } from 'pinia';
import ColumnList from '@/components/ColumnList.vue';
import { columnData, type ColumnProps } from '@/testData'
// import { useCounterStore } from '@/stores/counter'

export default defineComponent({
  name: 'Home',
  components: {
    ColumnList
  },
  setup() {
    // const counterStore = useCounterStore()

    // 使用 pinia 数据方式一：
    // const count = computed(() => counterStore.count)
    // const doubleCount = computed(() => counterStore.doubleCount)  

    // 使用 pinia 数据方式二：
    // const { count, doubleCount  } = storeToRefs(counterStore)

    // 导出方法
    // const { increment} = counterStore

    return {
      columnData,
      // count,
      // doubleCount,
      // increment
    }
  }
})
</script>
<style scoped>
  
</style>