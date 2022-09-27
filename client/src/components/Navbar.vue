<template>
    <div class="navbar-container 
                flex flex-row 
                justify-between 
                items-center
                bg-navy/70 
                shadow-2xl 
                sticky 
                top-0 
                z-10
                -top-1
                backdrop-filter
                backdrop-blur-sm">

        <div class="font-karla 
                text-3xl 
                font-bold 
                px-5 
                flex flex-row justify-center
                text-lightest-slate
                ">
                
                <span class="underline  decoration-1 font-light tracking-wider">soni</span>
                <span class="material-symbols-outlined self-end text-pink font-semibold text-2xl">first_page</span>
                <span class="text-green  tracking-tighter font-semibold">past</span>
        </div>
        
        <nav class="font-ibm text-xl">
        <router-link class="font-extralight p-3 mx-2
                    text-green
                    border-green 
                    border-1 rounded 
                    hover:bg-green/[0.3]" 
                    to="/create" >Create 
        </router-link> 
        <router-link class="font-extralight 
                    p-3 mx-2 
                    text-green 
                    border-green 
                    border-1 rounded
                    hover:bg-green/[0.3]" 
                    to="/playlists">My Playlists
        </router-link>
        <router-link class="font-extralight 
                  p-3 mx-2 
                  text-green 
                  border-green 
                  border-1 rounded
                  hover:bg-green/[0.3]" 
                  to="/login">Logout
        </router-link>
        
        </nav>
  </div>
</template>



<script setup>




</script>


<style>



</style>