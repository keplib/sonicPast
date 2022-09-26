<template>
  <div id="info-container" class="flex flex-row">
    <h3 class="text-green text-4xl tracking-wider font-jetbrains italic m-6">0{{rank}}.</h3>
    <div>
      <img :src="imgSource" class="m-6 rounded-lg shadow-navy shadow-lg"/>
    </div>
    <div id="info-text" class="flex flex-col text-left font-karla ml-6 mt-6">
      <h3 class="font-bold text-xl text-lightest-slate">{{artist.toUpperCase()}}</h3>
      <p class="font-normal text-lg text-green">{{title}}</p>
    </div>
  </div>
</template>

<script setup>
import {defineProps} from 'vue';

const props = defineProps({
  imgSource: String,
  artist: String,
  title: String,
  rank: Number
});

</script>

<style>

</style>