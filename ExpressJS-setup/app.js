// // this is use to import http module
// const http = require("http");

// // this imports express module
// const express = require("express");

// // this will creates the express application instance by calling express
// const app = express();

// // this is use to apply middleware in express
// // app.use((req, res, next) => {
// //   console.log("In first Middleware");
// //   // this next is used when we use use another middle ware
// //   next();
// // });

// // next middleware added using the next
// // app.use((req, res, next) => {
// //   console.log("ANother Midlerware");
// //   // next(); // alows as to continue req to another, middleware
// //   res.send("<h1>Hello from express js</h1>"); // insteead of wrighting write keyword, we wrote new word called send
// // });

// // response handler
// // app.use((req, res) => {
// //   res.send("Response from server");
// // });

// // for handling the routes we use like this by using
// app.use("/add-product", (req, res, next) => {
//   console.log("In Another Middleware");
//   res.send("<h1>Hello from Express</h1>");
//   // here on above we already sending the response thats why we dont need to use next()  keyword
// });

// app.use("/", (req, res, next) => {
//   console.log("In Another Page");
//   res.send("<h1>Hello from Express!</h1>");
// });

// // this will create the server using nodejs by passing the exprress app
// const server = http.createServer(app);

// // running on the port 3000
// server.listen(3000, () => {
//   console.log("Server is Running On 3000");
// });

// parse request ----------------------------------------------

// after installing the body parse it necsesary to import then use it  in line 58
const bodyParser = require("body-parser");
const http = require("http");
const express = require("express");

const app = express();

app.use(bodyParser.urlencoded({ extended: false })); // using the body parser that helps to read and transfer the request to the middleware

app.use("/add-product", (req, res, next) => {
  res.send(
    "<form action='/product' method='POST' ><input name='title' type='text' /> <button type='submit' >Add Product</button></form>"
  );
});

// for routing wee split our code into the various files like creating folder called router

app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  //instead of use we can also use get, POST and
  console.log("This is middleware");
  res.send("<h1>Hello world</h1>");
});

const server = http.createServer(app);

server.listen(3000, () => {
  console.log("at 3000");
});
