<template>
  <GlobalHeader :user="userData" />
  <div class="container">
    <!-- <ColumnList :list="testData" /> -->

    <ValidateForm @submit="formSubmit">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">邮箱地址</label>
        <ValidateInput type="text" :rules="emailRules" v-model="emailRef.val" placeholder="请输入邮箱地址" />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">密码</label>
        <ValidateInput id="password" type="password" placeholder="请输入密码" :rules="passRules" v-model="passwordRef.val" />
      </div>
      <template #btn>
        <button class="btn btn-danger">Submit</button>
      </template>
    </ValidateForm>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { type ColumnProps } from './components/ColumnList.vue';
import GlobalHeader, { type UserProps } from './components/GlobalHeader.vue';
import ValidateInput, { type RulesProp } from './components/ValidateInput.vue';
import ValidateForm from './components/ValidateForm.vue';

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
    ValidateForm,
  },
  setup() {
    // 表单验证规则
    const emailRules: RulesProp = [
      { type: 'required', message: '邮箱不能为空' },
      { type: 'email', message: '请输入正确的邮箱地址' }
    ]
    const passRules: RulesProp = [
      { type: 'required', message: '密码不能为空' },
      { type: 'minLength', value: 6, message: '密码长度不能少于6位' },
      { type: 'maxLength', value: 16, message: '密码长度不能超过16位' },
      { type: 'password', message: '密码必须包含字母、数字' },

    ]

    // 表单验证
    const emailRef = reactive({
      val: '',
      error: false,
      message: ''
    })
    const passwordRef = reactive({
      val: '',
      error: false,
      message: ''
    })

    const formSubmit = (flag: boolean) => {
      // console.log('form submit', flag)
      if (!flag) {
        // 表单验证失败,清空表单项内容
        emailRef.val = ''
        passwordRef.val = ''
      }

    }


    return {
      testData,
      userData,
      emailRef,
      passwordRef,
      emailRules,
      passRules,
      formSubmit,
    } 
  }
})
</script>
<style lang="">

</style>