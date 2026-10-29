
const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

// Calculate original cart total using reduce()
let total = cart.reduce((sum, product) => sum + product.price, 0);

let discountedTotal = 0;

// Apply category discounts
for (let product of cart) {
    let discount = 0;

    if (product.category === "electronics") {
        discount = 10;
    } else if (product.category === "fashion") {
        discount = 5;
    }

    let finalPrice = product.price - (product.price * discount / 100);

    discountedTotal += finalPrice;

    console.log(
        `${product.item}: Original ₹${product.price}, ` +
        `Discount ${discount}%, Final ₹${finalPrice.toFixed(2)}`
    );
}

// Apply extra discount if original cart total exceeds ₹50,000
if (total > 50000) {
    discountedTotal -= discountedTotal * 0.05;
    console.log("Extra 5% overall discount applied.");
} else {
    console.log("No extra overall discount.");
}

console.log(`Original Cart Total: ₹${total.toFixed(2)}`);
console.log(`Final Cart Total: ₹${discountedTotal.toFixed(2)}`);

