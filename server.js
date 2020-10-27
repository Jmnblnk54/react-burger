const express = require("express");
const mongoose = require ("mongoose");
const routes = require("./routes");
require("dotenv").config();

const PORT = process.env.PORT || 8080;
const app = express();

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import routes and give the server access to them.
const routes = require("./controllers/burgerController.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, ()=> {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" ${PORT});
});