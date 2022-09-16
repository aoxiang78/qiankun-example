<script setup lang="ts">
import Header from './Header.vue'
</script>

<template>
  <div>
    <Header />
    <!-- 微应用容器 -->
    <div id="view-main"/>
    <!-- 主应用自己的路由渲染 -->
    <router-view/>
  </div>
</template>

