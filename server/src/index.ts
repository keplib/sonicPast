// Setting up basic express server
const express = require("express");
const cors = require("cors");
import { Application } from "express";
import router from "./router";

export const createApp = () => {
  const newapp: Application = express();
  newapp.use(cors());
  newapp.use(express.json());
  newapp.use(router);
  return newapp;
};

const app = createApp();

// Running the server
app.listen("3000", () => {
  console.log("Server is up and running! ");
});
