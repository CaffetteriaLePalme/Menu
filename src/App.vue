<template>
  <LPHeader />
  <router-view v-slot='{ Component }'>
    <component :is='Component' />
  </router-view>
</template>

<script lang="ts">
import LPHeader from '@/components/LPHeader.vue'
import '@/style/global.css'
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    LPHeader
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
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
