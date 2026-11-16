// Product class
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    // Apply discount to product price
    applyDiscount(discountPercentage) {
        this.price = this.price - (this.price * discountPercentage / 100);
    }

    // Display product details
    displayDetails() {
        console.log("Product ID:", this.id);
        console.log("Name:", this.name);
        console.log("Price:", this.price);
        console.log("Category:", this.category);
        console.log("--------------------");
    }
}

// Creating product objects
const products = [
    new Product(1, "Laptop", 50000, "Electronics"),
    new Product(2, "Mouse", 500, "Accessories"),
    new Product(3, "Mobile", 20000, "Electronics"),
    new Product(4, "Keyboard", 1500, "Accessories")
];

// Applying 10% discount to first product
products[0].applyDiscount(10);

// Display all products
products.forEach(product => product.displayDetails());

// Filter products having price greater than 1000
const filteredProducts = products.filter(product => product.price > 1000);

console.log("Products above Rs. 1000:");

filteredProducts.forEach(product => {
    console.log(product.name, "-", product.price);
});