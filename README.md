# JavaScript Interview Questions & Coding Practice (2025–2026)

A complete collection of **JavaScript interview questions**, **important JS concepts**, and **basic coding questions** for practice.

This repository includes:
- JavaScript learning **phase-wise roadmap**
- Important **JavaScript interview questions**
- Beginner-friendly **answers**
- Common **JavaScript coding questions**
- Useful for **fresher interviews**

---

# Table of Contents

- [JavaScript Roadmap](#javascript-roadmap)
  - [Phase 1: JavaScript Basics](#phase-1-javascript-basics)
  - [Phase 2: Scope & Function Concepts](#phase-2-scope--function-concepts)
  - [Phase 3: Arrays & Objects](#phase-3-arrays--objects)
  - [Phase 4: DOM](#phase-4-dom)
  - [Phase 5: Async JavaScript](#phase-5-async-javascript)
  - [Phase 6: OOP & Advanced JS](#phase-6-oop--advanced-js)
  - [Most Important Order (If Time Is Less)](#most-important-order-if-time-is-less)

- [Interview Questions](#interview-questions)
  - [Q1) Difference between var, let, and const](#q1-difference-between-var-let-and-const)
  - [Q2) Closure in JavaScript](#q2-closure-in-javascript)
  - [Q3) Difference between Promise and Async/Await](#q3-difference-between-promise-and-asyncawait)
  - [Q4) Hoisting in JavaScript](#q4-hoisting-in-javascript)
  - [Q5) What is this in JavaScript?](#q5-what-is-this-in-javascript)
  - [Q6) Difference between map(), filter(), and reduce()](#q6-difference-between-map-filter-and-reduce)
  - [Q7) What is the Event Loop in JavaScript?](#q7-what-is-the-event-loop-in-javascript)
  - [Q8) What are the key features introduced in ES6?](#q8-what-are-the-key-features-introduced-in-es6)
  - [Q9) Difference between == and ===](#q9-difference-between--and-)
  - [Q10) What is a callback function and callback hell?](#q10-what-is-a-callback-function-and-callback-hell)
  - [Q11) What is Temporal Dead Zone (TDZ)?](#q11-what-is-temporal-dead-zone-tdz)
  - [Q12) Event Bubbling and Event Capturing](#q12-event-bubbling-and-event-capturing)
  - [Q13) What is Event Delegation?](#q13-what-is-event-delegation)
  - [Q14) Difference between null and undefined](#q14-difference-between-null-and-undefined)
  - [Q15) What are Arrow Functions?](#q15-what-are-arrow-functions)
  - [Q16) What is Scope in JavaScript? Explain Lexical Scope](#q16-what-is-scope-in-javascript-explain-lexical-scope)
  - [Q17) What is Destructuring in JavaScript?](#q17-what-is-destructuring-in-javascript)
  - [Q18) Promise.all, Promise.race, Promise.allSettled](#q18-promiseall-promiserace-promiseallsettled)
  - [Q19) Truthy and Falsy Values](#q19-truthy-and-falsy-values)
  - [Q20) Difference between splice() and slice()](#q20-difference-between-splice-and-slice)
  - [Q21) innerHTML vs innerText vs textContent](#q21-innerhtml-vs-innertext-vs-textcontent)
  - [Q22) Difference between call(), apply(), and bind()](#q22-difference-between-call-apply-and-bind)
  - [Q23) Spread vs Rest Operator](#q23-spread-vs-rest-operator)
  - [Q24) Data Types in JavaScript](#q24-data-types-in-javascript)
  - [Q25) Difference between for...of and for...in](#q25-difference-between-forof-and-forin)
  - [Q26) querySelector vs getElementById](#q26-queryselector-vs-getelementbyid)
  - [Q27) What are Map and Set in JavaScript?](#q27-what-are-map-and-set-in-javascript)
  - [Extra Important Concepts](#extra-important-concepts)

- [JavaScript Basic Coding Questions](#javascript-basic-coding-questions)
  - [1) Reverse String](#1-reverse-string)
  - [2) Palindrome](#2-palindrome)
  - [3) Remove Duplicates](#3-remove-duplicates)
  - [4) Character Frequency](#4-character-frequency)
  - [5) Largest Number](#5-largest-number)
  - [6) Second Largest Number](#6-second-largest-number)
  - [7) Descending Order](#7-descending-order)
  - [8) Flatten Array](#8-flatten-array)
  - [9) Most Frequent Element](#9-most-frequent-element)
  - [10) Sum of Array](#10-sum-of-array)
  - [11) Find Missing Number](#11-find-missing-number)
  - [12) Find Duplicate Elements](#12-find-duplicate-elements)
  - [13) Even Numbers](#13-even-numbers)
  - [14) Reverse Array](#14-reverse-array)
  - [15) Factorial](#15-factorial)
  - [16) Count Words](#16-count-words)

---

# JavaScript Roadmap

## Phase 1: JavaScript Basics
- Variables (`var`, `let`, `const`)
- Data Types
- Operators
- `null` vs `undefined`
- `==` vs `===`
- Conditions (`if`, `else`, `switch`)
- Loops (`for`, `while`)
- Functions

⬇️

## Phase 2: Scope & Function Concepts
- Scope (Global, Function, Block)
- Hoisting
- Temporal Dead Zone (TDZ)
- Arrow Functions
- Callback Functions
- Higher Order Functions
- Closure

⬇️

## Phase 3: Arrays & Objects
- Arrays
- `forEach()`
- `map()`
- `filter()`
- `reduce()`
- Objects
- Destructuring
- Spread Operator
- Rest Operator

⬇️

## Phase 4: DOM
- What is DOM?
- DOM Selectors
- DOM Manipulation
- Event Handling
- Event Bubbling
- Event Delegation

⬇️

## Phase 5: Async JavaScript
- Synchronous vs Asynchronous
- Callback
- Callback Hell
- Promise
- Promise Methods
- Async/Await
- Fetch API
- Event Loop

⬇️

## Phase 6: OOP & Advanced JS
- `this` Keyword
- Constructor Function
- Classes
- Inheritance
- `call`
- `apply`
- `bind`
- Prototype
- Prototype Inheritance

---

## Most Important Order (If Time Is Less)

- `var`, `let`, `const`
- Data Types
- Scope
- Hoisting
- Functions
- Arrow Function
- Closure
- Arrays (`map`, `filter`, `reduce`)
- Objects
- DOM
- Callback
- Promise
- Async/Await
- Event Loop
- `this`
- `call`, `apply`, `bind`
- Prototype

---

# Interview Questions

## Q1) Difference between var, let, and const
> `var`, `let`, and `const` are used to declare variables in JavaScript.  
> `var` can be redeclared and reassigned. `var` is function-scoped.  
> `let` can be reassigned but cannot be redeclared in the same scope. `let` and `const` are block-scoped.  
> `const` cannot be reassigned or redeclared after initialization.  
> Nowadays, `let` and `const` are preferred because they provide block scope and better variable control.

---

## Q2) Closure in JavaScript
> Closure ek aisa function hota hai jo apne outer function ke variables ko yaad rakhta hai aur use access kar sakta hai, even after outer function execute ho chuka ho.

### Example

```js
function outer() {
  let message = "saish shaikh";

  function inner() {
    console.log(message);
  }

  return inner;
}

let closure = outer();
closure();
```

---

## Q3) Difference between Promise and Async/Await
> The main difference is that Promises use `.then()` and `.catch()`, whereas Async/Await uses `async` and `await` keywords.  
> Async/Await makes the code cleaner and more readable. Internally it is based on promises.

- `async` → Makes a function asynchronous and allows `await`
- `await` → Waits for the Promise result before moving to the next line

### Promise Example

```js
let promise = new Promise((resolve, reject) => {
  let pass = false;
  if (pass) {
    resolve("You pass");
  } else {
    reject("You fail");
  }
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
```

### Async/Await Example

```js
function GetUser() {
  return new Promise((resolve) => {
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
```

---

## Q4) Hoisting in JavaScript
> Hoisting means JavaScript moves variable and function declarations to the top before running the code.

### Example

```js
console.log(a); // undefined
var a = 10;
```

> Agar `let` ya `const` hota to TDZ ki wajah se error aata.

---

## Q5) What is `this` in JavaScript?
> `this` refers to the object that called the function.

### Example

```js
let student = {
  name: "saish",
  age: 23,
  city: "kalyan",
  math: 89,
  eng: 55,
  hindi: 66,

  AvgMarks() {
    let avg = (this.math + this.hindi + this.eng) / 3;
    console.log(avg);
  },
};

student.AvgMarks();
```

---

## Q6) Difference between `map()`, `filter()`, and `reduce()`

### What is `map()`?
> `map()` is used to transform each element of an array and returns a new array.

```js
let arr = [3, 4, 5, 6];
let square = arr.map((n) => n * n);
console.log(square);
```

### What is `filter()`?
> `filter()` is used to select elements based on a condition and returns a new array.

```js
let arr = [1,2,3,4,5,6,7,8,9,10];
let filter = arr.filter(n => n % 2 === 0);
console.log(filter);
```

### What is `reduce()`?
> `reduce()` is used to combine all elements of an array into a single value.

```js
let nums = [1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10
```

> `map()` modifies/transforms data, `filter()` selects data, and `reduce()` combines data into a single value.

---

## Q7) What is the Event Loop in JavaScript?
> JavaScript is single-threaded, so it can execute only one task at a time.  
> The Event Loop is the mechanism that allows JavaScript to handle asynchronous operations without blocking the main thread.

### Example

```js
console.log("a");

setTimeout(() => {
  console.log("b");
}, 2000);

console.log("c");
```

### Output
```js
a
c
b
```

---

## Q8) What are the key features introduced in ES6?
> ES6 introduced features like `let` and `const`, Arrow Functions, Template Literals, Destructuring, Spread/Rest Operators, Classes, Modules, and Promises. These features made JavaScript more modern and easier to write.

---

## Q9) Difference between `==` and `===`
> `==` compares values after type conversion.  
> `===` compares both value and type without type conversion.

- `==` → value check karta hai
- `===` → value + type dono check karta hai

### Example

```js
console.log(5 == "5");   // true
console.log(5 === "5");  // false
```

---

## Q10) What is a callback function and callback hell?

### Callback Function
> A callback function is a function that is passed as an argument to another function and is executed later.

### Example 1

```js
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
```

### Example 2

```js
function Login(callback) {
  let username = prompt("Enter Your Username");
  let password = prompt("Enter Your Password");

  console.log(username + " User Login Successfully");

  callback(username);
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
```

### Callback Hell
> Callback inside callback inside callback is called **Callback Hell**.

---

## Q11) What is Temporal Dead Zone (TDZ)?
> TDZ is the area before a `let` or `const` declaration where the variable cannot be accessed.

### Example

```js
console.log(a); // ReferenceError
let a = 10;
```

---

## Q12) Event Bubbling and Event Capturing

### Event Bubbling
> Event Bubbling is a phase where the event moves from the child element to the parent element.

### Event Capturing
> Event Capturing is a phase where the event moves from the parent element to the child element.

---

## Q13) What is Event Delegation?
> Event Delegation is a technique where we attach one event listener to a parent element to handle events of its child elements using event bubbling.

---

## Q14) Difference between `null` and `undefined`
- `null` → variable has an empty value intentionally set
- `undefined` → variable is declared but value is not assigned

### Example

```js
let a;
console.log(a); // undefined

let b = null;
console.log(b); // null
```

---

## Q15) What are Arrow Functions?
> Arrow functions are a shorter way to write functions in JavaScript.

### Example 1

```js
let sum = (a, b) => {
  return a + b;
};

console.log(sum(8, 8));
```

### Example 2 (Implicit Return)

```js
let sum = (a, b) => a + b;
console.log(sum(8, 8));
```

### Difference from Regular Function
> Regular functions have their own `this`, but arrow functions do not — they take `this` from their parent scope.

### Regular Function Example

```js
function sum(a, b) {
  return a + b;
}

console.log(sum(8, 8));
```

---

## Q16) What is Scope in JavaScript? Explain Lexical Scope
> Scope in JavaScript defines the accessibility of variables in different parts of the code.

### Types of Scope
- **Global Scope** → variable can be used anywhere in code
- **Function Scope** → variable declared only inside function
- **Block Scope** → variable declared only inside `{}` block

### Lexical Scope
> Lexical scope means an inner function can use the variables of its outer function.

---

## Q17) What is Destructuring in JavaScript?
> Destructuring is an easy way to extract values from arrays or objects.

### Object Example

```js
const user = { name: "Aman", age: 25 };
const { name, age } = user;

console.log(name); // Aman
```

### Array Example

```js
const nums = [10, 20];
const [a, b] = nums;

console.log(a); // 10
```

---

## Q18) `Promise.all`, `Promise.race`, `Promise.allSettled`

- **Promise.all** → waits for all promises to complete. If any one promise fails, the entire result is rejected.
- **Promise.race** → gives the first completed result.
- **Promise.allSettled** → waits for all promises and shows both success and failure results.

---

## Q19) Truthy and Falsy Values
> Falsy values in JavaScript are values that behave like `false` in conditions, such as `0`, empty string, `null`, `undefined`, `NaN`, and `false`. Everything else is truthy and behaves like `true`.

---

## Q20) Difference between `splice()` and `slice()`

### `slice()`
- Does **not** change original array
- Just takes part of array

```js
let arr = [1,2,4,5,6,7,8,9,10];
let slic = arr.slice(0,4);
console.log(slic);
```

### Output

```js
[1, 2, 4, 5]
```

### `splice()`
- Changes original array
- Used to remove or add items

```js
let arr = [1,2,3,4,5];
arr.splice(1,2,100,200);
console.log(arr);
```

### Output

```js
[1,100,200,4,5]
```

### Remove Example

```js
let arr = [1,2,3,4,5];
arr.splice(1,2);
console.log(arr);
```

### Output

```js
[1,4,5]
```

---

## Q21) `innerHTML` vs `innerText` vs `textContent`

### `innerHTML`
- Gives text + HTML tags
- Can also add HTML

### `innerText`
- Shows only visible text
- Ignores hidden text (CSS hidden)

### `textContent`
- Gives all text (raw text)
- Fast and ignores HTML styling

---

## Q22) Difference between `call()`, `apply()`, and `bind()`

### `call()`
- Calls function immediately
- Pass arguments one by one

```js
function greet(city) {
  console.log(this.name + " from " + city);
}

greet.call({ name: "Aman" }, "Delhi");
```

### Output

```js
Aman from Delhi
```

### `apply()`
- Same as `call()`
- But arguments are passed in an array

```js
greet.apply({ name: "Aman" }, ["Mumbai"]);
```

### Output

```js
Aman from Mumbai
```

### `bind()`
- Does **not** run immediately
- Returns a new function

```js
function greet(city) {
  console.log(this.name + " lives in " + city);
}

const person = {
  name: "Aman",
};

const newGreet = greet.bind(person, "Delhi");
newGreet();
```

### Output

```js
Aman lives in Delhi
```

---

## Q23) Spread vs Rest Operator in JavaScript

### Spread Operator (`...`)
> Spread expands values.

```js
let arr = [1, 2];
let newArr = [...arr, 3];

console.log(newArr);
```

### Output

```js
[1, 2, 3]
```

### Rest Operator (`...`)
> Rest collects multiple values into an array.

```js
function sum(...nums) {
  console.log(nums);
}

sum(1, 2, 3, 4);
```

### Output

```js
[1, 2, 3, 4]
```

---

## Q24) Data Types in JavaScript

### Primitive Types (store single values)
- String
- Number
- Boolean
- Null
- Undefined
- Symbol
- BigInt

### Non-Primitive Types (reference types)
- Object
- Array
- Function

---

## Q25) Difference between `for...of` and `for...in`

### `for...of`
> Iterates over values (arrays, strings)

```js
let arr = [10, 20, 30];

for (let val of arr) {
  console.log(val);
}
```

### Output

```js
10
20
30
```

### `for...in`
> Iterates over keys/indexes (objects)

```js
let obj = { a: 1, b: 2 };

for (let key in obj) {
  console.log(key, obj[key]);
}
```

### Output

```js
a 1
b 2
```

---

## Q26) `querySelector` vs `getElementById`

### `getElementById`
> Selects element using only ID (fastest method)

```js
let el = document.getElementById("myId");
console.log(el);
```

### Example Output

```html
<div id="myId">Hello</div>
```

### `querySelector`
> Selects using any CSS selector (id, class, tag, etc.)

```js
let el1 = document.querySelector("#myId");
let el2 = document.querySelector(".myClass");

console.log(el1);
console.log(el2);
```

### Example Output

```html
<div id="myId">Hello</div>
<div class="myClass">Hi</div>
```

---

## Q27) What are Map and Set in JavaScript?
- **Map** → stores key–value pairs (keys can be any type, ordered)
- **Set** → stores only unique values (no duplicates allowed)

---

# Extra Important Concepts

- **Prototype** → Prototype JavaScript me inheritance provide karta hai, jisse ek object dusre object ki properties aur methods use kar sakta hai.
- **Shallow Copy** → Shallow copy me nested objects ka reference copy hota hai, alag object nahi banta.
- **Deep Copy** → Deep copy me poora object aur uske nested objects ki alag copy banti hai.
- **localStorage** → localStorage browser me data permanently store karta hai jab tak manually delete na kare.
- **sessionStorage** → sessionStorage data ko browser tab close hone tak store karta hai.
- **Cookies** → Cookies chhota data store karti hain aur server ke saath bhi send ho sakti hain.
- **Synchronous** → Synchronous code me ek task complete hone ke baad hi next task execute hota hai.
- **Asynchronous** → Asynchronous code me task complete hone ka wait nahi karna padta aur dusre tasks parallel handle ho sakte hain.
- **find()** → `find()` condition match karne wala pehla element return karta hai.
- **findIndex()** → `findIndex()` condition match karne wale pehle element ka index return karta hai.
- **filter()** → `filter()` condition match karne wale saare elements return karta hai.
- **async** → `async` script download hote hi execute ho sakti hai.
- **defer** → `defer` script HTML load hone ke baad execute hoti hai.
- **Optional Chaining (`?.`)** → Optional chaining nested properties ko safely access karne deti hai bina error diye.
- **Nullish Coalescing (`??`)** → Nullish coalescing `null` ya `undefined` hone par default value provide karta hai.
- **CORS** → CORS browser ka security feature hai jo different domains ke beech requests ko control karta hai.

---

# JavaScript Basic Coding Questions

## 1) Reverse String

```js
let str = "helloworld";
let rev = str.split("").reverse().join("");
console.log(rev);
```

---

## 2) Palindrome

```js
let str = "Madam";
let rev = str.split("").reverse().join("");
console.log(rev.toLowerCase() === str.toLowerCase());
```

### Output

```js
true
```

---

## 3) Remove Duplicates

```js
let arr = [1,2,2,3,4,4,5];
let unique = [...new Set(arr)];
console.log(unique);
```

### Output

```js
[1,2,3,4,5]
```

---

## 4) Character Frequency

```js
let str = "hello";
let obj = {};

for (let char of str) {
  obj[char] = (obj[char] || 0) + 1;
}

console.log(obj);
```

### Output

```js
{
  h: 1,
  e: 1,
  l: 2,
  o: 1
}
```

---

## 5) Largest Number

```js
let arr = [10,20,50,30];
console.log(Math.max(...arr));
```

### Output

```js
50
```

---

## 6) Second Largest Number

```js
let arr = [10,20,56,55,65,62,70,70,85,100,110,120,50,40];
let sorted = [...new Set(arr)].sort((a, b) => b - a);
console.log(sorted[1]);
```

---

## 7) Descending Order

```js
let arr = [10,20,56,55,65,62,70,70,85,100,110,120,50,40];
let sorted = [...new Set(arr)].sort((a, b) => b - a);
console.log(sorted);
```

### Output

```js
[120, 110, 100, 85, 70, 65, 62, 56, 55, 50, 40, 20, 10]
```

---

## 8) Flatten Array

```js
let arr = [[1,[2]],3];
console.log(arr.flat(Infinity));
```

### Output

```js
[1,2,3]
```

---

## 9) Most Frequent Element

```js
let arr = [1,2,2,3,2,4];

let freq = {};
let max = 0;
let result;

for (let num of arr) {
  freq[num] = (freq[num] || 0) + 1;

  if (freq[num] > max) {
    max = freq[num];
    result = num;
  }
}

console.log(result);
```

### Output

```js
2
```

---

## 10) Sum of Array

```js
let arr = [1,2,3,4];
let sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
```

### Output

```js
10
```

---

## 11) Find Missing Number

```js
let arr = [1,2,3,5];
let n = 5;

let total = (n * (n + 1)) / 2;
let sum = arr.reduce((a, b) => a + b, 0);

console.log(total - sum);
```

### Output

```js
4
```

---

## 12) Find Duplicate Elements

```js
let arr = [1,2,2,3,4,4];

let dup = arr.filter((item, index) =>
  arr.indexOf(item) !== index
);

console.log([...new Set(dup)]);
```

### Output

```js
[2,4]
```

---

## 13) Even Numbers

```js
let arr = [1,2,3,4,5,6];
console.log(arr.filter(num => num % 2 === 0));
```

### Output

```js
[2,4,6]
```

---

## 14) Reverse Array

```js
let arr = [1,2,3,4];
console.log(arr.reverse());
```

### Output

```js
[4,3,2,1]
```

---

## 15) Factorial

```js
function factorial(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}

console.log(factorial(5));
```

### Output

```js
120
```

---

## 16) Count Words

```js
let str = "I love JavaScript";
console.log(str.split(" ").length);
```

### Output

```js
3
```

---

# Notes
- This repository is for **JavaScript fresher interview preparation**
- Covers **JavaScript roadmap + interview questions + coding questions**
- Useful for **practice, revision, and interviews**
