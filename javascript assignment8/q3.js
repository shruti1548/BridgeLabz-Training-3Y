
"use strict";

// Constructor function
function Product(name, price) {
    this.name = name;
    this.price = price;
}

// Adding method to prototype
Product.prototype.applyDiscount = function(percent) {

    const discount = (this.price * percent) / 100;

    const newPrice = this.price - discount;

    return newPrice;
};

// Creating 3 products
const product1 = new Product("Laptop", 50000);
const product2 = new Product("Mobile", 20000);
const product3 = new Product("Headphones", 5000);

// Applying different discounts
console.log("Product:", product1.name);
console.log("Original Price:", product1.price);
console.log("Price After Discount:", product1.applyDiscount(10));

console.log("----------------------");

console.log("Product:", product2.name);
console.log("Original Price:", product2.price);
console.log("Price After Discount:", product2.applyDiscount(15));

console.log("----------------------");

console.log("Product:", product3.name);
console.log("Original Price:", product3.price);
console.log("Price After Discount:", product3.applyDiscount(20));
