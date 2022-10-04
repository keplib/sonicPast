<template>
  <Navbar />

  <div class="create-controls flex flex-col justify-between w-full sm:w-[75%] lg:w-1/2 mx-auto lg">
    <div class="control-container py-2 text-left flex gap-6 justify-between">
      <div class="mb-5">
        <p class="font-karla font-semibold text-lightest-slate text-2xl">
          CREATE THE PLAYLIST
        </p>
        <button @click="getter()"
          class="font-light font-ibm p-3 min-w-[150px] min-h-[75px] text-green border-green border-1 rounded mt-2 hover:bg-green/[0.2]">
          GENERATE
        </button>
      </div>
      <div>
        <p class="font-karla font-semibold text-slate text-2xl">
          ADD IT TO YOUR SPOTIFY
        </p>
        <button @click="createList()"
          class="font-light font-ibm p-3 px-4 text-green border-green border-1 rounded mt-2 hover:bg-green/[0.2] min-w-[150px] min-h-[75px]">
          CREATE PLAYLIST
        </button>
      </div>
    </div>

    <div class="datepicker-container px-4 text-left w-50%">
      <p class="font-karla font-semibold text-lightest-slate mb-2 text-2xl">
        PICK A DATE
      </p>
      <input class="text-[#35302f]" type="date" min="1959-01-01" aria-label="date input" :max="maxDate"
        v-model="date" />
      <br />
    </div>
  </div>

  <!-- GENERATED PLAYLIST WILL BE SHOWN IN THIS SECTION -->
  <div v-if="toplist" class="flex flex-col items-center justify-around">
    <div class="flex gap-5 justify-end text-end">
      <button v-if="mark > 0" @click="setList(-10)" class=" -rotate-90 text-3xl text-green hover:text-pink hover:text-3xl">&#10157;</button>
      <button v-if="mark < 90" @click="setList(10)" class=" rotate-90 text-3xl text-green hover:text-pink hover:text-3xl">&#10157;</button>
    </div>
    <div v-for="item in toplist" :key="item['rank']" class="h-full w-full sm:w-3/4 lg:w-1/2">
      <Images :imgSource="item['cover']" :artist="item['artist']" :title="item['title']" :rank="item['rank']"
        class="w-full h-full border-1 grid grid-cols-3 border-green m-auto rounded-lg border-dotted my-4 flex-grow-1 flex-shrink-0" />
    </div>
    <div class="flex gap-5 justify-end text-end">
      <button v-if="mark > 0" @click="setList(-10)" class=" -rotate-90 text-3xl text-green hover:text-pink hover:text-3xl">&#10157;</button>
      <button v-if="mark < 90" @click="setList(10)" class=" rotate-90 text-3xl text-green hover:text-pink hover:text-3xl">&#10157;</button>
    </div>
  </div>

</template>

<script lang="ts" setup>
import Images from "../components/Images.vue";
import Navbar from "../components/Navbar.vue";
import { useStore } from "../stores/Store";
import { storeToRefs } from "pinia";
import { getChart, createPlaylist } from "./services/services";
let fullList: any[] = []

const store = useStore();

const { date, toplist, mark } = storeToRefs(store);

const getter = async () => {
  fullList = await getChart(date.value);
  toplist.value = fullList.slice(0, 10);
  mark.value = 0;
};

let dtToday: Date = new Date();
let month: number | string = dtToday.getMonth() + 1;
let day: number | string = dtToday.getDate();
let year: number = dtToday.getFullYear();
if (month < 10) month = "0" + month.toString();
if (day < 10) day = "0" + day.toString();

let maxDate: string = year + "-" + month + "-" + day;


const setList = (num: number) => {

  if (mark.value + num == -10) {
    return;
  }
  mark.value += num;
  toplist.value = fullList.slice(mark.value, (mark.value + 10));
}

const createList = () => {

  createPlaylist(date.value, toplist.value);
}

</script>

<style>

</style>
