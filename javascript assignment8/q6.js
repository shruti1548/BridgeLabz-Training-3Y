
"use strict";

// Product inventory
const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 50000, stock: 5 },
    { id: 2, name: "Mobile", category: "Electronics", price: 20000, stock: 3 },
    { id: 3, name: "Shoes", category: "Fashion", price: 2500, stock: 15 },
    { id: 4, name: "T-Shirt", category: "Fashion", price: 800, stock: 4 },
    { id: 5, name: "Book", category: "Education", price: 500, stock: 20 }
];

// 1. Get products with low stock
function getLowStockProducts() {

    return products.filter((product) => product.stock < 5);
}

// 2. Sort products by price
function sortProductsByPrice() {

    return [...products].sort((a, b) => a.price - b.price);
}

// 3. Calculate total inventory value
function calculateTotalInventoryValue() {

    return products.reduce((total, product) => {
        return total + (product.price * product.stock);
    }, 0);
}

// 4. Group products by category
function groupByCategory() {

    return products.reduce((groups, product) => {

        const category = product.category;

        if (!groups[category]) {
            groups[category] = [];
        }

        groups[category].push(product);

        return groups;

    }, {});
}

// Display results
console.log("Low Stock Products:");
console.table(getLowStockProducts());

console.log("Products Sorted By Price:");
console.table(sortProductsByPrice());

console.log("Total Inventory Value:");
console.log("Rs.", calculateTotalInventoryValue());

console.log("Products Grouped By Category:");
console.log(groupByCategory());
