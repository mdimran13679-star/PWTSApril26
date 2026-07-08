/**
 * Loops assignment:
 */

// ---------------------------------------------------------
// 1. Find sum of first 25 numbers
// ---------------------------------------------------------
console.log("--- 1. Sum of first 25 numbers ---");
let sum: number = 0;
for (let i: number = 1; i <= 25; i++) {
    sum += i;
}
console.log("Sum:", sum); // Output: 325
console.log("\n");


// ---------------------------------------------------------
// 2. Count digits in a number (Example: 12345)
// ---------------------------------------------------------
console.log("--- 2. Count digits in a number ---");
let num: number = 12345;
let digitCount: number = num.toString().length;
console.log(`Number: ${num} | Digit Count: ${digitCount}`); // Output: 5
console.log("\n");


// ---------------------------------------------------------
// 3. Generate a Multiplication table for 5
// ---------------------------------------------------------
console.log("--- 3. Multiplication Table for 5 ---");
const tableOf: number = 5;
for (let i: number = 1; i <= 10; i++) {
    console.log(`${tableOf} * ${i} = ${tableOf * i}`);
}
console.log("\n");


// ---------------------------------------------------------
// 4. Print the star pyramid (Pattern: 1, 2, 1, 2, 2)
// ---------------------------------------------------------
console.log("--- 4. Star Pyramid Pattern ---");
const starPattern: number[] = [1, 2, 1, 2, 2];

for (let j: number = 0; j < starPattern.length; j++) {
    let row: string = "";
    for (let k: number = 0; k < starPattern[j]; k++) {
        row += "*";
    }
    console.log(row);
}