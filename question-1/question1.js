// Create a script with a function named lowerCaseWords that takes a mixed array as input.
// The function will:
    // Return a promise that the string is resolved or rejected.
    // Filter the non-strings and lower case the remaining words.

let lowerCaseWords = function(array) {
    // Return a promise...
    return new Promise((resolve, reject) => {
        let output = []
        // For each element in the array that is of type string...
        array.forEach(element => {
            if (typeof(element) === "string") {
                // Push that element to an output array.
                output.push(element.toLowerCase());
            }
        });

        // If the output array has any items, resolve the promise.
        if (output.length > 0) {
            resolve(output);
        } else {
            // If the output array is empty, throw the reject warning of a lack of strings to convert.
            reject("There were no strings to convert in the array!");
        }
    });
}

const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];

// Testing:
lowerCaseWords(mixedArray)
    .then((message) => console.log(message))
    .catch((message) => console.log(message));
