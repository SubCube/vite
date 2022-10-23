<script lang="ts" setup>
import { ref } from 'vue'
import { Tile, useToDoStore } from '@/stores/tiles'
import { storeToRefs } from 'pinia'

import ToDoCard from '@/components/TODO/ToDoCard.vue'

const { addRecord, changeTileStatus } = useToDoStore()
const { tiles } = storeToRefs(useToDoStore())

const title = ref('')
const subTitle = ref('')

function addNewItem(item: Tile) {
  addRecord(item)
  title.value = subTitle.value = ''
}
</script>

<template>
  <h1>Todo page</h1>
  <form @submit.prevent="addNewItem({ title, subTitle, done: false, id: new Date().getTime() })" class="form">
    <input type="text" placeholder="title" required v-model="title" />
    <input type="text" placeholder="subtitle" required v-model="subTitle" />
    <button type="submit">Add TODO</button>
  </form>
  <div class="tiles-wrapper">
    <ToDoCard v-for="tile in tiles" :key="tile.id" :card="tile" @change-status="id => changeTileStatus(id)" />
  </div>
</template>

<style lang="scss" scoped>
.form {
  width: 660px;
  display: flex;
  flex-direction: column;
  margin: 25px auto;
  padding: 50px;
  border-radius: 8px;
  box-shadow: 10px 5px 5px #646cff;
  background-color: #646cff52;
  *:not(:first-child) {
    margin-top: 20px;
  }
}
.tiles-wrapper {
  margin-top: 50px;
  display: flex;
  justify-content: flex-start;
  align-self: start;
  flex-wrap: wrap;
  gap: 25px;
  flex-direction: row;
}
</style>
