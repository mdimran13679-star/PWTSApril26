/**
 * Assignment 3: Handling Optional Parameters
 * ------------------------------------------
 * Task: Complete the display function by writing the logic to print only the name 
 * if the age parameter has not been given any value, and print both the name 
 * and age if the age value has been given at the time of calling the function.
 */

// Assignment given in functions.ts file

function display(name: string, age?: number): void {
    
    // Check if the age value has been provided at the time of calling
    if (age !== undefined) {
        console.log(`Name: ${name}, Age: ${age}`);
    } else {
        // Print only the name if the age parameter has not been given any value
        console.log(`Name: ${name}`);
    }
}

display("Priya");    
display("Raj", 20);