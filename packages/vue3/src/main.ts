import './public-path'
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { useGlobalModel } from './store/useGlobalModel'
import { name } from '../package.json'

let instance: any = null
function render (props: any = {}) {
  const { container } = props
  instance = createApp(App).use(store).use(router).mount(container ? container.querySelector('#app') : '#app')
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap (props: any) {
  if (process.env.NODE_ENV === 'development') {
    console.log(`[${name}] app bootstrap from main framework`, props)
  }
}
export async function mount (props: any) {
  if (process.env.NODE_ENV === 'development') {
    console.log(`[${name}] app mount from main framework`, props)
  }
  useGlobalModel(store, props)
  render(props)
}
export async function unmount (props: any) {
  if (process.env.NODE_ENV === 'development') {
    console.log(`[${name}] app unmount from main framework`, props)
  }
  // instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
  // router = null
}
