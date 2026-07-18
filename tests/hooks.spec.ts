// Hooks - A special method which perform a setup and tear down process

// test.beforeAll(){...} - It will be executed before running any of the test cases. - db connection
// test.beforeEach(){...} - It will run before running (executing) each and every test case. - Pre-condition/ Common steps inside each test
// test()
// test.afterEach(){...} - It will run after running each and every test case. - close the browser
// test.afterAll(){...} - It will be executed after execution of all the test cases. - close db connection

import {test} from '@playwright/test'


test.beforeEach(async ()=>{
    console.log("Before Each");
})

test.afterEach(async ()=>{
    console.log("After Each");
})

test.afterAll(async ()=>{
    console.log("After All");
})

test("Test1", async ()=>{
    console.log("Test1")
})

test("Test2", async ()=>{
    console.log("Test2")
})

test("Test3", async ()=>{
    console.log("Test3")
})

test.beforeAll(async ()=>{
    console.log("Before All");
})

/*

// These are special type of methods which perform certain actions like setup and tear down kind of 
// process in terms of test automation scenario to remove as much as possible the duplication inside the test automation.
// There are only four different types of hooks are available inside Playwright, 
// and most of the time you'll be using one single hook.
// And hooks will be applicable on your test function. Wherever you have written test function, only on the test function it will be applicable.
// When you try to create new function on that, you cannot apply. Only on the test function, the hooks will be written as well, or applicable as well.
// before each comes for the setup, after each comes for the tear down. That means closing process. It will run.
// In other tools and technology, Inside after each, we try to write something known as close the browser or quit the browser, 
// close the browser, which we know that playwright is able to automatically handle that. 
// So because of that scenario, you will not be writing after each any time.
// Before each is the one that you will be mostly using inside your every test file.
// Before all, you can also use sometimes, So before running any of the test case, you can connect with the database connection, DB connection.
// You will close it inside the after all, you will close report, you will close log file, and you will close database connection, database connection.
// These hooks are helping us in terms of setting up something which can be executed as a part of precondition or postcondition of the test case.

*/


// groovy - npm install - npm run smokeTest - Allure


// MCP - Model Context Protocol

// AI - Articificial Intelligence
// LLM - Large Language Model

// Playwright MCP
// Playwright Agent 

// Prompt Engineering - 3 Cs - Context, constraint, Clarity

// Token - every 4 chars = 1 Token - Question/Response - 

// Login
// Submit

// npx playwright init-agents --loop=vscode -  To setup the Playwright Agent
// in the project
// npx playwright init-agents --loop=vscode
