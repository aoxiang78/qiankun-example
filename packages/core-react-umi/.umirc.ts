import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layout/BasicLayout',
      routes: [
        {
          path: '/',
          component: '@/pages/index'
        },
        {
          path: '/about',
          component: '@/pages/about'
        },
        {
          path: '/profile',
          component: '@/pages/profile'
        },
        {
          path: '/vue2',
          microApp: 'vue2',
        },
        {
          path: '/vue3',
          microApp: 'vue3',
        },
        {
          path: '/vue3-vite',
          microApp: 'vue3-vite',
        },
        {
          path: '/react-umi',
          microApp: 'react-umi',
        },
        {
          component: '@/pages/404',
        },
      ],
    },
    {
      component: '@/pages/404',
    },
  ],
  fastRefresh: {},
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: 'vue2',
          entry: process.env.NODE_ENV === 'development' ? '//localhost:8001' : '/modules/vue2/', // html entry
        },
        {
          name: 'vue3',
          entry: process.env.NODE_ENV === 'development' ? '//localhost:8002' : '/modules/vue3/', // html entry
        },
        {
          name: 'vue3-vite',
          entry: process.env.NODE_ENV === 'development' ? '//localhost:8003' : '/modules/vue3-vite/', // html entry
        },
        {
          name: 'react-umi',
          entry: process.env.NODE_ENV === 'development' ? '//localhost:8004' : '/modules/react-umi/', // html entry
        },
      ],
    },
  },
});
