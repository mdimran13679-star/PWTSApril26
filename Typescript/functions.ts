// Functions - It is a set of instruction that performs a specific task.

function login(email:string, password:string){
    // fill the username
    // fill the password
    // click on the login button
}



// 100 - login(email, password)

// 100 test cases - 300 lines of code - 195 

// Duplication - Solve the problem of duplication
// Maintenance - 100 Test cases to fix the issue - 99 steps
// Reusability - We can reuse the code whenever we want


// 1. Named function - Function declaration - If you want to reuse the function multiple time
// 2. Anonymous function - Function expression
// 3. Arrow function - ES6(2015) - Lambda function
// 4. Constructor function - Class


// 1. Named function - Function declaration - A function which will be declared 
// along with the name is known as function declaration.

// Syntax:
/*
function functionName(parameters) // defining the function
{
    // block of code to be executed
    return
}

functionName(arguments) // Calling the function


TS:

function functionName(parameters:datatype): returnType(Optional) // defining the function
{
    // block of code to be executed
    return
    // void - no return type
}


*/

// return - parameter

// 1. Non-parameterised and non-returning function

function greet(){ // define the function
    console.log("Hello, Welcome to TypeScript")
}

greet() // call the function

// function greet():void{
//     console.log("Hello, Welcome to TypeScript")
// }

// greet()

// 2. Non-parameterised and returning function

function greetings()
{
    return "Welcome to TypeScript" // return keyword should be the last statement of the function
}

let result = greetings() // we have to store functionName at someplace i.e., any variable like result or null or undefined etc.
console.log(result);

// console.log(greetings()); // this is another way to return the value but we should not use this type. 

// function greetings()
// {
//     console.log("Test"); // This will be executed i.e., printed before return keyword
//     return "Welcome to TypeScript" // return keyword should be the last statement of the function
//     console.log("Test"); // This will not be executed i.e., not printed after return keyword
       
// }

// greetings()

function print(){
    // greet() + " PW"
    // console.log(greet() + " PW");
    console.log(result + " PW"); // stored place variable i.e., result can be utilize multiple places by returning value
}

print()

// 3. Parameterised and non-returning function


function add(a:number, b:number){
    console.log(a+b)
}

add(10,30) 
add(50,50)
add(90,34545) // you can utilize at multiple places with multiple values

// function add(a, b){ // here you have not given any kind of datatype so it can accept any type of value it is not throwing as warning as well
//     console.log(a+b)
// }

// add("10","30")
// add("10",null)

// 4. Parameterised and returning function

function addition(a:number, b:number):number{ // a, b - parameters, :number - optional means if we did not provide also it will consider in JS & TS
    return a+b
}


let sum = addition(50,50) // 50, 50 - arguments
console.log(sum)

console.log(addition(1000,30000))

let sum1 = addition(sum,200)
console.log(sum1)
console.log("Line # 102: "+sum1)

// What is parameter and argument?
// Parameter - It is a variable in the declaration of function. 
// It is used to receive the value when the function is called. 
// It is a placeholder for the value that will be passed to the 
// function when it is called. It is used to define the function and it is used to receive ...

// Argument - It is a value that is passed to the function when it is called.
// It is used to call the function and it is used to pass the value to the 
// function when it is called. It is a value that is passed to the function
// when it is called. It is used to call the function and it is used to pass 
// the value to the function when it is called. 


// let i = 10 // Normal expression
// let i = Function


// 2. Anonymous function - Function Expression - A function which will not have any name.
// A function which is declared without any name that function will be stored inside a variable
// The variable where we stored the function becomes the name of the function


// Call back function - A function which will be utilised as a parameter of another function
// is known as call back function.

/*
function adds(fun:Function){ // fun - variable you have given here that is name of the function
    fun()

}

adds(function aa(){ // aa - even if you try to add the name over here there will be no use of this particular name you will be never be able to call this name outside of this as a parameter
    console.log("This is a call back function"); 
})

// adds(function(){
//     console.log("This is a call back function"); 
// })

*/


// Syntax:
/*

let functionName = function(param:datatype):returntype{ // functionName defined as a variable that becomes the name of the function
   // code to be executed
   return
}

functionName(argument) // whenever you have to call the function you will be calling with the variable name over here


*/

let message = function(name:string, age:number){
    console.log(`Your name is ${name} and age is ${age}`);  
}

message("Rahul", 25)
message("John", 35) // different input for the same field


// 3. Arrow Function - Function Expression (=>) - Lambda Function - ES 6 - 2015

// 1. This is also a part of anonymous function and will not have any name
// 2. This function will be declared by using (=>) arrow symbol after the paranthesis
// 3. Arrow function use to shorten the number of lines of code
// 4. If there is only one line of the code inside the function then we can skip the curly
// braces inside the arrow function.

// Syntax:

/*

let variable = (param:datatype)=>{
  // code 
}

variable()

*/

// let message1 = (name:string, age:number)=>{ // => - arrow symbol for arrow function and here no need to write function also
//     console.log(`Your name is ${name} and age is ${age}`);  
// }

let message1 = 
(name:string, age:number)=> console.log(`Your name is ${name} and age is ${age}`) // when you have given arrow symbol you can also remove the curly braces as well if you have a single line of code. If you have multiple lines then it becomes again mandatory to provide it over there i.e., use curly braces if multiple lines of code


message1("Joe",28)


// Default parameter and Optional parameter


function sum2(a:number=100, b:number=50){ 
    console.log(a+b); 
}

// function sum2(a:number, b:number){
//     console.log(a+b); 
// }

// function sum2(a:number, b:number=50){ // b is default parameter
//     console.log(a+b); 
// }

sum2()
// sum2(40,67)
// sum2(10)
sum2(10,49)

// Default Parameter - A parameter which has a default value

// Method overloading is a process where you can declare the same method name with different parameter


// Optional Parameter (p?) - A parameter which may or may not be provided with the value during
// the function call

function display(name: string, age?:number){ // ? means optional - it is not needed you to provide the value
    console.log(name, age); 
}

display("Priya") // It is not needed to provide at the time of calling because ? means optional
display("Raj", 20)


// Assignment - Complete the "display" function by writing the logic to print only
// name if age parameter has not given any value and print both name and age 
// if age value has also been given at the time of calling the function.





