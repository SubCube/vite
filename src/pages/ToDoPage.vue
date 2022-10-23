<script lang="ts" setup>
import { ref } from 'vue'
import { useToDoStore } from '@/stores/tiles'
import { storeToRefs } from 'pinia'

const { addRecord } = useToDoStore()
const { tiles } = storeToRefs(useToDoStore())

const title = ref('')
const subTitle = ref('')
</script>

<template>
  <h1>Todo page</h1>
  <form @submit.prevent="addRecord({ title, subTitle })">
    <input type="text" placeholder="title" required v-model="title" />
    <input type="text" placeholder="subtitle" required v-model="subTitle" />
    <button type="submit">Add TODO</button>
  </form>
  <div v-for="(tile, idx) in tiles" :key="idx">
    <span>{{ tile.title }}</span>
    <span>{{ tile.subTitle }}</span>
  </div>
</template>
