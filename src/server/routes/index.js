"use strict";

const { Router, json } = require("express");
const pinoHttp = require("pino-http");
const path = require("path");
const loggerOptions = require("../config/loggerOptions");
const requestParser = require("../util/requestParser");
const router = Router({ strict: true });

router.use(json());
router.use(pinoHttp({ ...loggerOptions }));

router.get("/headerparser", async (req, res) => res.sendFile(path.join(__dirname, "../../../", "public/")));
router.get("/headerparser/whoami", async function (req, res, next) {
  res.json(requestParser(req));
});

module.exports = router;
