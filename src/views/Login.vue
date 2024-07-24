<template>
  <div class="login-page">
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
import { defineComponent, reactive } from 'vue'
import ValidateInput, { type RulesProp } from '@/components/ValidateInput.vue';
import ValidateForm from '@/components/ValidateForm.vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';
import createMessage from '@/components/createMessage';
// import { login } from '@/service/user/user';

export default defineComponent({
  name: 'Login ',
  components: {
    ValidateInput,
    ValidateForm
  },
  setup() {
    const userStore = useUserStore()
    const router = useRouter()
    // store中数据
    // const { user } = storeToRefs(userStore)
    // 组件内部数据
    // 表单验证规则
    const emailRules: RulesProp = [
      { type: 'required', message: '邮箱不能为空' },
      { type: 'email', message: '请输入正确的邮箱地址' }
    ]
    const passRules: RulesProp = [
      { type: 'required', message: '密码不能为空' },
      { type: 'minLength', value: 6, message: '密码长度不能少于6位' },
      { type: 'maxLength', value: 16, message: '密码长度不能超过16位' },
      // { type: 'password', message: '密码必须包含字母、数字' },

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

    const formSubmit = async (e: boolean) => {
      if (e) {
        const { loginAndFetch } = userStore
        loginAndFetch({ email: emailRef.val,  password: passwordRef.val }).then(resp => {
          // token
          createMessage('success', '登录成功，正在跳转到首页', 1000)
          // 跳转到首页
          setTimeout(() => {
            router.push('/')
          }, 2000)
        })
      }
    }

    return {
      emailRules,
      passRules,
      emailRef,
      passwordRef,
      formSubmit
    }

  }
})
</script>
<style scoped></style>