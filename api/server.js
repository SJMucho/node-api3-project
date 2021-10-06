const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const server = express();

const usersRouter = require("./users/users-router");

server.use(helmet());
server.use(morgan());
server.use(express.json());
server.use("/api/users", usersRouter);

// remember express by default cannot parse JSON in request bodies

// global middlewares and the user's router need to be connected here

server.get("/", (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

module.exports = server;
