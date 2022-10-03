<template>
  <div
    role="banner"
    class="card-component border border-5 border-dotted border-green bg-[rgb(10 25 47)] shadow-lg shadow-lightest-navy rounded-lg"
  >
    <iframe
      :src="playlistSource"
      width="300"
      height="300"
      class="rounded-t-lg"
      :title="playlistSource"
    >
    </iframe>
    <div class="flex flex-row justify-between">
      <h1
        class="font-fira font-normal text-green italic text-xl mt-5 mb-5 ml-5 text-left"
      >
        {{ title }}
      </h1>
      <button @click="toggleFav(id, isFav)">
        <span
          class="material-symbols-outlined text-green mr-2 mt-2 hover:text-pink hover:text-3xl"
          >add_circle</span
        >
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import supabase from "../db/client";
import { useStore } from "../stores/Store";
import { storeToRefs } from "pinia";

const store = useStore();
const { userPlaylists } = storeToRefs(store);

const props = defineProps({
  playlistSource: String,
  title: String,
  id: Number,
  isFav: Boolean,
});

const toggleFav = async (item: number | undefined, fav: boolean) => {
  try {
    const { data, error } = await supabase
      .from("playlists_db")
      .update({ favourite: !fav })
      .match({ id: item });

    const getData = async () => {
      try {
        const { data, error } = await supabase.from("playlists_db").select();

        userPlaylists.value = data;
        console.log(userPlaylists.value);
      } catch (error) {
        console.log("error getting favourite data from supabase", error);
      }
    };

    getData();
  } catch (error) {
    console.log("error toggling favourite", error);
  }
};
</script>

<style></style>
