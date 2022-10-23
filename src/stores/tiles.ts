import { defineStore } from 'pinia'
import { reactive, watch } from 'vue'

export type Tile = {
  id: number
  title: string
  subTitle: string
  done: boolean
}

export const useToDoStore = defineStore('tiles', () => {
  const tiles: Array<Tile> = reactive([])

  if (localStorage.getItem('tiles')) tiles.push(...JSON.parse(<string>localStorage.getItem('tiles')))
  watch(tiles, newVal => {
    localStorage.setItem('tiles', JSON.stringify(newVal)), { deep: true, immediate: true }
  })

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
