// Adding custom myMap method to Array prototype
Array.prototype.myMap = function(callback) {

    // Creating an empty result array
    const result = new Array(this.length);

    // Loop through array elements
    for (let i = 0; i < this.length; i++) {

        // Apply callback to existing elements
        if (i in this) {
            result[i] = callback(this[i], i, this);
        }
    }

    return result;
};

// Original array
const numbers = [1, 2, 3];

// Using custom myMap to double numbers
const doubledNumbers = numbers.myMap(function(num) {
    return num * 2;
});

// Using custom myMap to square numbers
const squaredNumbers = numbers.myMap(num => num * num);

// Display results
console.log("Original Array:", numbers);
console.log("Doubled Array:", doubledNumbers);
console.log("Squared Array:", squaredNumbers);