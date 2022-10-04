<template>
  <Navbar />

  <div
    class="create-controls flex flex-col justify-between w-full sm:w-[75%] lg:w-1/2 mx-auto lg"
  >
    <div class="control-container py-2 text-left flex gap-6 justify-between">
      <div class="mb-5">
        <p class="font-karla font-semibold text-lightest-slate text-2xl">
          CREATE THE PLAYLIST
        </p>
        <button
          @click="getter()"
          class="font-light font-ibm p-3 min-w-[150px] min-h-[75px] text-green border-green border-1 rounded mt-2 hover:bg-green/[0.2]"
        >
          GENERATE
        </button>
      </div>
      <div>
        <p class="font-karla font-semibold text-slate text-2xl">
          ADD IT TO YOUR SPOTIFY
        </p>
        <button
          @click="createList()"
          class="font-light font-ibm p-3 px-4 text-green border-green border-1 rounded mt-2 hover:bg-green/[0.2] min-w-[150px] min-h-[75px]"
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
  <div v-if="toplist[0] === 'clicked'" class="">
    <svg
      aria-hidden="true"
      class="mr-2 w-8 h-8 text-green/[0.3] animate-spin dark:text-gray-600 fill-green absolute left-[50%]"
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentFill"
      />
    </svg>
    <span class="sr-only">Loading...</span>
  </div>
  <!-- GENERATED PLAYLIST WILL BE SHOWN IN THIS SECTION -->
  <div v-else-if="toplist" class="flex flex-col items-center justify-around">
    <div class="flex gap-5 justify-end text-end">
      <button
        v-if="mark > 0"
        @click="setList(-10)"
        class="-rotate-90 text-3xl text-green hover:text-pink hover:text-3xl"
      >
        &#10157;
      </button>
      <button
        v-if="mark < 90 && mark != -15"
        @click="setList(10)"
        class="rotate-90 text-3xl text-green hover:text-pink hover:text-3xl"
      >
        &#10157;
      </button>
    </div>
    <div
      v-for="item in toplist"
      :key="item['rank']"
      class="h-full w-full sm:w-3/4 lg:w-1/2"
    >
      <Images
        :imgSource="item['cover']"
        :artist="item['artist']"
        :title="item['title']"
        :rank="item['rank']"
        class="w-full h-full border-1 grid grid-cols-3 border-green m-auto rounded-lg border-dotted my-4 flex-grow-1 flex-shrink-0"
      />
    </div>
    <div class="flex gap-5 justify-end text-end">
      <button
        v-if="mark > 0"
        @click="setList(-10)"
        class="-rotate-90 text-3xl text-green hover:text-pink hover:text-3xl"
      >
        &#10157;
      </button>
      <button
        v-if="mark < 90 && mark != -15"
        @click="setList(10)"
        class="rotate-90 text-3xl text-green hover:text-pink hover:text-3xl"
      >
        &#10157;
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Images from "../components/Images.vue";
import Navbar from "../components/Navbar.vue";
import { useStore } from "../stores/Store";
import { storeToRefs } from "pinia";
import { getChart, createPlaylist } from "./services/services";

let fullList: any[] = [];

const store = useStore();

const { date, toplist, mark } = storeToRefs(store);

const getter = async () => {
  toplist.value = ["clicked"];
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
  if (mark.value + num == -10 || mark.value + num == 100) {
    return;
  }
  mark.value += num;
  toplist.value = fullList.slice(mark.value, mark.value + 10);
};

const createList = () => {
  createPlaylist(date.value, toplist.value);
};
</script>

<style></style>
