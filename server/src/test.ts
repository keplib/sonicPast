const express = require('express');
const request = require('supertest');
const { createApp } = require('./index');
// const { getChart } = require("billboard-top-100");
const getApiChart = require('../dist/controller/controller.js');

const app: any = createApp();

describe('getChart', () => {

    beforeEach((): void => {
        jest.setTimeout(60000);
  });

    // describe("with correct params", () => {

    //     it('should get list', async () => {
    //         await request(app).get("/api/chart").query({ date: '2016-08-27' }).expect(200);
    //     })
    // });

    describe("if no date is provided", () => {
        it('should get a 404', async () => {
            await request(app).get("/api/chart").expect(404);
        })
    })
})



