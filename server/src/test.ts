
import { response } from 'express';
import request from 'supertest';
import { createApp, server } from './index';

const app = createApp();

describe('Index', () => {

    afterAll(() => {
        server.close();
    });

    const testApp  = createApp();
    it('should create server app', () => {
        expect(typeof testApp).toBe('function');
    })

})

describe('Controller getApiChart', () => {

    describe("with correct params", () => {
        it('should get list', async () => {
            const response: any = await request(app).get("/api/chart").query({ date: '2016-08-27' })
            expect(response.status).toEqual(200);
            expect(response.body.songs.every((element: any) => {
                return element.title && element.artist && element.rank               
            })).toBe(true);
          
        });
    });

    describe("if no date is provided", () => {
        it('should get a 404', async () => {
            await request(app).get("/api/chart").expect(404);
        })
    })
})

describe('getPlaylists', () => {
    it("should return route for callback", async () => {
        await request(app).get("/playlists")
            .expect('playlists route')
            .expect(200)
    })
})




