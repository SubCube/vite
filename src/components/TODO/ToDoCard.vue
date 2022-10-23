<script lang="ts" setup>
import type { Tile } from '@/stores/tiles'
import { computed, PropType } from 'vue'
const props = defineProps({
  card: {
    type: Object as PropType<Tile>,
    required: true
  }
})
defineEmits<{
  (e: 'changeStatus', id: number): void
}>()

const buttonDynamicStyles = computed(() => {
  return { background: props.card.done ? '#B73E3E' : '#425F57' }
})
</script>

<template>
  <div class="card">
    <div class="title">{{ card.title }}</div>
    <div class="subtitle">{{ card.subTitle }}</div>
    <button class="action" :style="buttonDynamicStyles" @click="$emit('changeStatus', card.id)">
      {{ card.done ? 'reopen' : 'done' }}
    </button>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border: 2px solid rgb(119, 118, 118);
  border-radius: 10px;
  width: 350px;
  overflow: hidden;
}
.title {
  font-size: 2em;
  font-weight: 600;
  color: white;
}
.subtitle {
  font-size: 1em;
  font-weight: 400;
  color: rgb(186, 185, 185);
  margin-top: 15px;
}

button {
  margin-top: 15px;
  border-radius: 5px;
  padding: 8px 15px;
}
</style>
