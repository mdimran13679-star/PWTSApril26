// Operators - Operators is a symbol that performs various operations

// 1. Arithmetic Operators
// 2. Comparison Operators
// 3. Logical Operators
// 4. Assignment Operators (=)
// 5. Ternary Operator - If else statement 


// 1. Arithmetic OP - Used to perform mathematical calculations

    // 1. Addition (+) - Addition or concatenation
    // 2. Substraction (-)
    // 3. Multiplication (*)
    // 4. Division (/)
    // 5. Modulus (%) - Remainder
    // 6. Exponential (**) - Power
    // 7. Increment (++) - Increase the value by 1
    // 8 . Decrement (--) - Decreases the value by 1


    let number1 = 10
    let number2 = 3 // For Concatenation - one variable will be string or two variables also string then it will behave like concatenation i.e., let number2 = "3"

    // 1. Addition (+) - Addition or concatenation
    console.log(number1 + number2); // 13

    // 2. Substraction (-)
    console.log(number1 - number2); // 7

    // 3. Multiplication (*)
    console.log(number1 * number2); // 30

    // 4. Division (/)
    console.log(number1 / number2); // 10/3 = 3.333333

    // 5. Modulus (%) - Remainder after the division
    console.log(number1 % number2); // 10 % 3 = 1

    // 6. Exponential (**) - Power
    console.log(number1 ** number2); // 10 ** 3 = 10*10*10 = 1000, let number2 = 4 then 10 ** 4 = 10*10*10*10 = 10000

    // 7. Increment (++) - Increases the value of the variable by 1

    let num3 = 10

    // a. Pre-increment (++num3) - First the value of the variable will get increment 
    // and then the action will be performed

    console.log(++num3) // 1 + 10 = 11
    console.log(num3); // 11
    

    // b. Post-increment (num3++) - First the action will be performed 
    // and then the value will be incremented.

    let num4 = 5
    console.log(num4++) // 5 is output first after that // print - num4 - 5++ = 5+1=6
    console.log(num4)  // 6 is output


    // 8. Decrement (--) - Decreases the value by 1

    // a. Pre-decrement (--varName) - First the value of the variable will get decremented 
    // and then the action will be performed

    let num5 = 10
    console.log(--num5) // 9 (1 - 10 = 9)
    console.log(num5); // 9
    

    // b. Post-decrement (varName--) - First the action will be performed 
    // and then the value will be decremented.

    let num6 = 7
    console.log(num6--) // 7 is output first after that // print - num6 - 7-- = 7-1 = 6
    console.log(num6) // 6

    // Loops - for , while, do-while

    console.log("*************************************")

    // 2. Comparison Operators - Used to comapare the two values and return the result
    // in the form of boolean (true/false)
    
        // 1. Equal to (==)
        // 2. Not Equal to (!=)
        // 3. Strict Equal to (===)
        // 4. Strict Not Equal to (!==)
        // 5. Greater than (>)
        // 6. Greater than or Equal (>=)
        // 7. Less than (<)
        // 8. Less than or Equal (<=)


        // What is diff between =, == and ===?
        // Type conversion and Type coercion?

        // 1. Equal to (==) - Checks if the two VALUES are same or not

        let num9 = 10
        // let num9 = "10" or "10.0"
        let num10 = 10 // NaN
        // let num10 = "10" 
        // let num10 = "TS"
        // let num10 = Number("10") 
        // let num10 = Number("TS") // Output: It returns NaN stands for Not a Number
        // console.log(num10); // NaN
        

        console.log(num9 == num10) // 10 == 10 // true

        // Type Coercion - Implicit conversion of one data type into other datatype 
        // Type Conversion - Explicitly conversion of one data type into other datatype

        // 2. Not Equal to (!=)
        console.log(num9 != num10); // false
        
        // 3. Strict Equal to (===) - Checks if the two VALUES along with the DATATYPES
        // of the variable are same or not

        // let num10 = "10" // It returns false
        console.log(num9 === num10); // true

        // 4. Strict not Equal to (!==) 
        console.log(num9 !== num10); // false

        // Try 5-8 as assignment
        // 5. Greater than (>)
        console.log(num9 > num10); // false

        // 6. Greater than or Equal (>=)
        console.log(num9 >= num10); // true

        // 7. Less than (<)
        console.log(num9 < num10); // false

        // 8. Less than or Equal (<=)
        console.log(num9 <= num10); // true

    console.log("*****************************************");
        
    // 3. Logical Operator - Used to combine multiple conditions to get the final result. 
    // It will compare 2 expressions and returns us the result in the form of boolean.

        // 1. AND (&&) - Both of the conditions are true then only it will return us true
        // 2. OR (||) - Either of the condition is true - it will return us true
        // 3. Logical NOT (!) - It will reverse the result from true to false and vice-versa


        // 1. AND (&&)

        // true && true - true
        // true && false - false
        // false && true - false
        // false && false - false

        console.log("AND (&&)", (10>6) && (10>5)) // true
        console.log("AND (&&)", (10>6) && (10>50)) // false
        console.log("AND (&&)", (10>60) && (100>50)) // false
        console.log("AND (&&)", (10>60) && (10>50)) // false
    

        // 2. OR (||)

        // true || true - true
        // true || false - true
        // false || true - true
        // false || false - false

        console.log("OR (||)", (10>6) || (10>5)) // true
        console.log("OR (||)", (10>6) || (10>50)) // true
        console.log("OR (||)", (10>60) || (100>50)) // true
        console.log("OR (||)", (10>60) || (10>50)) // false
         

        // 3. NOT (!) - Reverse the result

        console.log(!(23 > 12)) // !true - false

    console.log("*****************************************");

    // 4. Assignment Operator (=) - Assign the value to a variable

        let m = 10
  



    

    
    
    


    
    