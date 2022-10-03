"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = exports.createApp = void 0;
// Setting up basic express server
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const router_1 = __importDefault(require("./router"));
const createApp = () => {
    const newapp = (0, express_1.default)();
    newapp.use((0, cors_1.default)());
    newapp.use(express_1.default.json());
    newapp.use(router_1.default);
    return newapp;
};
exports.createApp = createApp;
const app = (0, exports.createApp)();
// Running the server
exports.server = app.listen("3000", () => {
    console.log("Server is up and running! ");
});
