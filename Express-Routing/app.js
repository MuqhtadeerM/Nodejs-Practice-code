// after installing the body parse it necsesary to import then use it  in line 58
const bodyParser = require("body-parser");
const http = require("http");
const express = require("express");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const path = require("path");
const app = express();

// enabling the template engine
app.set("view engine", "pug");
// now where i can find these templates
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false })); // using the body parser that helps to read and transfer the request to the middleware
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes); //accessing the admin routes by using dot operation
app.use("/admin", shopRoutes); //acceing shop routes

app.use("/", (req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

const server = http.createServer(app);

server.listen(3000, () => {
  console.log("at 3000");
});
