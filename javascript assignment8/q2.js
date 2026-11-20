
"use strict";

// Menu containing available food items
const menu = [
    { name: "Pizza", price: 250 },
    { name: "Burger", price: 120 },
    { name: "Pasta", price: 180 },
    { name: "Sandwich", price: 100 }
];

// Function to calculate bill
function calculateBill(orderItems) {

    // Get prices using map()
    const prices = orderItems.map((item) => {

        const food = menu.find(
            (menuItem) => menuItem.name === item
        );

        // Check for invalid food item
        if (!food) {
            throw new Error(`Invalid item ordered: ${item}`);
        }

        return food.price;
    });

    // Calculate total using reduce()
    const total = prices.reduce((sum, price) => sum + price, 0);

    return total;
}

// Test orders
try {

    const order = ["Pizza", "Burger", "Pasta"];

    const bill = calculateBill(order);

    console.log("Ordered Items:", order);
    console.log("Total Bill: Rs.", bill);

}
catch (error) {

    console.log("Order Error:", error.message);

}
