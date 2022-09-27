<template>
  <Navbar />
  <p>Here you can find all your playlists</p>
  <div v-if="userPlaylists.length > 0">
    <div class="playlist-conatiner flex flex-row overflow-auto">
      <div v-for="playlist in userPlaylists" :key="playlist.id" class="m-6">
          <Playlist :playlistSource="playlist.uri" :title="playlist.title"/>
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