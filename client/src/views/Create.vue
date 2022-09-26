<template>

    <div class="create-controls flex flex-row justify-between w-1/2 mx-auto">

        <div class="datepicker-container my-10  text-left">
            <p class="font-karla 
                    font-semibold 
                    text-lightest-slate
                    text-2xl">PICK A DATE
            </p>
            <input type="date" v-model="date"/>
            <br>
        </div>

        <div class="control-container my-10 text-left">
            <div class="mb-5">
                <p class="font-karla 
                        font-semibold 
                        text-lightest-slate
                        text-2xl">CREATE THE PLAYLIST
                </p>
                <button @click="getChart" class="font-light
                            font-ibm 
                            p-3 
                            text-green
                            border-green 
                            border-1 rounded 
                            hover:bg-green/[0.2]">GENERATE
                </button>
            </div>
            <div>
                <p class="font-karla 
                        font-semibold 
                        text-slate
                        text-2xl">ADD IT TO YOUR SPOTIFY
                </p>
                <button @click="createPlaylist" class="
                            font-light
                            font-ibm 
                            p-3 
                            text-green
                            border-green 
                            border-1 rounded 
                            hover:bg-green/[0.2]">CREATE PLAYLIST
                </button>
            </div>
        </div>
    </div>

    <!-- GENERATED PLAYLIST WILL BE SHOWN IN THIS SECTION -->
    <div v-if="toplist">
        <div v-for="item in toplist" :key="item.rank">
            <Images 
                :imgSource="item.cover" 
                :artist="item.artist" 
                :title="item.title"
                :rank="item.rank"
                class=" w-1/2 
                        border border-1 
                        border-green 
                        m-auto 
                        rounded-lg
                        border-dotted 
                        my-4 
                        "/>
        </div>
    </div>
</template>

<script setup>
    import {ref} from 'vue';
    import axios from 'axios';
    import Images from '../components/Images.vue';
    import { useStore } from '../stores/Store.js';
    import { storeToRefs } from 'pinia';

    const store = useStore();
    const { date, toplist } = storeToRefs(store);

    const getChart =  () => {

        const options = {
            method: 'GET', 
            url: 'http://localhost:3000/api/chart',
            params: { date: date.value}
        };

         axios.request(options).then(function (response) {
             toplist.value = response.data.songs.slice(0,10);
             console.log(toplist.value)
         }).catch(function (error) {
             console.error(error);
         });
    }

    const createPlaylist = () => {
        axios.post('http://localhost:3000/findTrack', { 'date' : date.value, 'songs': toplist.value})
            
    }

    const loginHandler = () => {
        axios.get('http://localhost:3000/login');
    }
  
</script>

<style></style>