import {defineStore} from 'pinia'

// 定义store
export const useStore = defineStore('myFirstStore', {
  state: () => {
    return {
      count: 0,
      name: 'foo',
      list: [1, 2, 3]
    }
  },
  getters: {
    countPlusOne (state) {
      console.log('------countPlusOne------')
      return state.count + 1
    }
  },
  actions: {
    changeCount () {
      this.count ++
    },
    async changeName () {
      this.name = await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('newName')
        }, 1000)
      }).catch(err => {
      })
    }
  }
})
