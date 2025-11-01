const { fileLoader } = require("ejs");
const fs = require("fs");
const path = require("path");

const getProductsFormFile = (cb) => {
  const p = path.join(
    path.dirname(process.mainModule.filename),
    "data",
    "products.json"
  );
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    }
    cb(JSON.parse(fileContent));
  });
};

// this class defines the shap of the projjects
const products = [];
module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    getProductsFormFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });

    fs.readFile(p, (err, fileContent) => {});
  }

  static fetchAll(cb) {
    getProductsFormFile(cb);
  }
};
