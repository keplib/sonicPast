import { defineStore } from 'pinia';
import { ref } from 'vue';

interface Obj {
    created_at: string;
    favourite: boolean;
    id: number;
    title: string;
    uri: string;
}
interface songs {
    [key: string]: Obj;
}


export const useStore = defineStore('Store', () => {
    const date = ref<string>('')
    const toplist = ref({})
    const userPlaylists = ref<any>([])
    const loggedIn = ref<boolean>(false)
 
    return { date, toplist, userPlaylists, loggedIn}
});