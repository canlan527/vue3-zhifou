<template>
  <GlobalHeader :user="user" />
  <h1 v-if="loading">正在加载中...😁</h1>
  <div class="container">
    <router-view />
  </div>
  <Footer />
</template>
<script setup lang="ts">
import { defineComponent, reactive, computed, watchEffect, ref } from 'vue';
import GlobalHeader from './components/GlobalHeader.vue';
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import Footer from '@/components/Footer.vue';
import { useUserStore, type UserProps } from '@/stores/user';
import { storeToRefs } from 'pinia';
import { useGlobalStore } from './stores/global';

const userStore = useUserStore();
const { user } = storeToRefs(userStore);

const globalStore = useGlobalStore();
const { loading } = storeToRefs(globalStore);

</script>