import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import {
  renderWithQiankun,
  qiankunWindow
} from 'vite-plugin-qiankun/dist/helper';

// import './assets/main.css'

let app: any;

function render(props: any) {
  const { container } = props;
  app = createApp(App)
  app.use(createPinia())
  app.use(router)
  app.mount(container
    ? container.querySelector("#app")
    : document.getElementById("app"))
}

renderWithQiankun({
  mount(props) {
    console.log("vue3sub mount");
    render(props);
  },
  bootstrap() {
    console.log("bootstrap");
  },
  unmount(props: any) {
    console.log("vue3sub unmount");
    app.unmount();
  },
  update(props: any) {
    console.log("vue3sub update");
    console.log(props)
  },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}
