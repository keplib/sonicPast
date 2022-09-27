<template>
    <div class="flex flex-col min-h-screen">
      <router-view/>
      <Footer class="mt-auto"/>
    </div>
</template>


<script setup>
  import './assets/tailwind.css'
  import Footer from './components/Footer.vue';

  
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #E2DCC8;
}



nav {
  padding: 20px;
}

 a.router-link-exact-active {
  background: #47b8a520;
  /* color: #f57dff; */

  color: #57cbff
}


</style>
