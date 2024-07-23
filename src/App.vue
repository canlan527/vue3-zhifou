<template>
  <GlobalHeader :user="user" /> 
  <Loader v-if="loading" background="rgba(0, 0, 0, 0.8)" />
  <div class="container">
    <router-view />
  </div>
  <Footer />
</template>
<script setup lang="ts">
import { defineComponent, reactive, computed, watch, watchEffect, ref, onMounted } from 'vue';
import GlobalHeader from './components/GlobalHeader.vue';
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import Footer from '@/components/Footer.vue';
import Loader from './components/Loader.vue';
import createMessage from '@/components/createMessage';
import { useUserStore, type UserProps } from '@/stores/user';
import { storeToRefs } from 'pinia';
import { useGlobalStore } from './stores/global';

const userStore = useUserStore();
const { user, token } = storeToRefs(userStore);
const { fetchCurrentUser } = userStore;
onMounted(() => {
  if(!user.value.isLogin && token.value) {
    fetchCurrentUser();
  }
})

const globalStore = useGlobalStore();
const { loading, error } = storeToRefs(globalStore);

watch(() => error.value.status, () => {
  const { message, status } = error.value;
  if(status && message) {
    createMessage('error', message);
  }
})

</script>