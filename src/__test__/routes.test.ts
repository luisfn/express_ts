import supertest from "supertest";
import app from "../index";

describe("Routes", () => {
    describe("GET /hello", () => {
        it("should return hello world", async () => {
            const response = await supertest(app).get("/hello");
            expect(response.status).toBe(200);
            expect(response.body.content).toEqual(["Hello World!", "blah blah blah"]);
        })
    });
    describe("GET /goodbye", () => {
        it("should return goodbye world", async () => {
            const response = await supertest(app).get("/goodbye");
            expect(response.status).toBe(200);
            expect(response.body.goodbye).toEqual(["Goodbye World!", "blah blah blah"]);
        })
    });
});