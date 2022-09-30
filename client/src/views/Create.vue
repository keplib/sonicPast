<template>
  <Navbar />

  <div class="create-controls flex flex-row justify-between w-1/2 mx-auto">
    <div class="datepicker-container my-10 text-left">
      <p class="font-karla font-semibold text-lightest-slate mb-2 text-2xl">
        PICK A DATE
      </p>
      <input type="date" min="1959-01-01" :max="maxDate" v-model="date" />
      <br />
    </div>
    <div class="control-container my-10 text-left">
      <div class="mb-5">
        <p class="font-karla font-semibold text-lightest-slate text-2xl">
          CREATE THE PLAYLIST
        </p>
        <button
          @click="getChart"
          class="font-light font-ibm p-3 text-green border-green border-1 rounded mt-2 hover:bg-green/[0.2]"
        >
          GENERATE
        </button>
      </div>
      <div>
        <p class="font-karla font-semibold text-slate text-2xl">
          ADD IT TO YOUR SPOTIFY
        </p>
        <button
          @click="createPlaylist"
          class="font-light font-ibm p-3 text-green border-green border-1 rounded mt-2 hover:bg-green/[0.2]"
        >
          CREATE PLAYLIST
        </button>
      </div>
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
        class="w-1/2 border-1 border-green m-auto rounded-lg border-dotted my-4"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import axios from "axios";
import Images from "../components/Images.vue";
import Navbar from "../components/Navbar.vue";
import { useStore } from "../stores/Store";
import { storeToRefs } from "pinia";

const store = useStore();
const { date, toplist } = storeToRefs(store);

const getChart = async () => {
  const options = {
    method: "GET",
    url: "http://localhost:3000/api/chart",
    params: { date: date.value },
  };

  try {
    const response = await axios.request(options);
    toplist.value = response.data.songs.slice(0, 10);
  } catch (error) {
    console.log("error getting chart", error);
  }
};

const createPlaylist = () => {
  try {
    axios.post("http://localhost:3000/findTrack", {
      date: date.value,
      songs: toplist.value,
    });
  } catch (error) {
    console.log("error creating playlist", error);
  }
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
