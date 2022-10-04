import { defineStore } from "pinia";
import { ref } from "vue";

interface Obj {
  created_at: string;
  favourite: boolean;
  id: number;
  title: string;
  uri: string;
}

export const useStore = defineStore("Store", () => {
  const date = ref<string>("");
  const toplist = ref({});
  const userPlaylists = ref<Obj[] | null>([]);
  const loggedIn = ref<boolean>(false);
  const nav = ref<boolean>(false);

  return { date, toplist, userPlaylists, loggedIn, nav };
});
