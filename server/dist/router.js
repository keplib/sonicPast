"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = __importDefault(require("./controller/controller"));
const router = (0, express_1.Router)();
router.get("/login", controller_1.default.getLogin);
router.get("/api/chart", controller_1.default.getApiChart);
router.get("/callback", controller_1.default.getCallback);
router.post("/findTrack", controller_1.default.findTrack);
router.get("/playlists", controller_1.default.getPlaylists);
exports.default = router;
