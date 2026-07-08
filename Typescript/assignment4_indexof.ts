/**
 * To Find out all the indices of the element 10 available inside the array 'arr10'.
 * Expected Output: 0, 6, 8
 */

// Assignment given in arrays.ts file

let arr10: number[] = [10, 20, 30, 40, 50, 60, 10, 70, 10, 20];
let resultIndices: number[] = [];
let currentIndex: number = arr10.indexOf(10);

/**
 * Loop continues as long as an occurrence of 10 is found (indexOf does not return -1)
 */
while (currentIndex !== -1) {
    // Add the found index to our result array
    resultIndices.push(currentIndex);
    
    // Search for the next 10, starting the search from the next position (currentIndex + 1)
    currentIndex = arr10.indexOf(10, currentIndex + 1);
}

// Print the final result array containing all indices
console.log("All indices of 10 inside arr10 are:", resultIndices.join(", "));
