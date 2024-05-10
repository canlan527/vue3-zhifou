<template>
  <nav class="navbar bg-primary" data-bs-theme="dark">
    <div class="container-fluid px-4">
      <a class="navbar-brand" href="#">知否专栏</a>
      <ul v-if="!user.isLogin" class="list-inline mb-0">
        <li class="list-inline-item"><a href="#" class="btn btn-outline-light my-2">登录</a></li>
        <li class="list-inline-item"><a href="#" class="btn btn-outline-light my-2">注册</a></li>
      </ul>
      <ul v-else class="list-inline mb-0 me-4">
        <li class="list-inline-item">
          <Dropdown :title="user.name">
            <DropdownItem>
              <a href="#" class="dropdown-item">新建文章</a>
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
import { defineComponent, PropType } from 'vue'
import Dropdown from './Dropdown.vue'
import DropdownItem from './DropdownItem.vue'

export interface UserProps {
  isLogin: boolean
  name: string
  id: number
}

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
  setup() {
    return {
      // user,
    }
  }
})
</script>
<style scoped></style>