<script lang="ts" setup>
import { useTrialStore } from '@/stores/index'
import { storeToRefs } from 'pinia'

const { increment } = useTrialStore()
const { counter } = storeToRefs(useTrialStore())
</script>

<template>
  <h1>Main page</h1>
  <div>{{ counter }}</div>
  <button @click="increment()">Increment</button>
</template>
