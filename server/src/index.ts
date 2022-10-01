// Setting up basic express server
const express = require("express");
const cors = require("cors");
import router from "./router";

export const createApp = () => {
    const newapp = express();
    newapp.use(cors());
    newapp.use(express.json());
    newapp.use(router);
    return newapp;
}

const app: any = createApp();

// Running the server
app.listen("3000", console.log("Server is up and running! "));
