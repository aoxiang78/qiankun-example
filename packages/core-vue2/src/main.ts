import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { registerMicroApps, start } from 'qiankun'
import { registerGlobalModel } from '@/store/useGlobalModel'

Vue.config.productionTip = false

registerGlobalModel(store)

const registerProps = {
  // @ts-ignore
  spaGlobalState: store.state.globalModel,
  setSpaGlobalState: function (payload: any) {
    store.dispatch('globalModel/setGlobalModel', payload)
  }
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

registerMicroApps([
  {
    name: 'react-umi',
    entry: process.env.NODE_ENV === 'development' ? '//localhost:8001' : '/modules/react-umi/',
    container: '#container',
    activeRule: '/react-umi',
    props: registerProps
  },
  {
    name: 'react18',
    entry: process.env.NODE_ENV === 'development' ? '//localhost:8002' : '/modules/react-umi/',
    container: '#container',
    activeRule: '/react18'
  },
  {
    name: 'vue2',
    entry: process.env.NODE_ENV === 'development' ? '//localhost:8003' : '/modules/vue2/',
    container: '#container',
    activeRule: '/vue2',
    props: registerProps
  },
  {
    name: 'vue3',
    entry: process.env.NODE_ENV === 'development' ? '//localhost:8004' : '/modules/vue3/',
    container: '#container',
    activeRule: '/vue3',
    props: registerProps
  },
  {
    name: 'vue3-vite',
    entry: process.env.NODE_ENV === 'development' ? '//localhost:8005' : '/modules/vue3-vite/',
    container: '#container',
    activeRule: '/vue3-vite',
    props: registerProps
  }
])
// 启动 qiankun
start({
  sandbox: true, // 是否启用 js 沙箱，默认为 false
  prefetch: 'all' // 是否启用 prefetch 特性，默认为 true
})
