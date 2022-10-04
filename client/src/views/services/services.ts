import axios from "axios";
interface Obj {
  created_at: string;
  favourite: boolean;
  id: number;
  title: string;
  uri: string;
}
const getChart = async (date: string) => {
  const options = {
    method: "GET",
    url: "http://localhost:3000/api/chart",
    params: { date: date },
  };

  try {
    const response = await axios.request(options);
    return response.data.songs.slice(0, 10);
  } catch (error) {
    console.log("error getting chart", error);
  }
};

const createPlaylist = (date: string, toplist: Obj | {}) => {
  try {
    axios.post("http://localhost:3000/findTrack", {
      date: date,
      songs: toplist,
    });
  } catch (error) {
    console.log("error creating playlist", error);
  }
};

export { createPlaylist, getChart };
