import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import {
  qiankunWindow,
  renderWithQiankun,
} from "vite-plugin-qiankun/dist/helper";
import { registerGlobalModel } from "./stores/useGlobalModel";
import { name } from "../package.json";

// import './assets/main.css'

let app: any;

function render(props: any) {
  const { container } = props;
  app = createApp(App);
  app.use(createPinia());
  app.use(router);
  app.mount(
    container ? container.querySelector("#app") : document.getElementById("app")
  );
}

renderWithQiankun({
  bootstrap() {
    if (process.env.NODE_ENV === "development") {
      console.log(`[${name}] app bootstrap`);
    }
  },
  mount(props) {
    if (process.env.NODE_ENV === "development") {
      console.log(`[${name}] app mount from main framework`, props);
    }
    render(props);
    registerGlobalModel(props);
  },
  unmount(props: any) {
    if (process.env.NODE_ENV === "development") {
      console.log(`[${name}] app unmount from main framework`, props);
    }
    app.unmount();
  },
  update(props: any) {
    if (process.env.NODE_ENV === "development") {
      console.log(`[${name}] app update from main framework`, props);
    }
  },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}
