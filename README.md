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

t he main difference is that Promises use .then() and .catch(),
whereas Async/Await uses async and await keywords.
Async/Await makes the code cleaner and more readable, internali it is based on promises." 





