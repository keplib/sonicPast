import { Application } from "express";
const request = require('supertest');
const { createApp } = require('./index');

const app: Application = createApp();

describe('getChart', () => {

    describe("with correct params", () => {

        it('should get list', async () => {
            await request(app).get("/api/chart").query({ date: '2016-08-27' }).expect(200);
        })
    });

    describe("if no date is provided", () => {
        it('should get a 404', async () => {
            await request(app).get("/api/chart").expect(404);
        })
    })
})



