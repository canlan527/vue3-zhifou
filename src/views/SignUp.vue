<template>
  <div class="signup-page">
    <validate-form @submit="formSubmit">
      <div class="mb-3">
        <label for="email" class="form-label">邮箱地址</label>
        <validate-input type="text" placeholder="请输入邮箱地址" :rules="emailRules" v-model="formData.email" />
      </div>
      <div class="mb-3">
        <label for="nickname" class="form-label">用户名</label>
        <validate-input type="text" placeholder="请输入用户名" :rules="nameRules" v-model="formData.nickname" />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">密码</label>
        <validate-input id="password" type="password" placeholder="请输入密码" :rules="passRules" v-model="formData.password" />
      </div>
      <div class="mb-3">
        <label for="confirm-password" class="form-label">确认密码</label>
        <validate-input type="password" placeholder="请确认密码" :rules="confirmPasswordRules" v-model="formData.confirmPassword" />
      </div>
      <template #btn>
        <button class="btn btn-primary"> 注册 </button>
      </template>
    </validate-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
import ValidateForm from '@/components/ValidateForm.vue';
import ValidateInput from '@/components/ValidateInput.vue';
import type { RulesProp } from '@/components/ValidateInput.vue'
import createMessage from '@/components/createMessage';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user';

export default defineComponent({
  name: 'SignUp',
  components: {
    ValidateForm,
    ValidateInput
  },
  setup() {
    // 表单数据
    const formData = reactive({
      email: '',
      nickname: '',
      password: '',
      confirmPassword: ''
    })
    // 路由
    const router = useRouter()
    // 用户store
    const userStore = useUserStore()
    // 验证规则
    const emailRules: RulesProp = [
      { type: 'required', message: '邮箱不能为空' },
      { type: 'email', message: '请输入正确的邮箱地址' }
    ]
    const nameRules: RulesProp = [
      { type: 'required', message: '用户名不能为空' },
    ]
    const passRules: RulesProp = [
      { type: 'required', message: '密码不能为空' },
      { type: 'minLength', value: 6, message: '密码长度不能少于6位' },
      { type: 'maxLength', value: 16, message: '密码长度不能超过16位' },
    ]
    const confirmPasswordRules: RulesProp = [
      { type: 'required', message: '确认密码不能为空' },
      {
        type: 'custom',
        validator: () => {
          return formData.password === formData.confirmPassword
        },
        message: '两次密码输入不一致'
      }
    ]
    // 表单提交方法
    const formSubmit = async (e: boolean) => {
      if (e) {
        const { signup } = userStore
        signup({ email: formData.email, password: formData.password, nickName: formData.nickname }).then(resp => {
          // token
          createMessage('success', '注册成功，正在跳转到登录页', 1000)
          // 跳转到首页
          setTimeout(() => {
            router.push('/login')
          }, 2000)
        })
      }
    }

    return {
      formData,
      emailRules,
      nameRules,
      passRules,
      confirmPasswordRules,
      formSubmit
    }
  }
})
</script>
<style scoped></style>