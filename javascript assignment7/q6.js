
"use strict";

// Async function to fetch product data
async function fetchProducts() {
    try {
        console.log("Fetching products...");

        // Send request to Fake Store API
        const response = await fetch(
            "https://fakestoreapi.com/products"
        );

        // Check whether request was successful
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        // Convert response into JSON
        const products = await response.json();

        console.log("Product Details:");

        // Display each product
        products.forEach((product) => {
            console.log("--------------------------");
            console.log(`Product: ${product.title}`);
            console.log(`Price: $${product.price}`);
            console.log(`Image: ${product.image}`);
        });

    } catch (error) {
        console.log("Failed to load products. Please try again.");
        console.log("Error:", error.message);
    }
}

// Execute function
fetchProducts();
