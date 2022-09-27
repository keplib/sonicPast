<template>
  <div class="card-component 
              border border-5 
              border-green
              bg-lightest-navy
              shadow shadow-green  
              rounded-lg">
    <iframe 
            :src="playlistSource" 
            width="300" 
            height="300"
            class="rounded-t-lg" 
          >
    </iframe>
    <h1 class="font-fira 
               font-normal 
               text-green 
               italic
               text-xl
               mt-5
               mb-5
               ml-5 
               text-left">{{title}}</h1>
  </div>
</template>

<script setup>
import {defineProps} from 'vue';

const props = defineProps({
  playlistSource: String,
  title: String
});

</script>

<style>

</style>