// Loops - Will execute the block {...} of code multiple times until the condition is false.

console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)

console.log("***************************")

// for(let i=1; i<=5; i++){
//     console.log(i)
// }

// for(let i=1; i<=50; i++){
//     console.log(i)
// }

// 1. for loop
    // a. for loop - Traditional for loop - 
    // When we know that how many times we have to run the iteration

    // b. for of loop - Loop through the iterable objects like array, string...
    // c. for in loop - Loops through the properties of an object 
    // - {key:value} - {name: "Rahul"}

// 2. while loop - When we do not know how many times we have to run the iteration
// 3. do while loop - When we want to execute the block of code at least once before we check the condition




// Drop down - countries - for loop - 250 
// Calendar date - while loop
// Search a product - Pagination - Lazy loading - while loop (eCommerce Website)
// Login page - enter username/password - this will check a condition - do while
// 


// let array = [10,20,30,40,50,60]

// for (let a of array){
//     console.log(a)  
// }

// for (let ele of array){
//     console.log(ele)  
// }

let obj = {
    name: 'Rahul',
    age: 30
}

// console.log(obj.name)
// console.log(obj["name"])

// for (let a in obj){
//     // console.log(a)
//     console.log(obj[a])
// }

console.log("**************************");

// 1. for loop 
// Syntax:

// let n - declaration
// let m = 90 - Initialization

/*

for(initialization; condition; increment/decrement)
{
   // block of code to be executed
}

Initialization - Initialize the value of the variable to start the iteration: 
Ex:- let i=0
Condition - Condition to check whether the loop should continue or not:
Ex:- i<=5

Increment/Decrement - Increase or decrease the value of the variable to move towards condition
Ex:- i++/i--


*/

for(let i=1; i<=5; i++){ // i=6, 6<=5
    console.log(i) // 1 2 3 4 5
}

console.log("**************************");

// Print 10 to 1

for(let i=10; i>=1; i--) // 10>=1               // i<=10, i<=1, i>=1 
{
    // console.log(i) // 10 9........1.........infinite means if we give condition like this i<=10, i<=1 - this will not get anything
    console.log(i) // 10 9 8 7 6 5 4 3 2 1
}

console.log("**************************");

// While, do while and break, continue

// break - To exit the loop when a certain condition is met
// continue - To skip the current iteration and move to the next iteration

// Example for break keyword: Print 10 to 1

for(let i=10; i>=1; i--) // 10>=1                
{ 
    console.log(i) // 10 9 8 7 6 5 - it has printed till 5 and then broken the loop by using the break keyword
    if(i==5){
        break
    }
}

console.log("**************************");

// Example for continue statement: Print 10 to 1

for(let i=10; i>=1; i--) // 10>=1                
{ 
    if(i==5){
        continue
    }
    console.log(i) // 10 9 8 7 6 4 3 2 1 - it continues till 1 but you do not see 5 had been printed by using the continue statement
}

console.log("*****************************");

// 2. while loop
// Syntax:

/*

initialization - let j = 1

while(condition){ // 0 < 3 
  // code to be executed
  increment/decrement - j++/j--
}

*/
// 3 - 
// attempt = 3 - this will not be possible because first attempt itself the condition becomes false i.e., 0 == 3 
// attempt < 3 - this will be possible because the 3 conditions (0 < 3, 1 < 3, 2 < 3) becomes true and last condition (3 < 3) becomes false then it will whatever the value that you have to print it will be printed over there.
// attempt >= 3 - this will not be possible because first attempt itself the condition becomes false i.e., 0 >= 3
// attempt > 3 - this will not be possible because first attempt itself the condition becomes false i.e., 0 > 3
// attempt >= 0 - this will also not be possible because it becomes infinite loop where it will there will not be any scenario where the condition becomes false i.e., 0 >= 0 , 1 >= 0, 2 >= 0, 3 >= 0, 4 >= 0, 5 >= 0, ..... infinite loop


// let attempt = 0

// while(attempt < 3){
//     // console.log(`Attempt = ${attempt+1}`); --> this is perfect
//     console.log("Attempt = "+ (attempt+1));
//     attempt++
// }

// console.log("Your account has been locked");

let attempt = 1 

while(attempt <= 3){
    console.log("Attempt = "+ (attempt));
    attempt++
}

console.log("Your account has been locked");

// while(attempt >= 3){ // --> this is wrong condition so here it will never print anything because the condition itself becomes false and it simply come out of the loop printed that have "Your account has been locked"
//     console.log("Attempt = "+ (attempt));
//     attempt++
// }

// console.log("Your account has been locked");

console.log("*****************************");


// 3. do while loop

// Syntax:
/*

initialization - let k = 1

do{
    // code to be executed
}while(condition);

*/

let attempts = 1

do{
    console.log("Attempt = "+ (attempts));
    attempts++  
}while(attempts <= 3); // this is correct condition


// let attempts = 2

// do{
//     console.log("Attempt = "+ (attempts));
//     attempts++ // 2, 3, 4, ...... infinite loop
    // break - we have to use break as well depending on the condition you are trying to achieve
    
// }while(attempts >= 3); // this is wrong condition so here it becomes an infinite loop because the condition will never fail means always true i.e., 2>=3, 3>=3, 4>=3, ..... infinite loop


// Nested for loop - loop inside another loop i.e., dropdown inside another dropdown scenario
for(let i=1; i<=3; i++){
    for(let j=1; j<=3; j++){
        console.log(i+" "+j);
    }  
}









