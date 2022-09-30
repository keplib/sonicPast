// Setting up basic express server
const express = require("express");
const cors = require("cors");
import router from "./router";

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

// Running the server
app.listen("3000", console.log("Server is up and running! "));
