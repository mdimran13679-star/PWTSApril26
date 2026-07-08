// Variable - storage/container - Which store either a single value or multiple values

// There are 3 ways in which we can declare a variable (JS & TS):

// Syntax:
// keyword(var/let/const) variableName = value - JS
// keyword(var/let/const) variableName :datatype(optional) = value - TS

// Example:
// let i = 10
// let j : number = 89

// var - In Modern JS & TS we do not use var keyword > version 5 - ES 6 (ECMA SCRIPT 6 - 2015)
// let - If the value of the variable can change at any point of time
// const - To declare a constant variable

// scope of variable:

// 1. Local scoped variable - When you try to declare a variable inside {...}
// 2. Global scoped variable - When you try to declare a variable outside of the {...}


// let lang1 = "TS" // Global scope variable
// {
//     let lang = "JS" // Local scoped variable
//     console.log(lang);
//     console.log(lang1);   
// }
// console.log(lang1);

let lang1 = "TS" // Global scope variable
{
    let lang1 = "JS" // Local scoped variable  
    console.log(lang1);
    
}
console.log(lang1) // TS - here print the TypeScript

// var

// 1. scope - functional or global
// 2. Whenever you declare a variable using "var" keyword it 
// can be redeclared and can also re-initialised.
// 3. Hoisting: We can access the variable before it's declaration as well.
// 4. It is not mandatory to assign the variable at the time of declaration

//console.log(num1);

var num2

num2 = 90

var num1 = 10

num1 = 89 // Re-initialisation

var num1 = 90
var num1 = 345345
var num1 = 345345345350000 // Redeclaration

console.log(num1); // here prints last available over there because all the other will get over ridden


// var name1 = "Java"
// {
//     var name1 = "Python" // by using var keyword there is no error because this does not considered as local scoped variable this will still be considered as global scoped variable itself
// }

// console.log(name1) // here prints the Python

// var name1 = "Java"
function name2(){
    var name1 = "Python" // Local scoped
    return 0.9
}

// console.log(name1) // here prints the Java only

// var name1 = "Java"
// function name2(){
//     var name1 = "Python" // Local scoped
//     return name1
// }

// console.log(name1)

// let

// 1. Scope - Block level {...} scope or global scope
// 2. Whenever you declare a variable using "let" keyword it 
// cannot be redeclared but can be re-initialised.
// 3. Hoisting: We cannot access the variable before it's declaration.
// 4. It is not mandatory to assign the variable at the time of declaration

// // Example for first point
// let abc = "Java" // Global
// {
//     let i = 10 // Local
// }
// //console.log(i);
// console.log(abc);

// // Example for second point
// let abc = "Java" // Global

// abc = "Python" // re-initialised

// {
//     let i = 10 // Local
// }
// console.log(abc);

// // cannot be redeclared but re-initialised
// let a = 10
// // a = 90
// // let a = 90

// // Example for third point - Hoisting

// // console.log(abc);

// let abc = "Java" // Global

// abc = "Python" // re-initialised

// {
//     let i = 10 // Local
// }
// console.log(abc);

// // cannot be redeclared but re-initialised
// let a = 10
// // let a = 90

// // Example for fourth point

// // console.log(abc);

// let abc // Global

// abc = "Python" // re-initialised

// {
//     let i = 10 // Local
// }
// console.log(abc);

// // cannot be redeclared but re-initialised
// let a = 10
// // let a = 90

// const

// 1. Scope - Block level {...}  or global
// 2. Whenever you declare a variable using "const" keyword it 
// cannot be redeclared and cannot be re-initialised.
// 3. Hoisting: We cannot access the variable before it's declaration.
// 4. It is mandatory to assign the variable at the time of declaration

// Example for first point
// console.log(abc);

let abc // Global

abc = "Python" // re-initialised

{
    const i = 10 // Local
}
// console.log(i);

const a = 10 // Global
// let a = 90

// Example for second point - cannot be redeclared and cannot be re-initialised
// const a = 90
// a = 90

// Example for third point - cannot access the variable before it's declaration

// console.log(b);

const b = 90

// Example for fourth point - It is mandatory to assign the variable at the time of declaration

const c = 1000
// const c
// c = 100

// var

// 1. scope - functional or global
// 2. Whenever you declare a variable using "var" keyword it 
// can be redeclared and can also re-initialised.
// 3. Hoisting: We can access the variable before it's declaration as well.
// 4. It is not mandatory to assign the variable at the time of declaration

// let

// 1. Scope - Block level {...} scope or global scope
// 2. Whenever you declare a variable using "let" keyword it 
// cannot be redeclared but can be re-initialised.
// 3. Hoisting: We cannot access the variable before it's declaration.
// 4. It is not mandatory to assign the variable at the time of declaration

// const

// 1. Scope - Block level {...}  or global
// 2. Whenever you declare a variable using "const" keyword it 
// cannot be redeclared and cannot be re-initialised.
// 3. Hoisting: We cannot access the variable before it's declaration.
// 4. It is mandatory to assign the variable at the time of declaration

// Diff between var, let and const