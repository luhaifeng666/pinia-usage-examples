<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <p>count: {{ count }}</p>
  <p>name: {{ name }}</p>
  <p>list: {{ list }}</p>
  <p>list: {{ secret }}</p>
  <p>countPlusOne: {{ countPlusOne }}</p>
  <p>countPlusOne: {{ countPlusOne }}</p>
  <p>countPlusOne: {{ countPlusOne }}</p>
  <button @click="handleChangeStore">change store</button>
  <button @click="handleResetStore">reset store</button>
  <button @click="handleChangeName">change name</button>
</template>

<script setup lang="ts">
import { storeToRefs, mapWritableState, /* mapState */ } from 'pinia'
import { useStore } from './store'
import {computed} from "vue";
// import { computed } from 'vue'

const store = useStore()

// 通过解构的方式获取store中的值
const { count, name, list, countPlusOne, secret } = storeToRefs(store)

console.log(store.secret)

// 通过mapState的方式取值
// const res = computed(() => {
//   // 直接取值
//   // const data = {
//   //   ...mapState(useStore, ['count', 'name', 'list'])
//   // }
//   // return {
//   //   count: data.count(),
//   //   name: data.name(),
//   //   list: data.list()
//   // }
//   // 重命名以及重新定义返回值
//   const data = {
//     ...mapState(useStore, {
//       // 重命名count为myCount, 并返回count + 1的结果
//       myCount: state => state.count += 1,
//       // 重命名name为没有Name，并返回name的值
//       myName: 'name',
//       // 重命名list为myList，并返回插入4之后的list
//       myList: state => {
//         state.list.push(4)
//         return state.list
//       }
//     })
//   }
//   return {
//     count: data.myCount(),
//     name: data.myName(),
//     list: data.myList()
//   }
// })

// 通过 mapWritableState 的方式取值
// const res = computed(() => {
//   return mapWritableState(useStore, ['count'])
// })

// 修改store中的值
const handleChangeStore = () => {
  // 直接修改
  // store.$state = { count: 1, name: 'test', list: [2]}
  // 通过 $patch 的方式批量修改
  // store.$patch({
  //   name: 'test',
  //   list: [...store.list, 4]
  // })

  // store.$patch(state => {
  //   state.name = `我的名字是：${state.name}`
  // })

  // 通过actions的方式修改
  store.changeCount()
}

// 恢复初始值
const handleResetStore = () => {
  store.$reset()
}

// 异步调用actions
const handleChangeName = () => {
  store.changeName()
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
