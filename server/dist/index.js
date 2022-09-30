"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Setting up basic express server
const express = require("express");
const cors = require("cors");
const router_1 = __importDefault(require("./router"));
const app = express();
app.use(cors());
app.use(express.json());
app.use(router_1.default);
// Running the server
app.listen("3000", console.log("Server is up and running! "));
