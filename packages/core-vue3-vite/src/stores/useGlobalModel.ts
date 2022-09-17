import { ref } from "vue";
import { defineStore } from "pinia";

const initState = { name: "", email: "" };

export const useGlobalModel = defineStore("globalModel", () => {
  const globalModel = ref(initState);

  // const doubleCount = computed(() => count.value * 2)
  function setGlobalModel(payload: any) {
    // @ts-ignore
    Object.keys(payload.value).forEach(
      (key) => (globalModel.value[key] = payload.value[key])
    );
  }

  function updateGlobalModel(payload: any) {
    // @ts-ignore
    Object.keys(payload).forEach(
      (key) => (globalModel.value[key] = payload[key])
    );
  }

  return { globalModel, setGlobalModel, updateGlobalModel };
});
