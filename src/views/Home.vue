<template>
  <div class="home-page">
    <section class="py-5 text-center container">
      <div class="row py-lg-5">
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
import { defineComponent } from 'vue'
import ColumnList from '@/components/ColumnList.vue';
import { columnData, type ColumnProps } from '@/testData'

export default defineComponent({
  name: 'Home',
  components: {
    ColumnList
  },
  setup() {
    return {
      columnData
    }
  }
})
</script>
<style scoped>
  
</style>