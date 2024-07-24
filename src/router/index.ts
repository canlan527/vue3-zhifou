import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import SignUp from '@/views/SignUp.vue'
import ColumnDetail from '@/views/ColumnDetail.vue'
import CreatePost from '@/views/CreatePost.vue'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        redirectAlreadyLogin: true
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp,
    },
    {
      path: '/column/:id',
      name: 'column',
      component: ColumnDetail
    },
    {
      path: '/create',
      name: 'create',
      component: CreatePost,
      meta: {
        requiredLogin: true
      }
    }
  ]
})

// 

// 路由守卫
router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  const { user } = storeToRefs(userStore)
  // console.log(userStore.isLogin)
  if(to.meta.requiredLogin && user.value.isLogin === false) {
    next('/login')
  } else if(to.meta.redirectAlreadyLogin && user.value.isLogin) {
    next('/')
  } else {
    next()
  }
})

export default router
