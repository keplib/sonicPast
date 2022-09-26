import { defineStore } from 'pinia';
import {ref} from 'vue';


export const useStore = defineStore('Store', () => {
    const date = ref('')
    const toplist = ref({})
    const userPlaylists = ref([])
 
    return { date, toplist, userPlaylists}
});