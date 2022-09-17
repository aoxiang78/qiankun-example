
export const useGlobalModel = (store: any, props: any = {}) => {
  if (!store || !store.hasModule) {
    return
  }

  // 获取初始化的state
  const initState = JSON.parse(JSON.stringify(props.spaGlobalState)) || {
    name: '',
    email: ''
  }

  // 将父应用的数据存储到子应用中，命名空间固定为global
  if (!store.hasModule('globalModel')) {
    const globalModel = {
      namespaced: true,
      state: initState,
      actions: {
        // 子应用改变state并通知父应用
        setGlobalModel ({ commit }: any, payload: any) {
          commit('setGlobalModel', payload)
          commit('emitGlobalState', payload)
        },
        // 初始化，只用于mount时同步父应用的数据
        updateGlobalState ({ commit }: any, payload: any) {
          commit('setGlobalModel', payload)
        }
      },
      mutations: {
        setGlobalModel (state: any, payload: any) {
          state = Object.assign(state, payload)
        },
        // 通知父应用
        emitGlobalState (state: any, payload: any) {
          if (props.setSpaGlobalState) {
            props.setSpaGlobalState(JSON.parse(JSON.stringify(payload)))
          }
        }
      }
    }
    store.registerModule('globalModel', globalModel)
  } else {
    // 每次mount时，都同步一次父应用数据
    store.dispatch('globalModel/updateGlobalState', initState)
  }
  props.onGlobalStateChange((state: any) => {
    // state: 变更后的状态; prev 变更前的状态
    store.dispatch('globalModel/updateGlobalState', state)
  })
}
