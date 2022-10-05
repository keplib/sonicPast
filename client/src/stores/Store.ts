import { defineStore } from "pinia";
import { ref } from "vue";

export interface Obj {
  created_at: string;
  favourite: boolean;
  id: number;
  title: string;
  uri: string;
}

export const useStore = defineStore("Store", () => {
  const date = ref<string>("");
  const toplist = ref<any[]>([]);
  const mark = ref<number>(-15);
  const userPlaylists = ref<Obj[] | null>([]);
  const loggedIn = ref<boolean>(false);
  const nav = ref<boolean>(false);

  return { date, toplist, userPlaylists, loggedIn, nav, mark };
});
