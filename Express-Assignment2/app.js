// set up nodemon
// import required http module
const http = require("http");
const express = require("express");

// creating the express application for calling express
const app = express();

// second middleware
app.use("/user", (req, res, next) => {
  // res.send("Hello");
  res.send("<h1>Hello from scond!</h1>");
});

// creating the middle ware
app.use("/", (req, res, next) => {
  console.log("First Middleware");
  res.send("<h1>Hello from Express!</h1>");
  next();
  // we dont need to call next(); here if we are sending the response here
});

// creating the server
const server = http.createServer(app);

server.listen(3000, () => {
  console.log("Running on the port 3000");
});
