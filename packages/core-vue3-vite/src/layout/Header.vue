<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import { useGlobalModel } from "@/stores/useGlobalModel";

const { globalModel } = useGlobalModel();
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        |
        <RouterLink to="/about">About</RouterLink>
        |
        <RouterLink to="/profile">Profile</RouterLink>
        |
        <RouterLink to="/vue2">Vue2</RouterLink>
        |
        <RouterLink to="/vue3">Vue3</RouterLink>
        |
        <RouterLink to="/vue3-vite">Vue3-vite</RouterLink>
        |
        <RouterLink to="/react-umi">React-umi</RouterLink>
        Signed in as <strong>{{ globalModel.name }}</strong>
      </nav>
    </div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
