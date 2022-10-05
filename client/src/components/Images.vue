<template>
  <div id="info-container" class="flex flex-row h-full w-full">
    <div>
      <h3
        v-if="rank && rank < 10"
        class="text-green text-4xl tracking-wider font-jetbrains italic absolute"
      >
        0{{ rank }}.
      </h3>
      <h3
        v-else
        class="text-green text-4xl tracking-wider font-jetbrains italic absolute"
      >
        {{ rank }}.
      </h3>
      <img
        v-if="
          imgSource !==
          'https://www.billboard.com/wp-content/themes/vip/pmc-billboard-2021/assets/public/lazyload-fallback.gif'
        "
        :src="imgSource"
        class="m-6 rounded-lg shadow-navy shadow-lg h-[12rem] mt-9"
      />
      <img v-else src="https://static.thenounproject.com/png/3580649-200.png" />
    </div>
    <div
      id="info-text"
      class="flex flex-col text-left font-karla ml-6 mt-6 col-span-2"
    >
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
    <button
      v-if="selected.includes(props.title)"
      @click="toggleSelect()"
      class="absolute self-end justify-self-end text-2xl text-green p-2"
    >
      &#x25A3;
    </button>
    <button
      v-else
      @click="toggleSelect()"
      class="absolute self-end justify-self-end text-2xl text-green p-2"
    >
      &#x25A2;
    </button>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "../stores/Store";
import { defineProps } from "vue";
import { storeToRefs } from "pinia";
const store = useStore();
const { selected } = storeToRefs(store);

const props = defineProps({
  imgSource: String,
  artist: String,
  title: String,
  rank: Number,
  selected: Boolean,
});

const toggleSelect = () => {
  if (selected.value.includes(props.title)) {
    const temp = props.title;
    selected.value.splice(selected.value.indexOf(temp), 1);
  } else {
    selected.value = [...selected.value, props.title];
  }

  console.log(selected.value);
};
</script>

<style></style>
