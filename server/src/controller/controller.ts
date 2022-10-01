import { Request, Response } from "express";

const { getChart } = require("billboard-top-100");
const dbClient = require("../database/client");
require("dotenv").config();

// Initializing the Spotify Web API
const SpotifyWebApi = require("spotify-web-api-node");
const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const scopes: string[] = [
  "user-read-email",
  "user-read-private",
  "playlist-read-collaborative",
  "playlist-modify-public",
  "playlist-read-private",
  "playlist-modify-private",
  "user-library-modify",
  "user-library-read",
];

const spotifyApi = new SpotifyWebApi({
  redirectUri: "http://localhost:3000/callback",
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
});

// Route for starting OAuth
const getLogin = async (req: Request, res: Response): Promise<void> => {
  try {
    res.redirect(spotifyApi.createAuthorizeURL(scopes));
  } catch (error) {
    console.log(error);
  }
};
// get the chart from Billboard 100 API
interface Obj {
  created_at: string;
  favourite: boolean;
  id: number;
  title: string;
  uri: string;
}
export const getApiChart = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let date = req.query.date;
    console.log("hello>>", date);

    getChart("hot-100", `${date}`, (err: Error, chart: Obj) => {
      if (err) console.log(err);
      res.status(200);
      res.send(chart);
    });
  } catch (error) {
    console.log(error);
    res.status(404).json("Invalid request");
  }
};
// Callback route for OAuth
const getCallback = async (req: Request, res: Response): Promise<void> => {
  try {
    const error = req.query.error;
    const code = req.query.code;
    const state = req.query.state;

    if (error) {
      console.error("Callback Error:", error);
      res.send(`Callback Error: ${error}`);
      return;
    }

    const data = await spotifyApi.authorizationCodeGrant(code);

    const access_token = data.body["access_token"];
    const refresh_token = data.body["refresh_token"];
    const expires_in = data.body["expires_in"];

    spotifyApi.setAccessToken(access_token);
    spotifyApi.setRefreshToken(refresh_token);

    console.log("access_token:", access_token);
    console.log("refresh_token:", refresh_token);

    console.log(
      `Sucessfully retreived access token. Expires in ${expires_in} s.`
    );

    res.redirect("http://localhost:8080/create");

    setInterval(async () => {
      const data = await spotifyApi.refreshAccessToken();
      const access_token = data.body["access_token"];

      console.log("The access token has been refreshed!");
      console.log("access_token:", access_token);
      spotifyApi.setAccessToken(access_token);
    }, (expires_in / 2) * 1000);
  } catch (error) {
    console.error("Error getting Tokens:", error);
    res.send(`Error getting Tokens: ${error}`);
  }
};

const findTrack = async (req: Request, res: Response): Promise<void> => {
  const date = req.body.date;
  const songs = req.body.songs;

  try {
    const newPlaylist = await spotifyApi.createPlaylist(`${date}`, {
      description: "Playlist created by SonicPast",
      public: true,
    });
    let playlistID = newPlaylist.body.uri.split(":")[2];
    console.log(playlistID);

    // ADD HERE SUPABASE INSERT
    const playlistURI = `https://open.spotify.com/embed/playlist/${playlistID}?utm_source=generator`;
    const favorite = false;
    const title = date;

    const { data, error } = await dbClient
      .from("playlists_db")
      .insert([{ title: title, favourite: favorite, uri: playlistURI }])
      .select();

    for (let i = 0; i < songs.length; i++) {
      const queryString = `track:${songs[i].title} artist:${songs[i].artist}`;
      console.log(queryString);
      const data = await spotifyApi.searchTracks(queryString);
      if (data.body.tracks.items.length > 0) {
        await spotifyApi.addTracksToPlaylist(`${playlistID}`, [
          data.body.tracks.items[0].uri,
        ]);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const getPlaylists = async (req: Request, res: Response): Promise<void> => {
  res.send("playlists route");
};

module.exports = {
  getApiChart,
  getLogin,
  getPlaylists,
  findTrack,
  getCallback,
};
