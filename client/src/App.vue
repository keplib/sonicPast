<template>
  <div class="navbar-container flex flex-row justify-between items-center">
    <h1 class="font-karla text-3xl font-bold px-4 text-light-slate">sonicPast</h1>
    <nav class="font-ibm text-xl">
      <router-link class="font-extralight p-3 mx-2
                  text-green
                  border-green 
                  border-1 rounded 
                  hover:bg-green/[0.2]" 
                  to="/create" >_Create 
      </router-link> 
      <router-link class="font-extralight 
                  p-3 mx-2 
                  text-green 
                  border-green 
                  border-1 rounded
                  hover:bg-green/[0.2]" 
                  to="/playlists">_My Playlists
      </router-link>
      <button class="font-light 
                font-ibm
                p-3 
                mx-2
                text-green
                border-green 
                border-1 rounded 
                hover:bg-green/[0.2]"><a href="http://localhost:3000/login">Login</a>
    </button>
    </nav>
</div>
    <router-view/>
</template>


<script setup>
  import './assets/tailwind.css'
  
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
  padding: 30px;
 
}



</style>
