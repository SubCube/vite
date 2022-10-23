import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export type Tile = {
  id: number
  title: string
  subTitle: string
  done: boolean
}

export const useToDoStore = defineStore('tiles', () => {
  const tiles: Array<Tile> = reactive([])

  function addRecord(item: Tile) {
    tiles.push(item)
  }
  function changeTilestatus(id: number) {
    const index = tiles.findIndex(item => item.id === id)
    tiles[index].done = !tiles[index].done
  }

  return {
    tiles,
    addRecord,
    changeTilestatus
  }
})
