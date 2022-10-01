// Setting up basic express server
import express from "express";
import cors from "cors";
import { Express } from "express";
import router from "./router";

export const createApp = ():Express => {
    const newapp = express();
    newapp.use(cors());
    newapp.use(express.json());
    newapp.use(router);
    return newapp;
}

const app = createApp();

// Running the server
export const server = app.listen("3000", () => {
    console.log("Server is up and running! ")
});
