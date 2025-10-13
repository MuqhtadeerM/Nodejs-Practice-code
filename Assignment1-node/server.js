// defining the http for transfering meta data between front and backend
const http = require("http");
// importing the routes from other files
const routes = require("./routes");

// creating the server using create server method
const server = http.createServer(routes);

server.listen(3000, () => {
  console.log("The Server is Running at port : 3000 ");
});
