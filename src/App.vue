<template>
  <GlobalHeader :user="userData" />
  <div class="container">
    <Home />
    <!-- <login /> -->
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';
import GlobalHeader, { type UserProps } from './components/GlobalHeader.vue';
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';

const userData: UserProps = {
  id: 1,
  name: 'canlan',
  isLogin: true
}

export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader,
    Home,
    Login,
  },
  setup() {
    

    return {
      userData,
    } 
  }
})
</script>
<style lang="">

</style>