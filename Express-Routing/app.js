// after installing the body parse it necsesary to import then use it  in line 58
const bodyParser = require("body-parser");
const http = require("http");
const express = require("express");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const path = require("path");
const app = express();

app.use(bodyParser.urlencoded({ extended: false })); // using the body parser that helps to read and transfer the request to the middleware

app.use("/admin", adminRoutes); //accessing the admin
app.use("/admin", shopRoutes); //acceing shop routes

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

const server = http.createServer(app);

server.listen(3000, () => {
  console.log("at 3000");
});
