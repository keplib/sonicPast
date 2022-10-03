// import Playlist from "../src/views/Playlist.vue";
import { describe, test } from "vitest";
import supabase from "../src/db/client";

const { expect } = require("chai");
const toggleFav = async (item, fav) => {
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

describe("toggleFav", () => {
  test("expect to toggle favourites", () => {
    toggleFav(1, true).then((response) => {
      console.log(response);
    });
  });
});

describe("supabase", () => {
  test("expect response from database", () => {
    supabase
      .from("playlists_db")
      .select()
      .then((response) => {
        expect(response.data).not(null);
      });
  });
});
