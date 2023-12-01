"use strict";

const { Router, json } = require("express");
const pinoHttp = require("pino-http");
const path = require("path");
const loggerOptions = require("../config/loggerOptions");
const router = Router({ strict: true });

router.use(json());
router.use(pinoHttp({ ...loggerOptions }));

router.get("/headerparser", async (req, res) => res.sendFile(path.join(__dirname, "../../../", "public/")));

module.exports = router;
