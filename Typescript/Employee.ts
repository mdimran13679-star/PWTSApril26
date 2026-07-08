// Class - Blueprint to create an object

// ES 6 - ECMA SCRIPT 6 - 2015

// Class is a collection of Properties (variable) and method (Function)

// ClassName should be similar to the file name (Employee.ts). Class name should be 
// Employee and it should always start with capital letter.

// Whenever you create a variable in class, we do not need to mention let/const keyword
// without () - variable in  a class // without () - paranthesis is variable inside a class
// Whenever you create a function in class, we do not need to mention "function" keyword
// with () - method // with () - paranthesis is method inside the class

// Access Modifier - It is a permission to access variables and methods
// public - default - Can be accessible anywhere inside the project
// Private - Can only be accessible inside the same class
// Protected - Can be accessible only by the child classes
// readonly - Cannot be modified

// static - Doesn't belongs to the Object. It cannot be accessible by an object of a class.
// You can access static variable or method by using the Classname

// Ex: ClassName.key1, ClassName.info()

// Syntax to create a class

// export - import

/*

export class ClassName{

// Properties - variables - Locator (PW)

    key: datatype = value
    key1 : datatype
    private key2 : datatype
    static key3 : datatype = Value
    readonly key4 : datatype

    constructor - It is a special method which is use to initialize the properties of a class.
    It automatically called when an object of the class is created. It can take a parameter
    to initialize the properties of a class.

    constructor(key:datatype, key1:datatype...., key2, key4){
        key = key // key = 10
        key1 = key1 // key1 = 15
    
    }


const obj = new ClassName(10, 15, 20, 40)






}



*/

export class Employee{

    empId: number 
    empName: string
    empAge : number
    private empSalary : number
    static companyName = "ABC"

    constructor(id:number, name:string, age:number, salary:number){
        // this - it is a keyword which refers to the current class object
       this.empId = id  // emp.empId = 101
       this.empName = name
       this.empAge = age
       this.empSalary  = salary
    }

    employeeInformation(){
        console.log(`Employee Id is: ${this.empId} and Employee Name is ${this.empName}
            Employee Age is : ${this.empAge}
            Employee Salary is ${this.empSalary}
            Employee CompanyName is ${Employee.companyName}`);
    }

    static displayCompany(){
        console.log(Employee.companyName);
    }


}




const obj = new Employee(101, "Rahul", 30, 100000)
console.log(obj.empId);
obj.employeeInformation()
Employee.displayCompany()

const emp = new Employee(102, "John", 20, 200000)
console.log(emp.empId);
emp.employeeInformation()
Employee.displayCompany()

// Object - collection of key-value pair inside the {} (curly braces)

console.log(obj);

// export {}; // I only written this export {} due to error

// class name has to be same as the file name or your file name has to be same as the class name
// whenever you try to create a function, whenever you try to create a function outside of a class is known as a function. Whenever you try to create the same function inside the class is known as method.
// The only difference is that when you define the same function inside a class is known as method, when you define the function outside of a class is known as normal function.
// import is helping us in terms of calling certain libraries, classes, methods, properties from certain libraries, and there is another keyword known as export.
// export you will be using for a class. Wherever you try to create a class, you will be using a keyword known as export.

// In the next session, we'll also understand how do we create a different ways of an object. 
// Which will help us in terms of getting the data from JSON when we go for a how do we get the data from JSON, how do we do a data driven testing using a JSON file? 


// Inheritance  - Acquiring the properties and methods from the parent
// extend - help us in performing inheritance
// super() - Calls the parent class constructor

class Manager extends Employee{

    bonus: number
    
    constructor(id:number, name:string, age:number, salary:number, bonus:number){
        super(id, name, age, salary)
        this.bonus = bonus
    }

    displayManagerInfo(){
        this.employeeInformation()
        console.log("Bonus is : ", this.bonus);
        
    }

}


const mgr = new Manager(101, "Joe", 27, 130000, 20000)
mgr.displayManagerInfo()
console.log(mgr.empId);








// inheritance means acquiring the properties and methods from the parent class i.e., Employee class
// constructor is your function which will initialise the value of the variable.
// Whenever you try to provide any value, the child class constructor will initialise also the parent class constructor as well
// super keyword - which will help us in terms of getting the value from the parent class.
// * Important: ctrl (Control) and click on super - this will take you directly to the employee class constructor
// By using the super method, it Calls the parent class constructor to the child class constructor
// extends keyword help us in performing inheritance concept
// super() - super method calls the parent class constructor