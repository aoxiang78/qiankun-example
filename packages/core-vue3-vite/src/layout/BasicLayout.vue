<script lang="ts" setup>
import { RouterView } from "vue-router";
import Header from "./Header.vue";
</script>

<template>
  <Header />
  <RouterView />
  <div id="container" class="sub-app-container" />
</template>
