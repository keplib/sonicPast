<template>
  <div
    class="navbar-container flex flex-row justify-between items-center bg-navy/70 shadow-2xl sticky z-10 -top-1 backdrop-filter backdrop-blur-sm">
    <div class="font-karla text-3xl font-bold px-5 py-2 flex flex-row justify-center text-lightest-slate z-10">
      <span class="underline decoration-1 font-light tracking-wider">soni</span>
      <span class="material-symbols-outlined self-end text-pink font-semibold text-2xl">first_page</span>
      <span class="text-green tracking-tighter font-semibold">past</span>
    </div>
    <!-- Web nav -->
    <nav class="font-ibm text-xl hidden sm:block">
      <router-link class="font-extralight p-1 md:p-3 mx-2 text-green border-green border-1 rounded hover:bg-green/[0.3]"
        to="/create">Create
      </router-link>
      <router-link class="font-extralight p-1 md:p-3 mx-2 text-green border-green border-1 rounded hover:bg-green/[0.3]"
        to="/playlists">My Playlists
      </router-link>
      <router-link class="font-extralight p-1 md:p-3 mx-2 text-green border-green border-1 rounded hover:bg-green/[0.3]"
        to="/login">Logout
      </router-link>
    </nav>

    <!-- Mobile nav -->
    <div v-if="!nav" class="block sm:hidden">
      <button @click="togglenav()" class="px-6 py-4 text-4xl absolute right-4 -top-2 z-10">&#9776;</button>
    </div>

    <div v-else class="block sm:hidden">
      <div class=" w-full items-center">
        <button @click="togglenav()" class="px-6 py-4 text-4xl absolute right-4 -top-2 z-10">X</button>
        <nav class="font-ibm w-full flex flex-col items-center">

          <div class="absolute flex flex-col p-3 pt-16 top-0 bg-navy w-full right-0">
            <router-link
              class="font-extralight text-green bg-navy border-green border-1 rounded hover:bg-green hover:text-white left-0 py-4 px-10"
              to="/create" @click="togglenav()">Create
            </router-link>
            <router-link
              class="font-extralight text-green bg-navy border-green border-1 rounded hover:bg-green hover:text-white left-0 py-4 px-10"
              to="/playlists" @click="togglenav()">My Playlists
            </router-link>
            <router-link
              class="font-extralight text-green bg-navy border-green border-1 rounded hover:bg-green hover:text-white left-0 py-4 px-10"
              to="/login" @click="togglenav()">Logout
            </router-link>

          </div>

        </nav>

      </div>
    </div>


  </div>
</template>

<script setup lang="ts">
import { useStore } from "../stores/Store";
import { storeToRefs } from "pinia";
const store = useStore();
let { nav } = storeToRefs(store);

const togglenav = () => {
  nav.value = !nav.value;
}


</script>

<style>

</style>
