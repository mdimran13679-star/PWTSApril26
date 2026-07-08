// Arrays - []

let arr = [10]
console.log(typeof arr)

/*

1. Array is a collection of data, which can have different data types
2. Array is an ordered collection. Means we can also access the element from the 
array by using the position(index)
3. Index starts with 0 in an array // 0 is known as first position element
4. Array is dynamic in size. 

*/

let array = [10, 20, "Java", true, null, undefined, 34.90]

// [0:10, 1:20, 2:"Java", ....] // 0 - key, 10 - value, ... => key value pair - key becomes Index and value becomes the value of that particular index
console.log(array)

// Syntax:
// arrayName[index] - It will return the value at the specified index

console.log(array[0]); // position and index are same i.e., first position means 0th index, second position means 1st index, ...
console.log(array[5]);

// Declaration of an array:

// 1. Using Array Literal - []
// 2. Using Array Constructor - new Array()


// 1. Using Array Literal - []

// Syntax:
// let arrayName:datatype[] = [value1, value2, ....]

let arr1:number[] = [10,20,30,40,50]

let arr2:any[] = [10, "TS", "true", 30] // let arr2:(number|string|boolean|null|undefined)[] = [10, "TS", true, null, undefined, ...] - here instead of all datatypes we use any

let Arr1 = [10, 20, "Java", true, null, undefined, 34.90]
console.log(arr1)
console.log(Arr1)

console.log("***********************************");

// 2. Using Array Constructor - new Array() // new - keyword

// Syntax:
// let arrayName = new Array<datatype>(value1,value2,value3) // <> - angular bracket

let arr4 = new Array<any>(10, "Java", 45.9) // array - we cannot say lower case array over here that will not be acceptable. This is a predefined keywords as an array constructor available inside in JS & TS
// console.log(arr4[1]);
console.log(arr4)

console.log("***********************************");

// using the loop to iterate through the element of an array

// length - It return the total number of element available inside an array // length is a property

let arr6 = [10, 20, 30, 40, 50, "Pink", "orange", "TS"]

console.log(arr6.length) // 8 - [0-7] // It returns the total number of elements that are available inside an array i.e., it displays 8

// 1. Traditional for loop

for(let i=0; i<arr6.length; i++){ // Inside an array Index starts with 0 that's why i=0 by referencing the 0 as an index
    console.log(arr6[i])   
}

console.log("***********************************");


// 2. for of loop - directly interact with the element

// Syntax:

let i; // variable declaration
let j = 10 // variable initialisation

/*

for(let element of arrayName) // for - reserved keyword, of - reserved keyword // It does not interact with the element, it directly gets the value from the array
{
  // body
}


*/

 let arr7 = [10, 20, 30, 40, 50, "Pink", "orange", "TS"]
//  let arr7 = [10, 20, 30, 40, 50, "Pink", "orange", "TS", 10, 20, 30]


for(let ele of arr7){ // you can give any kind of name for an element, this is the variable declaration so you can provide any name over here it should not be like element or ele or any other things. you can provide any kind of value. ele will directly get the value i.e., this ele will get first value first time, second value second time, ... 
    console.log(ele)
}

// for(let i in arr7){ // for in loop will always work on the index bases
//     console.log(arr7[i])
// }

console.log("***********************************");

console.log(arr7[arr7.length-1]); // arr7.length-1 will give you the last element available inside an array
console.log(arr7[arr7.length]); // It will gives undefined because arr7.length becomes the 8th element or 9th element which is not available inside the array so this will simply give you undefined

console.log("**************Method of an array****************");

let arr8 = [10, 20, 30, "TS", "pink"]

// 1. push(ele1, ele2, ele3,.....) - It adds the elements to the end of an array

// Syntax:
// arrayName.push(ele1, ele2)

console.log(arr8)
arr8.push(40, "JS")
console.log(arr8)

console.log("***********************************");

// 2. pop() - It removes the last element from the array and it return

// Syntax:
// arrayName.pop()

let lastElement = arr8.pop()
console.log(arr8);
console.log(lastElement)

console.log("***********************************");

// 1. What is difference between push() and unshift() in an array?
// 2. What is difference between pop() and shift() in an array?

// 3. unshift(ele1, ele2,....) - It adds the element at the beginning of an array

// Syntax:
// arrayName.unshift(ele1, ele2)

arr8.unshift("Java", 50)
console.log(arr8);

console.log("***********************************");

// 4. shift() - It removes the first element from an array

// Syntax:
// arrayName.shift()

arr8.shift()
console.log(arr8);

console.log("***********************************");

// splice(), slice(), indexOf(), lastIndexOf(), includes(), join()


// 3. What is difference between slice() and splice() method in an array?


// 4. splice(startIndex, deleteCount, ele1, ele2, ele3,....) - Add/Remove the element
// from the array at specified index

// startIndex - The position where you want to add/delete the element
// deleteCount - The number of element to be deleted from array
// ele1, ele2, ele3,.... - The element that you want to add at the startIndex

// Syntax:
// arrayName.splice(startIndex, deleteCount, ele1, ele2, ele3,....)

let arr9 = [10, 20, 30, 40, "TS", 50, 60]
console.log(arr9);

arr9.splice(2, 0, "Java", "JS", 100, 200, 300) // Here printed arr9 is [10, 20, "Java", "JS", 100, 200, 300, 30, 40, "TS", 50, 60]
// arr9.splice(2, 3, "Java", "JS", 100, 200, 300) // 2 is startIndex i.e., 30 from arr9, 3 is deleteCount - Here it will delete 3 elements from startIndex (30) i.e., 30, 40, "TS" then the output will be [10, 20, "Java", "JS", 100, 200, 300, 50, 60]
console.log(arr9);

console.log("***********************************");

// 5. slice(startIndex?, endIndex?) - Returns the portion of an element from
// startIndex to endIndex-1

// startIndex - The position where you want the start the slice
// endIndex(Exclusive) - The position where you want the end the slice

// Syntax:
// arrayName.slice(startIndex?, endIndex?)

console.log(arr9.slice(2,8)) // from index 2 to index 7 i.e., it will not take endIndex means 8th index exclusive in nature so this will take endIndex-1 means 7th index

console.log("***********************************");

// 6. indexOf(element, startIndex?) - Returns the index of the first occurances of an element
// in an array, or -1 if not found

// Syntax:
// arrayName.indexOf(element, startIndex?)

let arr10 = [10, 20, 30, 40, 50, 60, 10, 70, 10, 20]

let index = arr10.indexOf(10) // 0
console.log(index)
console.log(arr10.indexOf(10, 9)) // element - 10, startIndex - 9 (9th position) - after 9th postion there is no element available as 10 so it returns as -1
// console.log(arr9.indexOf(10, 1)) // -1
// console.log(arr10.indexOf(10, 1)) // 6

// Assignment - 1:
// To find out all the index of 10 available inside arr10 - 0,6,8

console.log("***********************************");

// 7. lastIndexOf(element, startIndex?) - Returns the index of the last occurances 
// of an element inside an array

// Syntax:
// arrayName.lastIndexOf(element, startIndex?)

console.log(arr10.lastIndexOf(10)) // 8
console.log(arr10.lastIndexOf(10, 6)) // 6
console.log(arr10.lastIndexOf(10, 5)) // 0

console.log("***********************************");

// 8. includes(element, startIndex?) - Returns true if the element is found in the array
// otherwise false

// Syntax:
// arrayName.includes(element, startIndex?)

// console.log(arr10.includes(100)) // false
console.log(arr10.includes(70)) // true
// console.log(arr10.includes(20, 3)); // true
// console.log(arr10.includes(30, 3)); // false
console.log(arr10.includes(30, 2)); // true

console.log("***********************************");

// 9. join(separator?) - Joins all the elements of an array and return as a string

// Syntax:
// arrayName.join(separator?)

let arr11 = [20,11,2026] // dd-mm-yyyy
let joinResult = arr11.join("-")
console.log(joinResult);

console.log("***********************************");

// 10. toString() - Convert the array into string

// Syntax:
// arrayName.toString()

console.log(arr11.toString());


// string 
// Objects - Class - Framework generation
// GitHub
// Playwright 

















