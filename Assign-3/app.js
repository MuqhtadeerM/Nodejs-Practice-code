const express = require("express");
const http = require("http");
const path = require("path");
const userRoutes = require("./routes/users");

const app = express();

app.use("/users", userRoutes);

app.use("/", (req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

const server = http.createServer(app);

server.listen(3000, () => {
  console.log("at the 3000");
});
