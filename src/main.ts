import { createApp, ref } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

// 创建 pinia
const pinia = createPinia()

// 定义插件
function SecretPiniaPlugin({ store }) {
  store.secret = ref('the cake is a lie')

  if (process.env.NODE_ENV === 'development') {
    // add any keys you set on the store
    store._customProperties.add('secret')
  }

  store.$subscribe((data) => {
    // react to store changes
    console.log(data, '-----onSubsCribe-----')
  })
  store.$onAction((data) => {
    // react to store actions
    console.log(data, '------onAction------')
  })
}

// 使用插件
pinia.use(SecretPiniaPlugin)

const app = createApp(App)
// 挂载到 Vue 实例上
app.use(pinia)
app.mount('#app')
