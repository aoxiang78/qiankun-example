import { registerMicroApps, start } from "qiankun";
import { useEffect } from "react";

export const apps = [
  {
    name: 'react-umi',
    entry: process.env.NODE_ENV === 'development' ? '//localhost:8001' : '/modules/react-umi/',
    container: '#container',
    activeRule: '/react-umi',
  },
  {
    name: 'react18',
    entry: process.env.NODE_ENV === 'development' ? '//localhost:8002' : '/modules/react-umi/',
    container: '#container',
    activeRule: '/react18'
  },
  {
    name: 'vue2',
    entry: process.env.NODE_ENV === 'development' ? '//localhost:8003' : '/modules/vue2/',
    container: '#container',
    activeRule: '/vue2',
  },
  {
    name: 'vue3',
    entry: process.env.NODE_ENV === 'development' ? '//localhost:8004' : '/modules/vue3/',
    container: '#container',
    activeRule: '/vue3',
  },
  {
    name: 'vue3-vite',
    entry: process.env.NODE_ENV === 'development' ? '//localhost:8005' : '/modules/vue3-vite/',
    container: '#container',
    activeRule: '/vue3-vite',
  },
]

registerMicroApps(apps);

export default function Contact() {
  useEffect(() => {
    // @ts-ignore
    if (!window.qiankunStarted) {
      // @ts-ignore
      window.qiankunStarted = true;
      start();
    }
  }, [])
  return (
    <div id="container"/>
  );
}
