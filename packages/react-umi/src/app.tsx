import { name } from '../package.json';

export const qiankun = {
  // 应用加载之前
  async bootstrap(props: any) {
    if (process.env.NODE_ENV === 'development') {
      console.log(`[${name}] app bootstrap from main framework`, props)
    }
  },
  // 应用 render 之前触发
  async mount(props: any) {
    if (process.env.NODE_ENV === 'development') {
      console.log(`[${name}] app mount from main framework`, props)
    }
  },
  // 应用卸载之后触发
  async unmount(props: any) {
    if (process.env.NODE_ENV === 'development') {
      console.log(`[${name}] app unmount from main framework`, props)
    }
  },
};
