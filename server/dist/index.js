"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
// Setting up basic express server
const express = require("express");
const cors = require("cors");
const router_1 = __importDefault(require("./router"));
exports.app = express();
exports.app.use(cors());
exports.app.use(express.json());
exports.app.use(router_1.default);
// Running the server
exports.app.listen("3000", console.log("Server is up and running! "));
