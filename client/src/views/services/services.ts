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
    return response.data.songs;
  } catch (error) {
    console.log("error getting chart", error);
  }
};

const createPlaylist = async (date: string, toplist: Obj[] | []) => {

  try {
    await axios.post("http://localhost:3000/findTrack", {
      date: date,
      songs: toplist,
    });
  } catch (error) {
    console.log("error creating playlist", error);
  }

};

const getMe = async () => {
  // let validated;
  const options = {
    method: "GET",
    url: "http://localhost:3000/me",
  };

  try {
    let validated = await axios.get("http://localhost:3000/me")
    console.log(await validated);
    return validated ? true : false;

  } catch (err) {
    console.log(err);
    return false;
  }

}

const logOut = async () => {
  let res = await axios.get("http://localhost:3000/logOut");
  console.log(res);

} 

export { createPlaylist, getChart, getMe, logOut };
