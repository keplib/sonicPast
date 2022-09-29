<template>
  <div class="card-component 
              border border-5 
              border-dotted
              border-green
              bg-navy
              shadow-lg shadow-lightest-navy  
              rounded-lg">
    <iframe 
            :src="playlistSource" 
            width="300" 
            height="300"
            class="rounded-t-lg" 
          >
    </iframe>
    <div class="flex flex-row justify-between">
      <h1 class="font-fira 
                 font-normal 
                 text-green 
                 italic
                 text-xl
                 mt-5
                 mb-5
                 ml-5 
                 text-left">{{title}}
      </h1>
      <button @click="toggleFav(id, isFav)" >
        <span class="material-symbols-outlined text-green mr-2 mt-2 hover:text-pink hover:text-3xl">add_circle</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from 'vue';
import supabase from '../db/client'
import { useStore } from '../stores/Store';
import { storeToRefs } from 'pinia';
import {ref} from 'vue';

const store = useStore();
const { userPlaylists } = storeToRefs(store);

const props = defineProps({
  playlistSource: String,
  title: String,
  id: Number,
  isFav: Boolean,
});

const toggleFav =  async (item , fav) => {

      const { data, error } = await supabase
        .from('playlists_db')
        .update({favourite: !fav})
        .match({id: item})

      const getData = async () => {
        const { data, error } = await supabase
          .from('playlists_db')
          .select()

          userPlaylists.value = data;
          console.log(userPlaylists.value)
      } 

    getData();
  
} 

</script>

<style>

</style>