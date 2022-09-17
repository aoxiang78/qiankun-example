import { createApp } from "vue";
import { createPinia } from "pinia";
import { useGlobalModel } from "@/stores/useGlobalModel";
import { registerMicroApps, start } from "qiankun";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

const { globalModel, updateGlobalModel } = useGlobalModel();
const registerProps = {
  // @ts-ignore
  spaGlobalState: globalModel,
  setSpaGlobalState: function (payload: any) {
    updateGlobalModel(payload);
  },
};

registerMicroApps([
  {
    name: "vue2",
    entry:
      process.env.NODE_ENV === "development"
        ? "//localhost:8001"
        : "/modules/vue2/",
    container: "#container",
    activeRule: "/vue2",
    props: registerProps,
  },
  {
    name: "vue3",
    entry:
      process.env.NODE_ENV === "development"
        ? "//localhost:8002"
        : "/modules/vue3/",
    container: "#container",
    activeRule: "/vue3",
    props: registerProps,
  },
  {
    name: "vue3-vite",
    entry:
      process.env.NODE_ENV === "development"
        ? "//localhost:8003"
        : "/modules/vue3-vite/",
    container: "#container",
    activeRule: "/vue3-vite",
    props: registerProps,
  },
  {
    name: "react-umi",
    entry:
      process.env.NODE_ENV === "development"
        ? "//localhost:8004"
        : "/modules/react-umi/",
    container: "#container",
    activeRule: "/react-umi",
    props: registerProps,
  },
]);

start();
