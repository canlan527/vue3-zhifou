<template>
  <GlobalHeader :user="userData" />
  <div class="container">
    <!-- <ColumnList :list="testData" /> -->

    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">邮箱地址</label>
        <ValidateInput :rules="emailRules" />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">邮箱地址</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
          v-model="emailRef.val"
          @blur="() => validateEmail(emailRef.val)"
        >
        <div id="emailHelp" class="form-text">{{ emailRef.message }}</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">密码</label>
        <input type="password" class="form-control" id="exampleInputPassword1">
      </div>
    </form>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { type ColumnProps } from './components/ColumnList.vue';
import GlobalHeader, { type UserProps } from './components/GlobalHeader.vue';
import ValidateInput, { type RulesProp } from './components/ValidateInput.vue';

const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1的专栏',
    description: '这是的test1专栏，有一段非常有意思的简介，可以更新一下欧',
    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  },
  {
    id: 2,
    title: 'test2的专栏',
    description: '这是的test2专栏，有一段非常有意思的简介，可以更新一下欧',
    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  },
  {
    id: 3,
    title: 'test3的专栏',
    description: '这是的test3专栏，有一段非常有意思的简介，可以更新一下欧',
  },
  {
    id: 4,
    title: 'test4的专栏',
    description: '这是的test4专栏，有一段非常有意思的简介，可以更新一下欧',
    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  }
]

const userData: UserProps = {
  id: 1,
  name: 'canlan',
  isLogin: true
}

export default defineComponent({
  name: 'App',
  components: {
    ColumnList,
    GlobalHeader,
    ValidateInput,
  },
  setup() {
    // 表单验证规则
    const emailRules: RulesProp = [
      { type: 'required', message: '邮箱不能为空' },
      { type: 'email', message: '请输入正确的邮箱地址' }
    ]

    // 表单验证
    const emailRef = reactive({
      val: '',
      error: false,
      message: ''
    })

    // 表单验证函数
    const validateEmail = (email: string) => {
      // 判断是否为空
      if(emailRef.val.trim() === '') {
        emailRef.error = true;
        emailRef.message = '邮箱不能为空';
        return false;
      }

      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(email)) {
        emailRef.error = true;
        emailRef.message = '请输入正确的邮箱地址';
        return false;
      }
      emailRef.error = false;
      emailRef.message = '';
      return true;
    }


    return {
      testData,
      userData,
      emailRef,
      validateEmail,
      emailRules,
    }
  }
})
</script>
<style lang="">

</style>