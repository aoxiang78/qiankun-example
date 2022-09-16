import { defineConfig } from 'umi';
import { name } from './package.json'

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
          component: '@/pages/404',
        },
      ],
    },
    {
      component: '@/pages/404',
    },
  ],
  fastRefresh: {},
  // 微前端子应用注册
  qiankun: {
    slave: {},
  },
  base: `/${name}/`,
  publicPath: `/modules/${name}/`,
  outputPath: `dist/modules/${name}`,
});
