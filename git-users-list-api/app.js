const express = require("express");
const app = express();
var router = express.Router();
var bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const port = 3002;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: "application/json" }));

const GitController = require("./controller/GitController");

app.use("/git/api", router);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
  new GitController(router);
});

module.exports = app;
