// Framework - It is a design principle. Set of guidelines.

// POM - Page Object Model - It is a design pattern.

// It is a class which represents the page of the application. It contains the locators
// and methods of the specific page.

// Page Object Model is a design pattern used in software testing to represent a web page
// as an object. It is a way to organise and manage the interaction with a web page by
// creating the properties (variables - locators) and methods (Actions - loginIntoApplication(), launchURL(),...)
// of that particular page.


// This approach helps in reducing the code duplication, improve the test readability
// and maintainability by encapsulating the page specific properties and methods inside 
// a particular class.

// LoginPage.ts - Locators and methods related to login page ONLY


// POM framework from scratch:

// There are different layers that we have to create:

// 1. PAGE LAYER - Will create a package or folder (pages) - 
// Different class you will be creating it over here - 
// LoginPage.ts, DashboardPage.ts,... this class will consists of locators 
// and methods related to specific class.
// email, password, loginBtn, loginIntoApplication(), invalidLogin() - LoginPage.ts


// 2. TEST LAYER - Will create a package or folder (tests) - Pure test case and assertions.
// We will call the locators and methods from the page class to the test files.
// LoginPageTest.spec.ts, DashboardPageTest.spec.ts, ....


// 3. TEST DATA LAYER - JSON/Excel/.env - TestData.json, TestData.xlsx

// 4. CONFIGURATION LAYER - playwright.config.ts - Global Configuration file

// 5. UTILS LAYER - We will create a utils folder. Custom function - screenshot(), scrolldown(),
// getDataFromExcel(),...., API method - to get the authorization token

// 6. REPORT LAYER - HTML/Allure - We do not have to create it separately.

// 0. Data driven testing
// 1. Hooks
// 2. Annotation
// 3. grouping
// 4. allure/Jenkins
// 5. MCP - Playwright Agent

/*

// Page Object Model framework, which is most popular. 
// 95% of the organisation are using Playwright as a framework along with Page Object Model design pattern.
// There are some standards that we have to follow. That is known as framework. 
// Along with the playwright, most of the organisation follows page object model, design pattern, 95% of the organization.
// Five percent of the organisation still using BDD Cucumber framework.
// Whenever you create a class for that, you can create an object.
// one single class will be considered as, or will represent your one single page inside the application.

// utils layer will have a custom function which is also known as reusable function

// why do we not use BDD Cucumber framework?
// BDD Cucumber - Feature files
// Even when you go for the BDD Cucumber framework, you have to create all these steps, all these layers.
// You have to create a page layer, test layer, test data layer, configuration layer, utils layer, reporting layer
// In terms of a BDD Cucumber framework, you'll also be taking one more burden over here known as feature files.
// step definition which will call all these feature files steps, whatever you have written, given, when, then all those things will get.
// called inside your test layer, which is step definition files
// Why do we not use BDD Cucumber framework inside Playwright?
// Playwright is a framework. BDD Cucumber is also a framework. So when you try to use both of the framework at the same time, one will complain saying either you use a BDD or you use a playwright, or else you will lose the essence of 1 particular framework.
// That means it will complain us saying that whenever you are trying to use two different frameworks, and that is the reason we do not use JUnit and TestNG at the same time. 
// Why? Because both of them are framework. And both of them complain, both of them will complain saying you either use my method Or you use test NG method. Same goes over here as well.
// When you combine BDD with Playwright, Playwright will complain saying that either you use Playwright specific method or you use BDD Cucumber framework method. You cannot use both of them at the same time.
// Same goes for BDD. BDD will complain either you use playwright specific method or you use my method.
// And the problem happens is whenever you use playwright using a BDD, you will lose all the essence of playwright.
// Auto waiting will not be applicable, Generation of a report automatically will not be applicable,
// generation of screenshot, video recording, simple things that whatever you have given inside the configuration file will not be applicable whenever you try to use Playwright along with BDD Cucumber framework.
// That is the main reason why do we not use playwright along with BDD Cucumber framework because both of them are framework and both of them will not work together.

*/