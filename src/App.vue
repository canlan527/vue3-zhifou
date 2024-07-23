<template>
  <GlobalHeader :user="user" /> 
  <message type="error" :message="error.message" v-if="error.status"></message>
  <Loader v-if="loading" background="rgba(0, 0, 0, 0.8)" />
  <div class="container">
    <router-view />
  </div>
  <Footer />
</template>
<script setup lang="ts">
import { defineComponent, reactive, computed, watchEffect, ref, onMounted } from 'vue';
import GlobalHeader from './components/GlobalHeader.vue';
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import Footer from '@/components/Footer.vue';
import Loader from './components/Loader.vue';
import Message from '@/components/Message.vue';
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


</script>