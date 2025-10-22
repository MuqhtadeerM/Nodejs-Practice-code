const path = require("path");
const express = require("express");
const rootDir = require("../util/path");

const router = express.Router();

// store the products in the form of array
const products = [];

//  this inside /admin/add-product GET request
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "/add-product.html"));
});

//  this inside /admin/add-product POSt request

// for routing wee split our code into the various files like creating folder called router
router.post("/add-product", (req, res, next) => {
  // adding the product in the object form
  products.push({
    title: req.body.title,
  });

  res.redirect("/admin");
});

exports.routes = router;
exports.products = products;
