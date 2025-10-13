const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  // routes for home page
  if (url === "/") {
    res.setHeader("content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>Assignment 1</title></head>");
    res.write(
      "<body><p>Welcome to my page</p><form action='create-user' method='POST'><input type='text' name='username' /><button type='submit'>Send</button></form></body>"
    );
    res.write("</html");
    res.end();
  }

  //route for users main
  if (url === "/users") {
    res.setHeader("content-type", "text/html");
    res.write("html");
    res.write("<head><title>Assignment 1</title></head>");
    res.write("<body><ul><li>User 1</li><li>User 2</li></ul></body>");
    res.write("</html>");
    return res.end();
  }

  // route for create user
  if (url === "/create-user") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody.split("=")[1]); // username=whatever-the-user-enter
    });

    res.statusCode = 302;
    res.setHeader("Location", "/");
    res.end();
  }

  //  excutes if pages not found::
};

module.exports = requestHandler;
