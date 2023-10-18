import { defineStore } from "pinia";

const initState = { name: "", email: "" };

export const useGlobalModel = defineStore("globalModel", {
  state: () => ({ value: initState}),
  getters: {
    globalModel: (state) => state.value,
  },
  actions: {
    setGlobalModel(payload: any) {
      // @ts-ignore
      Object.keys(payload).forEach((key) => (this.value[key] = payload[key]));
    },
  },
});
