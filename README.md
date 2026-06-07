Phase 1: JavaScript Basics
Variables (var, let, const)
Data Types
Operators
null vs undefined
== vs ===
Conditions (if, else, switch)
Loops (for, while)
Functions

⬇️

Phase 2: Scope & Function Concepts
Scope (Global, Function, Block)
Hoisting
Temporal Dead Zone (TDZ)
Arrow Functions
Callback Functions
Higher Order Functions
Closure

⬇️

Phase 3: Arrays & Objects
Arrays
forEach()
map()
filter()
reduce()
Objects
Destructuring
Spread Operator
Rest Operator

⬇️

Phase 4: DOM
What is DOM?
DOM Selectors
DOM Manipulation
Event Handling
Event Bubbling
Event Delegation

⬇️

Phase 5: Async JavaScript
Synchronous vs Asynchronous
Callback
Callback Hell
Promise
Promise Methods
Async/Await
Fetch API
Event Loop

⬇️

Phase 6: OOP & Advanced JS
this Keyword
Constructor Function
Classes
Inheritance
Call
Apply
Bind
Prototype
Prototype Inheritance



Sabse Important Order (Agar Time Kam Hai)

var, let, const
Data Types
Scope
Hoisting
Functions
Arrow Function
Closure
Arrays (map, filter, reduce)
Objects
DOM
Callback
Promise
Async/Await
Event Loop
this
Call, Apply, Bind
Prototype


######################### INTERVIEW QUESTIONS ####################################

Q1) var, let, aur const me Difference

Var, let, and const are used to declare variables in JavaScript.
var can be redeclared and reassigned.
let can be reassigned but cannot be redeclared in the same scope. 
const cannot be reassigned or redeclared after initialization.
Nowadays, let and const are preferred because they provide block scope and better variable control."


q2) Closure in JS ?

Closure ek aisa function hota hai jo apne outer function ke variables ko yaad rakhta hai 
aur use access kar sakta hai, even after outer function execute ho chuka ho

ex}
function outer (){
 let message = "saish shaikh"
 function inner () {
  console.log(message)
 }
 return inner ;
}

let closure = outer 
closure ();


Q3) Difference Between Promise and Async/Await

the main difference is that Promises use .then() and .catch(),
whereas Async/Await uses async and await keywords.
Async/Await makes the code cleaner and more readable, internali it is based on promises." 
async → Makes a function asynchronous and allows await.
await → Waits for the Promise result before moving to the next line.

ex)  promises ............


let promise = new Promise((resolve, reject) => {

    let pass = false;
    if (pass) {
        resolve("You pass");
    } else {
        reject("You fail");
    }
});

promise.then(result => {
    console.log(result);
});

promise.catch(error => {
    console.log(error);
});

ex ) assyn await ......................

function GetUser() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Saish Shaikh");
        }, 4000);
    });
}

async function NewUser() {
    let user = await GetUser();
    console.log(user);
}

NewUser();



Q4)  Hoisting in js 

Hoisting means JavaScript moves variable and function declarations to the top before running the code."

ex) hoisting ..................

console.log(a);  (undefined)
var a = 10;


Q5)  What is this in JavaScript?  
this refers to the object that called the function.

ex ) This .............
let student = {
    name: "saish",
    age: 23,
    city: "kalyan",
    math: 89,
    eng: 55,
    hindi: 66,
    marathi: 44,
    History: 55,

    AvgMarks() {
        let avg = (this.math + this.hindi + this.eng) / 3;
        console.log(avg);
    }
};

student.AvgMarks();


Q6) What is the difference between map(), filter(), and reduce()?"


Q: What is map()?

"map() is used to transform each element of an array and returns a new array."

Q: What is filter()?

"filter() is used to select elements based on a condition and returns a new array."

Q: What is reduce()?

"reduce() is used to combine all elements of an array into a single value."

"map() modifies data, filter() selects data, and reduce() combines data into a single value."



