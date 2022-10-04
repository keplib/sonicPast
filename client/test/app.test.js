// import Playlist from "../src/views/Playlist.vue";
import { describe, test } from "vitest";
import supabase from "../src/db/client";
import axios from "axios";

const { expect } = require("chai");

describe("supabase", () => {
  test("expect response from database", () => {
    supabase
      .from("playlists_db")
      .select()
      .then((response) => {
        expect(response.data).toString();
      });
  });
});
const getChart = async () => {
  const options = {
    method: "GET",
    url: "http://localhost:3000/api/chart",
    params: { date: "1997-10-06" },
  };

  try {
    const response = await axios.request(options);
    return response.data.songs.slice(0, 10);
  } catch (error) {
    console.log(error);
  }
};
describe("Chart Data", () => {
  test("should get charts from api", async () => {
    expect(await getChart()).to.be.a("array");
  });
});
