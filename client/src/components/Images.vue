<template>
  <div id="info-container">
    <div>
      <img :src="imgSource"/>
    </div>
    <div id="info-text">
      <h3>{{artist}}</h3>
      <p>{{title}}</p>
    </div>
  </div>
</template>

<script setup>
import {defineProps} from 'vue';

const props = defineProps({
  imgSource: String,
  artist: String,
  title: String
});

</script>

<style>

#infocontainer {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

#info-text{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

</style>