const path = require("path");
const express = require("express");

// after installing the body parse it necsesary to import then use it  in line 58
const bodyParser = require("body-parser");
const http = require("http");

// using hbs
const expressHbs = require("express-handlebars");
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const app = express();

// handle hbs
app.engine(
  "hbs",
  expressHbs.engine({
    layoutsDir: "views/layouts/",
    defaultLayout: "main-layout",
    extname: "pug",
    helpers: {
      eq: (a, b) => a === b, // <--- This is your eq helper
    },
  })
);
app.set("view engine", "hbs");

// enabling the template engine
// app.set("view engine", "pug");
// now where i can find these templates
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false })); // using the body parser that helps to read and transfer the request to the middleware
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes); //accessing the admin routes by using dot operation
app.use("/admin", shopRoutes); //acceing shop routes

app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

const server = http.createServer(app);

server.listen(3000, () => {
  console.log("at 3000");
});
