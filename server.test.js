const request = require("supertest");
const app = require("./server");

describe("GET /", () => {
  it("should return the application response", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("DevOps Demo App");
  });
});