<template>
  <div>
    <Header/>
    <router-view/>
    <!-- 子应用容器 -->
    <div id="container"></div>
  </div>
</template>

<script>
import Header from './Header.vue' // @ is an alias to /src

export default  {
  components:{
    Header
  }
}
</script>
