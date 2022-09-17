import { useState } from "react";


// https://v3.umijs.org/zh-CN/plugins/plugin-qiankun#%E7%88%B6%E5%AD%90%E5%BA%94%E7%94%A8%E9%80%9A%E8%AE%AF
export function useQiankunStateForSlave() {
  const [spaGlobalState, setSpaGlobalState] = useState({ name: '', email: '' });

  return {
    spaGlobalState,
    setSpaGlobalState,
  };
}
