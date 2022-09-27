<template>
  <Navbar />
  <p>Here you can find all your playlists</p>
  <div v-if="userPlaylists.length > 0">
    
    <!-- PLAYLIST TO SHOW USER'S FAVOURITES -->
    <div class="playlist-conatiner flex flex-row overflow-auto">
      <div v-for="playlist in userPlaylists" :key="playlist.id">
        <div v-if="playlist.favourite">
          <Playlist :playlistSource="playlist.uri" 
                    :title="playlist.title" 
                    :id="playlist.id" 
                    :isFav="playlist.favourite" 
                    class="m-6"
          />
        </div>
        <div v-else class="m-0"></div>
      </div>
    </div>

    <!-- PLAYLISTS TO SHOW ALL PLAYLIST -->
    <div class="playlist-conatiner flex flex-row overflow-auto">
      <div v-for="playlist in userPlaylists" :key="playlist.id"  class="m-6">
          <Playlist :playlistSource="playlist.uri" 
                    :id="playlist.id" 
                    :title="playlist.title" 
                    :isFav="playlist.favourite"
          />
      </div>
    </div>
  </div>
</template>

<script setup>
    import {defineProps} from 'vue';
    import Playlist from '../components/Playlist.vue'
    import supabase from '../db/client'
    import { useStore } from '../stores/Store.js';
    import { storeToRefs } from 'pinia';
    import {ref} from 'vue';
    import Navbar from '../components/Navbar.vue';


    const store = useStore();
    const { userPlaylists } = storeToRefs(store);
    
    const getData = async () => {
      const { data, error } = await supabase
        .from('playlists_db')
        .select()

      userPlaylists.value = data;
      console.log(userPlaylists.value)
    } 

    getData();


</script>

<style>

.no-scrollbar::-webkit-scrollbar {
    display: none;
}

</style>