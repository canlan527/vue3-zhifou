import { ref } from 'vue'
import { defineStore } from "pinia";

export interface GlobalErrorProps {
  status: boolean;
  message?: string;
}

export interface GlobalStatusProps {
  error: GlobalErrorProps
  loading: boolean
}

export const useGlobalStore = defineStore('global', () => {
  const error = ref<GlobalErrorProps>({
    status: false
  })
  const loading = ref<boolean>(false)

  function setLoading(status: boolean) {
    loading.value = status
  }

  function setError(status: boolean, message?: string) {
    error.value = {
      status,
      message
    }
  }

  return {
    error,
    loading,
    setLoading,
    setError,
  }

})