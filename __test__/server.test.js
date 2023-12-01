const t = require("tap");
const request = require("supertest");
const app = require("../src/server/server");

t.test("Server should start", async (t) => {
  t.plan(3);
  const response = await request(app).get("/");
  t.ok(response.body, "Returned response body");
  t.equal(response.statusCode, 200);
  t.match(response.body, { root: true });
});
