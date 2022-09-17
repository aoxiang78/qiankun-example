import { ref } from "vue";
import { defineStore } from "pinia";

let setSpaGlobalState: any;
const initState = { name: "", email: "" };

export const useGlobalModel = defineStore("globalModel", () => {
  const globalModel = ref(initState);
  // const doubleCount = computed(() => count.value * 2)
  function setGlobalModel(payload: any) {
    Object.keys(payload.value).forEach(
      // @ts-ignore
      (key) => (globalModel.value[key] = payload.value[key])
    );
    setSpaGlobalState(JSON.parse(JSON.stringify(globalModel.value)));
  }

  function updateGlobalModel(payload: any) {
    Object.keys(payload).forEach(
      // @ts-ignore
      (key) => (globalModel.value[key] = payload[key])
    );
  }

  return { globalModel, setGlobalModel, updateGlobalModel };
});

export const registerGlobalModel = (props: any = {}) => {
  if (props.setSpaGlobalState) {
    setSpaGlobalState = props.setSpaGlobalState;
  }
  const { updateGlobalModel } = useGlobalModel();
  updateGlobalModel(props.spaGlobalState);
  props.onGlobalStateChange((state: any) => {
    updateGlobalModel(state);
  });
};
