"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = void 0;
// Setting up basic express server
const express = require("express");
const cors = require("cors");
const router_1 = __importDefault(require("./router"));
const createApp = () => {
    const newapp = express();
    newapp.use(cors());
    newapp.use(express.json());
    newapp.use(router_1.default);
    return newapp;
};
exports.createApp = createApp;
const app = (0, exports.createApp)();
// Running the server
app.listen("3000", console.log("Server is up and running! "));
