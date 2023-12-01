const t = require("tap");
const request = require("supertest");
const app = require("../../src/server/server");

t.test("Should return parsed request header", async (t) => {
  t.plan(3);
  const response = await request(app).get("/v0/api/headerparser/whoami");
  t.ok(response.body, "Returned parsed request header");
  t.equal(response.statusCode, 200);
  t.match(response.body, { id: /\d+/ });
});
