"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApiChart = void 0;
const { getChart } = require("billboard-top-100");
const dbClient = require("../database/client");
require("dotenv").config();
// Initializing the Spotify Web API
const SpotifyWebApi = require("spotify-web-api-node");
const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const scopes = [
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
const getLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.redirect(spotifyApi.createAuthorizeURL(scopes));
    }
    catch (error) {
        console.log(error);
    }
});
const getApiChart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let date = req.query.date;
        if (!date) {
            res.status(404).end('Invalid date');
        }
        else {
            getChart("hot-100", `${date}`, (err, chart) => {
                res.status(200).send(chart);
            });
        }
    }
    catch (error) {
        console.log(error);
        res.status(404).send('Invalid request');
    }
});
exports.getApiChart = getApiChart;
// Callback route for OAuth
const getCallback = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const error = req.query.error;
        const code = req.query.code;
        const state = req.query.state;
        if (error) {
            console.error("Callback Error:", error);
            res.send(`Callback Error: ${error}`);
            return;
        }
        const data = yield spotifyApi.authorizationCodeGrant(code);
        const access_token = data.body["access_token"];
        const refresh_token = data.body["refresh_token"];
        const expires_in = data.body["expires_in"];
        spotifyApi.setAccessToken(access_token);
        spotifyApi.setRefreshToken(refresh_token);
        console.log("access_token:", access_token);
        console.log("refresh_token:", refresh_token);
        console.log(`Sucessfully retreived access token. Expires in ${expires_in} s.`);
        res.redirect("http://localhost:8080/create");
        setInterval(() => __awaiter(void 0, void 0, void 0, function* () {
            const data = yield spotifyApi.refreshAccessToken();
            const access_token = data.body["access_token"];
            console.log("The access token has been refreshed!");
            console.log("access_token:", access_token);
            spotifyApi.setAccessToken(access_token);
        }), (expires_in / 2) * 1000);
    }
    catch (error) {
        console.error("Error getting Tokens:", error);
        res.send(`Error getting Tokens: ${error}`);
    }
});
const findTrack = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const date = req.body.date;
    const songs = req.body.songs;
    try {
        const newPlaylist = yield spotifyApi.createPlaylist(`${date}`, {
            description: "Playlist created by SonicPast",
            public: true,
        });
        let playlistID = newPlaylist.body.uri.split(":")[2];
        console.log(playlistID);
        // ADD HERE SUPABASE INSERT
        const playlistURI = `https://open.spotify.com/embed/playlist/${playlistID}?utm_source=generator`;
        const favorite = false;
        const title = date;
        const { data, error } = yield dbClient
            .from("playlists_db")
            .insert([{ title: title, favourite: favorite, uri: playlistURI }])
            .select();
        for (let i = 0; i < songs.length; i++) {
            const queryString = `track:${songs[i].title} artist:${songs[i].artist}`;
            console.log(queryString);
            const data = yield spotifyApi.searchTracks(queryString);
            if (data.body.tracks.items.length > 0) {
                yield spotifyApi.addTracksToPlaylist(`${playlistID}`, [
                    data.body.tracks.items[0].uri,
                ]);
            }
        }
        res.send(201);
    }
    catch (error) {
        console.log(error);
        res.send(404);
    }
});
const getPlaylists = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("playlists route");
});
module.exports = {
    getApiChart: exports.getApiChart,
    getLogin,
    getPlaylists,
    findTrack,
    getCallback,
};
