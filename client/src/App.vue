<template>
  <div class="flex flex-col min-h-screen" role="main">
    <router-view />
    <Footer class="mt-auto" />
  </div>
</template>

<script lang="ts" setup>
import "./assets/tailwind.css";
import Footer from "./components/Footer.vue";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #e2dcc8;
}

nav {
  padding: 20px;
}

a.router-link-exact-active {
  background: #47b8a530;
  /* color: #f57dff; */

  color: #57cbff;
}
</style>
