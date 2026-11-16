// Book class
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = false;
    }

    // Issue a book
    issueBook() {
        if (!this.isIssued) {
            this.isIssued = true;
            console.log(this.title, "has been issued.");
        } else {
            console.log(this.title, "is already issued.");
        }
    }

    // Return a book
    returnBook() {
        if (this.isIssued) {
            this.isIssued = false;
            console.log(this.title, "has been returned.");
        } else {
            console.log(this.title, "was not issued.");
        }
    }
}

// Creating library books
const books = [
    new Book("JavaScript Basics", "John", "101"),
    new Book("Python Programming", "David", "102"),
    new Book("Web Development", "Alex", "103")
];

// Issue a book
books[0].issueBook();

// Return a book
books[0].returnBook();

// Display available books
console.log("\nAvailable Books:");

books.forEach(book => {
    if (!book.isIssued) {
        console.log(book.title, "-", book.author);
    }
});

// Search book using ISBN
const searchISBN = "102";

const foundBook = books.find(book => book.isbn === searchISBN);

if (foundBook) {
    console.log("\nBook Found:", foundBook.title);
} else {
    console.log("\nBook not found.");
}