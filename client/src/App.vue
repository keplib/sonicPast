<template>
  <div class="navbar-container flex flex-row justify-between items-center shadow-2xl sticky top-0 backdrop-blur-lg">
    <h1 class="font-karla 
               text-3xl 
               font-bold 
               px-4 
               text-lightest-slate
                ">
               <span class="underline font-light tracking-wider">sonic</span>
               <span class="text-green tracking-tighter">Past</span>
    </h1>
    <nav class="font-ibm text-xl">
      <router-link class="font-extralight p-3 mx-2
                  text-green
                  border-green 
                  border-1 rounded 
                  hover:bg-green/[0.2]" 
                  to="/create" >Create 
      </router-link> 
      <router-link class="font-extralight 
                  p-3 mx-2 
                  text-green 
                  border-green 
                  border-1 rounded
                  hover:bg-green/[0.2]" 
                  to="/playlists">My Playlists
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
  padding: 20px;
}

 a.router-link-exact-active {
  background: #47b8a520;
  /* color: #f57dff; */

  color: #57cbff
}

</style>
