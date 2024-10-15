class Product {
  constructor(id, title, price, stock, images, onsale, supplier) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.stock = stock;
    this.images = images;
    this.onsale = onsale;
    this._supplier = supplier;
  }
  get getSupllier() {
    return this._supplier;
  }
  set setSupplier(newName) {
    this._supplier = newName;
  }
}

const prod1 = new Product();
const prod2 = new Product("asd", "titulo", 500);
const prod3 = new Product("uwu", "manya", "123", "12", "[]", true);
const prod4 = new Product("ono", "manye", "12123", "10", "[]", true, "juan");

console.log(prod1);
console.log(prod2);
console.log(prod3);
console.log(prod4);

console.log(prod2.title);
console.log(prod3.onsale);

prod4.setSupplier = "miguel";

console.log(prod4.getSupllier);
