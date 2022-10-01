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
const express = require('express');
const request = require('supertest');
const { createApp } = require('./index');
// const { getChart } = require("billboard-top-100");
const getApiChart = require('../dist/controller/controller.js');
const app = createApp();
describe('getChart', () => {
    describe("with correct params", () => {
        it('should get list', () => __awaiter(void 0, void 0, void 0, function* () {
            yield request(app).get("/api/chart").query({ date: '2016-08-27' }).expect(200);
        }));
    });
    describe("if no date is provided", () => {
        it('should get a 404', () => __awaiter(void 0, void 0, void 0, function* () {
            yield request(app).get("/api/chart").expect(404);
        }));
    });
});
