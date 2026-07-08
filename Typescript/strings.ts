// string - Sequence of characters - string, text, word

    // 1. Single quote ('') - String Literal
    // 2. Double quote (" ") - String Literal
    // 3. Backtick (``) - Template Literal

    let singleQuote1 = 'This is a single quote string'
    let doubleQuote1 = "This is a double quote string"
    // let backtick = `dgdfgfdfh`

    // There are 2 main purpose of defining the string by using backtick

    // 1. multi-line string

    let multiline1 = `This is
    a multi line
    string`

    // 2. For string parameterisation - ${variableName} - Calling a variable inside a 
    // string. - Data driven testing in PW (Playwright)

    let age1 = 20

    let message1 = `Your age is ${age1}`
    console.log(message1);
    

    let char1 = 'c';


console.log("************************************");

let str =  "Welcome to Typescript" 

// 1. length - Returns the number of characters in a string // length is a property

// Syntax:
// stringName.length

console.log(str.length) // 21

console.log("**************Method of a string****************");

// 2. charAt(index) - return the character at the specified index

// Syntax:
// stringName.charAt(index)

console.log(str.charAt(4)); // o

// Programming Interview question "abcdabcd" - a2b2c2d2 // they will give you this particular string i.e., "abcdabcd" and ask you to print the output in this particular format i.e., a2b2c2d2 using charAt(index)

// 3. concat(str1, str2) - merges all the strings and return us a new string

// Syntax:
// stringName.concat(str, str1,...)

console.log(str.concat(" Hello", " Javascript")) // Welcome to Typescript Hello Javascript
console.log(str) // Welcome to Typescript

console.log("**************Assignment from 4 to 6 methods****************");

// 4. includes(searchString, startIndex?) - Returns true if the searchString is found 
// in the string otherwise false

// Syntax:
// stringName.includes(searchString, startIndex?)

console.log(str.includes("Typescript")) // true
console.log(str.includes("Welcome", 5)) // false

// 5. indexOf(searchValue, startIndex?) - Returns the index of the first occurrence of a 
// specified value in a string, or -1 if not found

// Syntax:
// stringName.indexOf(searchValue, startIndex?)

console.log(str.indexOf("e")) // 1
console.log(str.indexOf("e", 2)) // 6
console.log(str.indexOf("Javascript")) // -1 (Not found)

// 6. lastIndexOf(searchValue, startIndex?) - Returns the index of the last occurrence 
// of a specified value inside a string, or -1 if not found

// Syntax:
// stringName.lastIndexOf(searchValue, startIndex?)

console.log(str.lastIndexOf("e")) // 14
console.log(str.lastIndexOf("e", 5)) // 1
console.log(str.lastIndexOf("z")) // -1

console.log("************************************");

// What is difference between slice() and substring() in string?


// 7. slice(startIndex?, endIndex?) - Returns a portion of the string

// Syntax:
// stringName.slice(startIndex?, endIndex?)

console.log(str.slice()) // Welcome to Typescript 
console.log(str.slice(2,9)) // lcome t // 8th index will take basically 9th index is optional so it will consider upto 8th index
console.log(str.slice(9,2)) // empty string means no value available inside this i.e., empty value

// 8. substring(startIndex, endIndex?) - Return a portion of the string 
// substring will have startIndex as mandatory

// Syntax:
// stringName.substring(startIndex, endIndex?)

// console.log(str.substring(0)) // Welcome to Typescript
// console.log(str.substring(2)) // lcome to Typescript
console.log(str.substring(2,9)) // lcome t
console.log(str.substring(9,2)) // lcome t // startIndex - 9 which is greater than endIndex - 2 then it will simply swap the index and return you the value from the string


// 9. startsWith(string) - It checks if the string is starting with the specified string or
// character and return us the boolean value

// Syntax:
// stringName.startsWith(string)

console.log(str.startsWith("W")) // true
console.log(str.startsWith("Welcome")) // true

// 10. endsWith(string) - It checks if the string is ending with the specified string or
// character and return us the boolean value

// Syntax:
// stringName.endsWith(string)

console.log(str.endsWith("t")) // true
console.log(str.endsWith("Typescript")) // true

// 11. toUpperCase() - It converts the string to upper case letter and return a new string

// Syntax:
// stringName.toUpperCase()

console.log(str) // Welcome to Typescript
console.log(str.toUpperCase()) // WELCOME TO TYPESCRIPT

// 12. toLowerCase() - It converts the string to lower case letter and return a new string

// Syntax:
// stringName.toLowerCase()

console.log(str.toLowerCase()) // welcome to typescript


let str1 = "   This is an element   "

// 13. trim() - it removes the leading (starting or beginning) and trailing (at the end) 
// whitespace from a string and return a new string

// Syntax:
// stringName.trim()

console.log(str1); //    This is an element   
console.log(str1.trim()); // This is an element
console.log(str1.length) // 24
console.log(str1.trim().length) // 18

// 14. trimStart() - It removes the leading (beginning or starting) whitespace from a string

// Syntax:
// stringName.trimStart()

console.log(str1.trimStart()); // This is an element   
console.log(str1.trimStart().length) // 21 (24-3=21)

// 15. trimEnd() - It removes the trailing (at the end) whitespace from a string

// Syntax:
// stringName.trimEnd()

console.log(str1.trimEnd()); //    This is an element
console.log(str1.trimEnd().length) // 21 (24-3=21)

// 16. split(separator) - Splits the string into an array of substring based on the
// specified separator

// Syntax:
// stringName.split(separator) // separator can be any kind of symbol or any kind of character that you are trying to separate the string i.e., comma (,) or dot (.) or @ or etc.

let str2 = "Apple Banana Mango Orange"
console.log(str2.split(" ")); // [ 'Apple', 'Banana', 'Mango', 'Orange' ]
console.log(str2.split(" ")[0]) // Apple

let email = "praveen@qamitra.com" // Your task is to find out the domain name that is available inside this email
let domain = email.split("@")
console.log(domain); // [ 'praveen', 'qamitra.com' ]
console.log(domain[1].split(".")[0]) // qamitra

// 17. replace(old, new)

// Syntax:
// stringName.replace(old, new) // old string or old character value with a new character

let str3 = "This is a string"
console.log(str3.replace("i", "@")) // Th@s is a string

// 18. replaceAll(old, new)

// Syntax:
// stringName.replaceAll(old, new)

console.log(str3.replaceAll("i", "@")); // Th@s @s a str@ng


// Framework
// Objects
// Class












