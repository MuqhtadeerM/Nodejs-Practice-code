const products = [];

// this class defines the shap of the projjects

module.exports = class Product {
  constructor(title) {
    this.title = t;
  }

  save() {
    products.push(this);
    }
    
    static fetchAll() {
        return this.products;
    }
};
