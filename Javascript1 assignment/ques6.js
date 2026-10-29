
let total = 7500;
let discountPercentage = 0;

if (total >= 10000) {
    discountPercentage = 25;
}
else if (total >= 5000) {
    discountPercentage = 15;
}
else if (total >= 2000) {
    discountPercentage = 5;
}
else {
    discountPercentage = 0;
}

let discountAmount = total * discountPercentage / 100;
let finalPrice = Math.round(total - discountAmount);

console.log("Shopping Bill");
console.log("-------------");
console.log(`Original Total: ₹${total}`);
console.log(`Discount: ${discountPercentage}%`);
console.log(`Discount Amount: ₹${Math.round(discountAmount)}`);
console.log(`Final Price: ₹${finalPrice}`);

