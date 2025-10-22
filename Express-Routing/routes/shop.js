const path = require("path");
const express = require("express");

const rootDir = require("../util/path");

// getting access to the products
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("shop.js", adminData.products);

  //instead of use we can also use get, POST and
  // res.sendFile(path.join("__dirname", "views", "../" "shop.html")); //exporting the html path using path.join we use this method every where

  // above path is not efficeint to avoid depricating use this below by making the folder util/helper
  res.sendFile(path.join(rootDir, "views", "shop.html")); //exporting the html path using path.join we use this method every where
});

module.exports = router;
