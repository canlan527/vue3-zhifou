<template>
  <div class="create-post-page">
    <h4>新建文章</h4>
    <validate-form>
      <div class="mb-3">
        <label for="form-label">文章标题：</label>
        <validate-input type="text" placeholder="请输入文章标题" />
      </div>
      <div class="mb-3">
        <label for="form-label">文章内容：</label>
        <validate-input tag="textarea" rows="10" type="text" placeholder="请输入文章内容" />
      </div>
      <template #btn>
        <button type="submit" class="btn btn-primary btn-lg">发布文章</button>
      </template>
    </validate-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import ValidateForm from '@/components/ValidateForm.vue';
import ValidateInput from '@/components/ValidateInput.vue';

export default defineComponent({
  name: 'CreatePost',
  components: {
    ValidateForm,
    ValidateInput
  },
  setup() {
    
  }
})
</script>
<style scoped>
  
</style>