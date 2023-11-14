const db = require("../util/database");

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    return db.execute(
      `INSERT INTO products (Title, Price, Description, ImageUrl) VALUES (${this.title}, ${this.price}, ${this.description}, ${this.imageUrl})`
    );
  }

  static fetchAll() {
    return db.execute("Select * from products");
  }

  static deleteById(id) {
    return db.execute(`Delete from products where idproducts = (?)`, [id]);
  }

  static findById(id) {}
};
