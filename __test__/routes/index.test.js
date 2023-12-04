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

t.test("Should return not found when access unknown endpoint", async (t) => {
  t.plan(3);
  const response = await request(app).get("/v0/api/");
  t.ok(response.body, "Return not found info");
  t.equal(response.statusCode, 404);
  t.match(response.body, {
    message: "Route GET:/v0/api/ not found",
    error: "Not Found",
    statusCode: 404,
  });
});

t.test("Should return html file", async (t) => {
  t.plan(3);
  const response = await request(app).get("/v0/api/headerparser");
  t.ok(response.text, "Return text/html");
  t.equal(response.statusCode, 200);
  t.match(response.headers["content-type"], "text/html");
});

t.test("Should return css file", async (t) => {
  t.plan(3);
  const response = await request(app).get("/v0/api/assets/style.css");
  t.ok(response.text, "Return text/css");
  t.equal(response.statusCode, 200);
  t.match(response.headers["content-type"], "text/css");
});

t.test("Should return js file", async (t) => {
  t.plan(3);
  const response = await request(app).get("/v0/api/assets/index.js");
  t.ok(response.text, "Return text/js");
  t.equal(response.statusCode, 200);
  t.match(response.headers["content-type"], "application/javascript");
});

t.test("Should return pkg version", async (t) => {
  t.plan(3);
  const response = await request(app).get("/v0/api/version");
  t.ok(response.body, "Return pkg version");
  t.equal(response.statusCode, 200);
  t.match(response.body, { version: /[0-9]+/ });
});
