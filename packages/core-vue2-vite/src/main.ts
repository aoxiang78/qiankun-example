import Vue from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia'
import { registerMicroApps, start } from 'qiankun'
import { useGlobalModel } from "./stores/useGlobalModel";

import App from './App.vue'
import router from './router'

import './assets/main.css'

Vue.use(PiniaVuePlugin)

new Vue({
  router,
  pinia: createPinia(),
  render: (h) => h(App)
}).$mount('#app')

const { globalModel, setGlobalModel } = useGlobalModel();

const registerProps = {
  // @ts-ignore
  spaGlobalState: globalModel,
  setSpaGlobalState: function (payload: any) {
    setGlobalModel(payload);
  },
}

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
  },
])
// 启动 qiankun
start()
