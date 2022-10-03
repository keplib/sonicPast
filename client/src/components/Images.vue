<template>
  <div id="info-container" class="flex flex-row">
    <div>
    <h3
      v-if="rank === 10"
      class="text-green text-4xl tracking-wider font-jetbrains italic absolute"
    >
      {{ rank }}.
    </h3>
    <h3 v-else
      class="text-green text-4xl tracking-wider font-jetbrains italic absolute"
    >
      0{{ rank }}.
    </h3>
      <img v-if="
                imgSource !==
                'https://www.billboard.com/wp-content/themes/vip/pmc-billboard-2021/assets/public/lazyload-fallback.gif'
              " :src="imgSource" class="m-6 rounded-lg shadow-navy shadow-lg max-h-[12rem] mt-9 " />
      <img v-else src="https://static.thenounproject.com/png/3580649-200.png" />
    </div>
    <div id="info-text" class="flex flex-col text-left font-karla ml-6 mt-6 col-span-2">
      <h3
        v-if="artist"
        class="font-bold text-xl text-lightest-slate tracking-wider"
      >
        {{ artist.toUpperCase() }}
      </h3>
      <p class="font-semibold text-lg text-green tracking-wider italic">
        {{ title }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  imgSource: String,
  artist: String,
  title: String,
  rank: Number,
});
</script>

<style></style>
