// Object is a collection of key:value pair inside {}


const emp = 
{
  empId: 101,
  empName: 'Rahul',
  empAge: 30,
  empSalary: 100000
}

console.log(emp.empId);


console.log(emp["empName"]);

const dummy = 
{
    url: "https://google.com",
    email : "sddsf",
    password : "sdfs",
    invalidPassword: "Test"
}

console.log(dummy.url);

// import data from '../testdata/testdata.json'

// console.log(data)

// let data1 = 
// {
//   url: 'https://rahulshettyacademy.com/client',
//   email: 'testnHNk@gmail.com',
//   password: 'Testing@1234',
//   invalidPassword: 'Test',
//   errorMessage: 'Incorrect email or password.'
// }

// console.log(data1.url);

// let i =[10,20,30]

import data from '../testdata/product.json'

console.log(data);

let data1 = 
[
  {
    url: 'https://rahulshettyacademy.com/client',
    email: 'testnHNk@gmail.com',
    password: 'Testing@1234',
    productName: 'ADIDAS ORIGINAL',
    successMessage: 'Product Added To Cart'
  },
  {
    url: 'https://rahulshettyacademy.com/client',
    email: 'testnHNk@gmail.com',
    password: 'Testing@1234',
    productName: 'ZARA COAT 3',
    successMessage: 'Product Added To Cart'
  },
  {
    url: 'https://rahulshettyacademy.com/client',
    email: 'testnHNk@gmail.com',
    password: 'Testing@1234',
    productName: 'iphone 13 pro',
    successMessage: 'Product Added To Cart'
  }
]


// console.log(data1[0].url);

for (let product of data1){
    console.log(product.productName);
}








// What is data-driven testing? - Testing the same functionality with different set of data.
// whatever the value that it has given, it will return as the value in the form of array. 
// And inside that array, all the values will be, all the elements of the array will be in the form of array over here, object over here. This is 1 object. This is another object.
// you can get the data from an array by using index as well because array is a ordered collection.
//  whenever you try to work as a part of data-driven testing or as a part of getting the data from multiple values over here, we do not go by using index over here.
// We try to use looping concept, so that looping concept will go through each and every object and get us the value, whichever value that you need it from here.
