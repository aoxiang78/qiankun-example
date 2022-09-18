<template>
  <div class="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/profile">Profile</router-link> |
    <router-link to="/vue2">vue2</router-link> |
    <router-link to="/vue3">vue3</router-link> |
    <router-link to="/vue3-vite">vue3-vite</router-link> |
    <router-link to="/react-umi">react-umi</router-link> |
    <router-link to="/react18">react18</router-link>
    Signed in as <strong>{{ $store.state.globalModel.name }}</strong>
  </div>
</template>

<style lang="scss" scoped>
.nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
