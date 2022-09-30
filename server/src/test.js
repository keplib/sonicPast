const express = require('express');
const request = require('supertest');
// const app = require('../dist/index.js');
// const { getChart } = require("billboard-top-100");
const getApiChart = require('../dist/controller/controller.js')
const { doesNotReject } = require('assert');

const app = express();

describe('should get list', () => {
    test('should get list', async () => {
        
        const res = await request(app).get("/api/chart")
        console.log(res.statusCode)
        expect(res.statusCode).toBe(404)
    })
})



