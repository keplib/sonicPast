<template>
  <div
    :id="title"
    role="banner"
    class="hidden card-component border border-5 border-dotted border-green bg-[rgb(10 25 47)] shadow-lg shadow-lightest-navy rounded-lg"
  >
    <iframe
      @load="iframeLoading(title)"
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
      <button @click="toggleFav(id, isFav, title)">
        <span
          v-if="isFav"
          class="material-symbols-outlined text-green mr-2 mt-2 hover:text-pink hover:text-3xl"
          >remove_circle</span
        >
        <span
          v-else
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

const toggleFav = async (
  item: number | undefined,
  fav: boolean,
  title: string | undefined
) => {
  if (title) {
    document.getElementById(title)?.classList.remove("animate-fade-in");
    document.getElementById(title)?.classList.add("animate-fade-out");
    setTimeout(async () => {
      document.getElementById(title)?.classList.add("hidden");
      document.getElementById(title)?.classList.remove("animate-fade-out");

      try {
        const { data, error } = await supabase
          .from("playlists_db")
          .update({ favourite: !fav })
          .match({ id: item });

        const getData = async () => {
          try {
            const { data, error } = await supabase
              .from("playlists_db")
              .select();

            userPlaylists.value = data;
          } catch (error) {
            console.log("error getting favourite data from supabase", error);
          }
        };

        getData();
      } catch (error) {
        console.log("error toggling favourite", error);
      }
    }, 490);
  }
};
const iframeLoading = (title: string | undefined) => {
  if (title) {
    document.getElementById(title)?.classList.remove("animate-fade-out");
    document.getElementById(title)?.classList.remove("hidden");
    document.getElementById(title)?.classList.add("animate-fade-in");
    setTimeout(() => {
      document.getElementById(title)?.classList.remove("animate-fade-in");
    }, 500);
  }
  document.getElementById("loadingIcon1")?.classList.add("hidden");
};
</script>

<style></style>
