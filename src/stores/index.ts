import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTrialStore = defineStore('trial', () => {
  const counter = ref(0)

  function increment() {
    counter.value++
  }

  return {
    counter,
    increment
  }
})
