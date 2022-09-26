<template>
  <iframe style="border-radius:12px" :src="playlistSource" width="50%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
</template>

<script setup>
import {defineProps} from 'vue';

const props = defineProps({
  playlistSource: String,
});

</script>

<style>

</style>