"use strict";
// 36. T-Shirt: Write a function called make_shirt() that accepts a size and the
// text of a message that should be printed on the shirt. The function should print
// a sentence summarizing the size of the shirt and the message printed on it.
Object.defineProperty(exports, "__esModule", { value: true });
// Call the function.
function make_shirt(size, message) {
    console.log(`Printing shirt with size ${size} and message: "${message}" `);
}
// Calling the function
make_shirt('Large', 'Hello, World!');
