const path = require("path");
const express = require("express");
const rootDir = require("../util/path");

const router = express.Router();

//  this inside /admin/add-product GET request
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "/add-product.html"));
});

//  this inside /admin/add-product POSt request

// for routing wee split our code into the various files like creating folder called router
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
