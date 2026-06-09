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
var a = 10;    ( idhr var.... he isliye hoisting  if ..let.. const.. hota to TDZ )


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

  ex ) Map ()...........
  let arr = [3,4,5,6];
  let square = arr.map(n=>n*n)
  console.log(square)

  
Q: What is filter()?

"filter() is used to select elements based on a condition and returns a new array."
ex) filter () ............
let arr = [1,2,3,4,5,6,7,8,9,10];
let filter = arr.filter(n => n % 2 === 0);
console.log(filter);

Q: What is reduce()?
"reduce() is used to combine all elements of an array into a single value."

ex ) reduce ()..........

let nums = [1, 2, 3, 4];
 let sum = nums.reduce((acc, curr) => acc + curr, 0);
 console.log(sum); // 10

"map() modifies data, filter() selects data, and reduce() combines data into a single value."


Q7) wht is the event loop in js ?
JavaScript is single-threaded, so it can execute only one task at a time.
The Event Loop is the mechanism that allows JavaScript to handle asynchronous operations without blocking the main thread.

ex) Event Loop .............
console.log("a");

setTimeout(() => {
  console.log("b");
}, 2000);

console.log("c");

//output
a
c
b

Q8) What are the key features introduced in ES6?

S6 introduced features like let and const, Arrow Functions, Template Literals, Destructuring, Spread/Rest Operators, Classes, Modules, and Promises. These features made JavaScript more modern and easier to write

Q9) Wht is difference Between == And === 

== compares values after type conversion,       == → "value check karta hai"

=== compares both value and type without type conversion.  === → "value + type dono check karta hai"
ex) .........
console.log(5 == "5");   // true
console.log(5 === "5");  // false

Q10) Wht is a callback Funct and callback hell ? 

 Callback Function
A callback function is a function that is passed as an argument to another function and is executed later.
ex ) Callback Func .............

function login(callback) {
  console.log("Login Successful");
  callback();
}

function getProfile(callback) {
  console.log("Profile Loaded");
  callback();
}

function getOrders() {
  console.log("Orders Loaded");
}

login(() => {
  getProfile(() => {
    getOrders();
  });
});

ex ) 
function Login(callback) {
    let username = prompt("Enter Your Username");
    let password = prompt("Enter Your Password");

    console.log(username + " User Login Successfully");

    callback(username);  .........   bcz dashboard me pass krn he username
}

function Dashboard(username, callback) {
    console.log("Welcome to the Dashboard " + username);

    callback();
}

function Logout() {
    console.log("You have been logged out");
}

Login((username) => {
    Dashboard(username, () => {
        Logout();
    });
});

// Callback Hell  = Callback inside callback inside callback


Q11)   What is Temporal Dead Zone (TDZ) 
   "TDZ is the area before a let or const declaration where the variable cannot be accessed." 
  ex ) TDZ.....
   console.log(a); // ReferenceError
    let a = 10;


 Q12)  wht is event bubling and event capturing 
       //Event Bubbling
     Event Bubbling is a phase where the event moves from the child element to the parent element

        Ex)  


        
      // event capturing 
      Event Capturing is a phase where the event moves from the parent element to the child element

Q13) wht is Event Delegation
    Event Delegation is a technique where we attach one event listener to a parent element to handle events of its child elements using event bubbling

Q14) wht is the diff btwn null and undefined 
.
null= means variable has empty value (intentionally set).
undefined = means variable declared but value not given

ex) Null and Undefined  .................
let a;
console.log(a); // undefined

let b = null;
console.log(b); // null


Q15 ) wht are arrow function  and how are they different from regular function ? 
   Arrow functions are a shorter way to write functions in JavaScript.
   ex1 ) Arow funct
   
     let sum = (a, b) => {
    return a + b;
    };

   console.log(sum(8, 8));

   ex2) implict Aroow function same code 
   
      let sum = (a, b) => (a + b);
      console.log(sum(8, 8));
   
   Difference:...
   
Regular functions have their own this, but arrow functions do not 
— they take this from their parent scope.
  ex) norml func......
  function sum(a, b) {
    return a + b;
  }

   console.log(sum(8, 8));
   

  Q16) wht is scope in js ? explain lexical scope 
  
    Scope in JavaScript defines the accessibility of variables in different parts of the code.
    
    types = 
    Global Scope → variabl can be used anywhere in code
    Function Scope → variable declare only inside function
    Block Scope → variable declare  only inside { } block 
    
    // Lexical scope means an inner function can use the variables of its outer function



   Q17 ) What is destructuring in js ? 
       Easy way to extract values from arrays or objects
       Object example =
       const user = { name: "Aman", age: 25 };

        const { name, age } = user;

         console.log(name); // Aman

         Arry ex = 
         const nums = [10, 20];

          const [a, b] = nums;

          console.log(a); // 10

   
    Q18)  wht is  Promise.all, Promise.race, Promise.allSettled

        Promise.all waits for all promises to complete. If any one promise fails, the entire result         is rejected.”

        Promise.race gives the first completed result.

        promise.allSettled waits for all promises  and shows both success and failure results.”


     Q19) wht is Truthy and Falsy values

     Falsy values in JavaScript are values that behave like false in conditions, such as 0, empty        string, null, undefined, NaN, and false. Everything else is truthy and behaves like true.”

     Q20 }  wht is diff btw splice vs slice

     ✂️ slice
   👉 Does NOT change original array
    👉 Just takes part of array
 Ex slice} 


   🔥 splice
  👉 Changes original array
   👉 Used to remove or add items
ex splice }  


  Q21 } innerHTML vs innerText vs textContent
       🧱 innerHTML

   👉 Gives text + HTML tags
    👉 Can also add HTML

        👀 innerText

   👉 Shows only visible text
   👉 Ignores hidden text (CSS hidden)

       📦 textContent

   👉 Gives all text (raw text)
   👉 Fast and ignores HTML styling

  Q22} wht is th diff btw call(), apply**(), bind()
      📞 call

  👉 Calls function immediately
  👉 Pass arguments one by one

  🧪 Example
  function greet(city) {
    console.log(this.name + " from " + city);
   }

  greet.call({name: "Aman"}, "Delhi");

  📤 Output
  Aman from Delhi


  📦 apply

👉 Same as call
👉 But arguments are passed in an array

🧪 Example
greet.apply({name: "Aman"}, ["Mumbai"]);
📤 Output
Aman from Mumbai


🔗 bind

👉 Does NOT run immediately
👉 Returns a new function

 ex}
  function greet(city) {
  console.log(this.name + " lives in " + city);
}

const person = {
  name: "Aman"
};

const newGreet = greet.bind(person, "Delhi");

newGreet();

📤 Output
Aman lives in Delhi


Q23} Spread vs Rest operator in JavaScript
Spread expands values, while rest collects multiple values into an array.
 🌟 Spread Operator (...)
 ex}
    let arr = [1, 2];
let newArr = [...arr, 3];

console.log(newArr);

📌 Output
[1, 2, 3]


Rest Operator (...)
ex}
function sum(...nums) {
  console.log(nums);
}

sum(1, 2, 3, 4);
📌 Output
[1, 2, 3, 4]

Q24} Data Types in JavaScript

🧱 Primitive Types (store single values)
String
Number
Boolean
Null
Undefined
Symbol
BigInt
🧩 Non-Primitive Types (reference types)
Object
Array
Function


Q24} wht is diff btw. for…of vs for…in  

  for…of iterates over values, while for…in iterates over keys or indexe
  🔁 for…of → values (arrays, strings)
let arr = [10, 20, 30];

for (let val of arr) {
  console.log(val);
}
📌 Output
10
20
30


🔑 for…in → keys/indexes (objects)
let obj = { a: 1, b: 2 };

for (let key in obj) {
  console.log(key, obj[key]);
}
📌 Output
a 1
b 2


Q25} querySelector vs getElementById
🎯 getElementById

Selects element using only ID (fastest method)

let el = document.getElementById("myId");
console.log(el);

📌 Output (example)
<div id="myId">Hello</div>


🎯 querySelector

Selects using any CSS selector (id, class, tag, etc.)

let el1 = document.querySelector("#myId");
let el2 = document.querySelector(".myClass");

console.log(el1);
console.log(el2);

📌 Output (example)
<div id="myId">Hello</div>
<div class="myClass">Hi</div>


Q26} wht r the map and set in js 

  Map → stores key–value pairs (keys can be any type, ordered)
  Set → stores only unique values (no duplicates allowed)
     
