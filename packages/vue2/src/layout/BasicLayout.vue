<template>
  <div>
    <Header/>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from './Header.vue' // @ is an alias to /src

@Component({
  components: {
    Header
  }
})
export default class Home extends Vue {
}
</script>
