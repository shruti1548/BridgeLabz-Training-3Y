// Cart class
class Cart {
    constructor() {
        this.items = [];
    }

    // Add items to cart
    addItem(name, price, quantity) {
        this.items.push({
            name: name,
            price: price,
            quantity: quantity
        });
    }

    // Calculate total cart price
    getTotal() {
        return this.items.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    }

    // Apply coupon code
    applyCoupon(couponCode) {

        const couponPattern = /^(SAVE20|DISC10)$/;

        if (!couponPattern.test(couponCode)) {
            console.log("Invalid coupon code.");
            return this.getTotal();
        }

        let discount = 0;

        if (couponCode === "SAVE20") {
            discount = 20;
        } else if (couponCode === "DISC10") {
            discount = 10;
        }

        const total = this.getTotal();

        const finalAmount = total - (total * discount / 100);

        console.log("Coupon Applied:", couponCode);
        console.log("Discount:", discount + "%");
        console.log("Final Amount:", finalAmount);

        return finalAmount;
    }
}

// Create cart object
const cart = new Cart();

// Add products
cart.addItem("Laptop", 50000, 1);
cart.addItem("Mouse", 500, 2);
cart.addItem("Keyboard", 1500, 1);

// Display cart items
console.log("Cart Items:");
console.log(cart.items);

// Display total
console.log("Total Amount:", cart.getTotal());

// Apply coupon
cart.applyCoupon("SAVE20");