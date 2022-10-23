import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export type Tile = {
  title: string
  subTitle: string
}

export const useToDoStore = defineStore('tiles', () => {
  const tiles: Array<Tile> = reactive([])

  function addRecord(item: Tile) {
    tiles.push(item)
  }

  return {
    tiles,
    addRecord
  }
})
