<template>
  <Navbar />

  <div
    class="create-controls flex flex-col justify-around w-full sm:w-[75%] lg:w-1/2 mx-auto lg"
  >
    <div
      class="control-container px-4 py-2 text-left flex gap-6 justify-between w-50%"
    >
      <div class="mb-5">
        <p class="font-karla font-semibold text-lightest-slate text-2xl">
          CREATE THE PLAYLIST
        </p>
        <button
          @click="getter()"
          class="font-light font-ibm p-3 px-4 text-green border-green border-1 rounded mt-2 hover:bg-green/[0.2]"
        >
          GENERATE
        </button>
      </div>
      <div>
        <p class="font-karla font-semibold text-slate text-2xl">
          ADD IT TO YOUR SPOTIFY
        </p>
        <button
          @click="createPlaylist(date, toplist)"
          class="font-light font-ibm p-3 px-4 text-green border-green border-1 rounded mt-2 hover:bg-green/[0.2]"
        >
          CREATE PLAYLIST
        </button>
      </div>
    </div>

    <div class="datepicker-container px-4 text-left w-50%">
      <p class="font-karla font-semibold text-lightest-slate mb-2 text-2xl">
        PICK A DATE
      </p>
      <input
        class="text-[#35302f]"
        type="date"
        min="1959-01-01"
        aria-label="date input"
        :max="maxDate"
        v-model="date"
      />
      <br />
    </div>
  </div>

  <!-- GENERATED PLAYLIST WILL BE SHOWN IN THIS SECTION -->
  <div v-if="toplist">
    <div v-for="item in toplist" :key="item['rank']">
      <Images
        :imgSource="item['cover']"
        :artist="item['artist']"
        :title="item['title']"
        :rank="item['rank']"
        class="w-full sm:w-[75%] lg:w-1/2 border-1 grid grid-cols-3 border-green m-auto rounded-lg border-dotted my-4"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Images from "../components/Images.vue";
import Navbar from "../components/Navbar.vue";
import { useStore } from "../stores/Store";
import { storeToRefs } from "pinia";
import { getChart, createPlaylist } from "./services/services";

const store = useStore();
const { date, toplist } = storeToRefs(store);

const getter = async () => {
  toplist.value = await getChart(date.value);
};

let dtToday: Date = new Date();
let month: number | string = dtToday.getMonth() + 1;
let day: number | string = dtToday.getDate();
let year: number = dtToday.getFullYear();
if (month < 10) month = "0" + month.toString();
if (day < 10) day = "0" + day.toString();

let maxDate: string = year + "-" + month + "-" + day;
</script>

<style></style>
