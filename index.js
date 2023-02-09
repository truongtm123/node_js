"use strict";
const express = require("express");
const config = require("./config");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const eventRouter = require("./routes/eventRoutes");

app.use(cors());
app.use(bodyParser.json());

app.use("/api", eventRouter.routers);

app.listen(config.port, () =>
  console.log("Server is listening on http://localhost" + config.port)
);
