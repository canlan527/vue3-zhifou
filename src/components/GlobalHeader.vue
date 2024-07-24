<template>
  <nav class="navbar bg-primary" data-bs-theme="dark">
    <div class="container-fluid px-4">
      <router-link to="/" class="navbar-brand">知否专栏</router-link>
      <ul v-if="!user.isLogin" class="list-inline mb-0">
        <li class="list-inline-item"><router-link to="/login" class="btn btn-outline-light my-2">登录</router-link></li>
        <li class="list-inline-item"><router-link to="/signup" class="btn btn-outline-light my-2">注册</router-link></li>
      </ul>
      <ul v-else class="list-inline mb-0 me-4">
        <li class="list-inline-item">
          <Dropdown v-if="user.nickName" :title="user.nickName">
            <DropdownItem>
              <router-link to="/create" class="dropdown-item">新建文章</router-link>
            </DropdownItem>
            <DropdownItem disabled>
              <a href="#" class="dropdown-item">编辑资料</a>
            </DropdownItem>
            <DropdownItem>
              <a href="#" class="dropdown-item">退出登录</a>
            </DropdownItem>
          </Dropdown>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import Dropdown from './Dropdown.vue'
import DropdownItem from './DropdownItem.vue'
import { type UserProps, useUserStore } from '@/stores/user'

// export interface UserProps {
//   isLogin: boolean
//   name: string
//   id: number
// }

export default defineComponent({
  name: 'GlobalHeader',
  components: {
    Dropdown,
    DropdownItem,
  },
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true
    }
  },
  setup(props) {
   
    return {
      

    }
  }
})
</script>
<style scoped></style>