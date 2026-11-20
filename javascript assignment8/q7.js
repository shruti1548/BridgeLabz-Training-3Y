
"use strict";

// BankAccount class
class BankAccount {

    // Private field
    #balance;

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    // Deposit money
    deposit(amount) {

        if (amount <= 0) {
            throw new Error("Deposit amount must be positive!");
        }

        this.#balance += amount;

        console.log("Deposited:", amount);
    }

    // Withdraw money
    withdraw(amount) {

        if (amount <= 0) {
            throw new Error("Withdrawal amount must be positive!");
        }

        if (amount > this.#balance) {
            throw new Error("Insufficient balance!");
        }

        this.#balance -= amount;

        console.log("Withdrawn:", amount);
    }

    // Get current balance
    getBalance() {
        return this.#balance;
    }
}

// Creating bank account
const account1 = new BankAccount(10000);

// Valid deposit
account1.deposit(5000);

// Valid withdrawal
account1.withdraw(2000);

console.log("Current Balance:", account1.getBalance());

// Invalid withdrawal
try {

    account1.withdraw(20000);

}
catch (error) {

    console.log("Transaction Failed:", error.message);

}

// Final balance
console.log("Final Balance:", account1.getBalance());
