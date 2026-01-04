// ############################   JAVSCRIPT RIVISION   #########################

//   If

//  if else



//  let a= 12 , b = 4
// if (a>b) {
//     console.log("The number is large:", "Larger");

// }else {
//      console.log("smaller")
// }


// 2}  else if

// let marks  = 60 ;
// if (marks>=80) {
//  console.log("YOU PASS A GRADE")
// } else if (marks>=70) {
//     console.log("YOU HAvE GRADE B")
// } else if (marks>=60){
//     console.log("YOU HAVE GARDE C");
 
// }

// let Marks = parseInt(prompt("ENTER YOUR MARKS"));

// if (Marks >= 80) {
//     console.log("YOU HAVE GRADE A");
// } else if (Marks >= 70) {
//     console.log("YOU HAVE GRADE B");
// } else if (Marks >= 60) {
//     console.log("YOU HAVE GRADE C");
// } else {
//     console.log("YOU HAVE FAILED");
// }

// Nested conditions

// let marks = parseInt(prompt40("ENTER YOUR MARKS")) 
//  if ( marks>=35) {
//     console.log("YOU ARE PASS") 
//     if (marks>=70) {
//         console.log("YOU ARE PASS WITH A GRADE")
//     } else {
//         console.log ("YOU ARE PASS WITH GRADE B")
//     }
//  }else{
//     console.log ("you ARE FAIL")
//  }

// let pin = 4444; 
// let balance= 1000;
// if (pin===4444) {
//     console.log("YOUR PIN IS CORECT!!");
//  if (balance>=1000) {
//     console.log("WITHOW ALLOW");
//  }else{
//     console.log ("nsufficient funds")
//  }

// }else {
//     console.log( "YOUR PIN IS ERONG")
// }

// ############  4) Swich Statment #####################

// let color = "red" ;
// switch (color) {
//    case "red":
//    console.log("STOP");
// break;
//    case  "green":
//       console.log("GO NOW")
// break;
//       case "yellow":
//       consrwd
// ole.log ("SLOW DOWN");
// }


// Let color = prompt("ENTER YOUR SIGNALS COLOURS");
// switch (color) {
//    case "red":
//    console.log("STOP");
// break;
//    case  "green":
//       console.log("GO NOW")
// break;
//       case "yellow":
//       console.log ("SLOW DOWN");
// }
//   l

// ###########    String Method ###############

// let msg = "      hellow!        ";
// msg = msg.trim();
// console.log(msg);


// let msg = "saishshaikhfromsaralgaon";
// let index = msg.indexOf("from");
// console.log(index);


// let msg = "saishshaikhfromsaralgaon";
// let toUpperCase= msg.toUpperCase();
// console.log(toUpperCase);



//  let msg = "saishshaikh"
//   Nmsg = msg.slice (0,5);
//  console.log (Nmsg);/


// let msg = "saish shaikh"
//   Nmsg = msg.replace ("saish","sara");
//  console.log (Nmsg);

//   day 2

// ###############  ARRAY METHODS ####################

// let arr = [1, 2, 3];

// // add to end
// arr.push(4);
// console.log(arr); // [1, 2, 3, 4]

// // remove from end
// arr.pop();
// console.log(arr); // [1, 2, 3]

// // add to start
// arr.unshift(0);
// console.log(arr); // [0, 1, 2, 3]

// // remove from start
// arr.shift();
// console.log(arr); // [1, 2, 3]

                // merging 2 arry

// let arr1 = [1,2,3,4,5];
// let arr2 = [6,7,8,9,10];

// let merge = arr1.concat(arr2)
// console.log(merge);

//reverse arry

// let arr = [1,2,3,4,5]
// let rev = arr.reverse(arr)
// console.log(rev);

//    slice in arry

// let arr =[1,2,4,5,6,7,8,9,10];
// let slic = arr.slice(0,4);
// console.log (slic);

// splice in arry 

// let arr =[1,2,4,5,6,7,8,9,10];
// let splice = arr.splice(0,1);
// console.log (splice);

// let arr =[1,2,4,5,6,7,8,9,10];
// let splice = arr.splice(3,5);
// console.log (splice);


// map() 

// Purpose: Array ke har element par function apply karke naya array return

// let nums = [1, 2, 3];
// let squares = nums.map(n => n * n);
// console.log(squares); // [1, 4, 9]



// filter() 

// Purpose: Array ke selected elements filter karke naya array return

// let nums = [1, 2, 3, 4, 5];
// let even = nums.filter(n => n % 2 === 0);
// console.log(even); // [2, 4]

//  reduce() 

// Purpose: Array ke sab elements ko combine karke single value return

// let nums = [1, 2, 3, 4];
// let sum = nums.reduce((acc, curr) => acc + curr, 0);
// console.log(sum); // 10


//  forEach()

// Purpose: Array ke har element pe function run karna, return nahi karta

// let nums = [1, 2, 3];
// nums.forEach(n => console.log(n * 2));
// // 2, 4, 6


//  find()

// Purpose: Array me pehla element jo condition satisfy kare, return

// let nums = [1, 2, 3, 4];
// let firstEven = nums.find(n => n % 2 === 0);
// console.log(firstEven); // 2
   


// ########################   LOOPS  ##################################

//////// FOR LOOP //////////

// =>  A for loop repeats code using initialization, condition, and increment/decrement.

// for (let i = 0; i<=13;i++){
//     console. log ("saish shaikh 23");
// }


//  Q1)  Print numbers from 1 to 10 using for loop.


//   for (let i=1 ; i<=10;i++){
//     console.log (i);
//   }


//   Q2) Print numbers from 10 to 1 using for loop

//   for (let i=10 ;i>=1;i--){
//     console.log (i);
//   }

//   Q3)   Print even numbers from 1 to 50 using for loop.

//   for (let i=1; i<=50 ;i++){
//     if (i %2 === 0){
//     console.log (i);
//   }
//   }


// Q)
// for (let i = 1; i <= 50; i++) {
//   if (i % 2 === 0) {
//     console.log(i + " THE NO IS EVEN");
//   } else {
//     console.log(i + " THIS IS ODD NUMBER");
//   }
// }


  
//   Q4)   Print odd numbers from 1 to 50 using for loop.


//   for (let i=1; i<=50 ;i++){
//     if (i %2 !== 0){
//     console.log (i);
//   }
//   }


   // Q5)  Sum of numbers from 1 to n

// let sum = 0;

// for (let i = 1; i <= 10; i++) {
//   sum += i;
// }
// console.log(sum);
 
// Q6)  Print table of a given number
  
// let n = 5;
// for (let i = 1; i<=10;i++){
//     console.log (n + " * " + i + " = " + n * i);
// }

//  ex 2 )

// let n = parseInt(prompt("ENTER YOUR TABLE NO"));
// for (let i = 1 ; i<10;i++){
//     console.log (n +"*"+(i) +"="+ (n*i));
// }

//  Q 7)  Find factorial of a number

// let n = 5;    
// let fact= 1;  

// for (let i = 1; i <= n; i++) {
//     fact *= i;    
// }

// console.log(fact); 

 
// ex 2)

// let n = parseInt(prompt("ENTER YOUR TABLE NO"));
// let fact = 1;
//  for (let i = 1 ; i<=n; i++) {
//   fact *= i
//  }  
//  console.log (fact)

//////////////////// NESTED FOR LOOP ///////////////////////

// Q1) 

// for (let i=1 ; i<=3 ; i++){
//    for (j=1;j<=2;j++){
//       console.log(i,j);
//    }

// }

// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 2; j++) {
//         console.log("Hi"+i);
//     }
// }



///////////////////for of loop //////////////////////////   
// note ::=  for…of loop sirf iterable objects (array, string, set, map) ke liye kaam karta hai.


// q1) identify the output

// const fruit = ["apple","orange","banan","watermelon"];
//  for ( const fruits of fruit){
//    console.log (fruits);
//  }


// Q2)

// let mrks = [1,2,3,4,5,6,7]; // array
// for (let no of mrks) {
//     console.log(no);
// }


/////////////// WHILE LOOP //////////////////////////
//  ==> while loop tab tak code execute karta hai jab tak condition true hoti hai.

// Q1) print 1 to 10 using while loop ?

//  let i = 1 ;
//  while (i<=10) {
//    console.log (i);
//    i++;
//  }


// let i = 1;
// while (i <= 10) {
//   if (i == 8) {
//     console.log("8 is fond")
//   }
//   console.log(i);
//   i++;
// }

// let i = 1;
// while (i <= 10) {
//   if (i == 8) {
//     console.log("8 is fond")
// //     break;    break in loop stop herre working durring proces
// //   }
//   console.log(i);
//   i++;
// }

///////////////// do while loop////////////////////////

// while loop condition pehle check karta hai, code may run 0 times.

// do…while loop code pehle execute karta hai, condition ke baad check hoti hai, isliye minimum 1 time run hota hai


//   Q1) Print numbers 1 to 5 using do…while loop.

// let i = 1
// do {
//    console.log(i)
//    i++
// }while(i<=100)

// Q2)

// let password;
// do {
//   password = prompt("Enter password:");
//   console .log ("you are log in successfuly")
// } while(password !== "admin");
  

// Q2)calculate the sum of numbers from 1 to 10

// let sum = 0 ;
// let i = 1;
// do {
//    sum+=i
//   i++
 
// } while ( i<=10)
//     console.log (sum);


////////////////  OBJECT LITERAL ////////////////

// let saish ={
//    name : "Saish" ,
//    age : 22 ,
//    Bloodgroup :" B+",
//    class : "BE" ,
//    city : "kalyan"
// };
// console.log(saish.name);   
// console.log(saish.age); 

// // Q2) 
// let student = { name: "saish", marks: { math: 95, science: 90 } };
// console.log(student.marks.math);  


// 1 )  for indivisual object = saish.jo nikln hai induvisual usk name   ex saish.name 
   // 2 ) for add = saish.city = "mumbai"
    // 3) for delete = delete saish.city


    //////////////////////////// ////////////////////////  FUNCTION   ////////////////////////////////////////////////////////////
   //  A function is a block of code that does a specific task. You can use it again and again by calling it.
   
   // type 1 =  basic function //
   // Q1 ) 

   // function hellow () {
   //    console.log ("hellow !! Saish Shaikh")
   // }
   // hellow ();


   // type 2 =  Function with Arguments (Without return) //

   // Q1) 
   
   // function add (a,b) {
   //    console.log(a+b);
   // }
   //  add (5,3)


//    // Q2)

// function multiply (a,b) {
//    console.log (a*b)
// }

//     multiply(5,5)

// Q3)  
// function info (name,age){
//    console.log("hellow "  + name + " your age is :: " + age );
// }
//  info ("saish",22)


// Q3  ) adult or not

// function adult(age) {
//    if (age>=18) {
//       console.log("YOU ARE ADULT")
//    } else {
//       console.log ("YOU ARE NOT ADULT")
//    }
// }

// adult(12);


// type 2 =  Function with Arguments ( return) //

// Example 1: Add two numbers

// function add (a,b) {
//    return a+b
// }
//  console.log(add(15,10));


// Example 2: Check even or odd

// function isEven (num) {
//    return num %2 === 0;
// }

// console.log(isEven(2))

// Example 3: Square of a number

//  function square  (num) {
//    return num*num;
//  }

//   console.log (square(5))


// exaple : 3   adult or not

// function adult(age) {
//    if (age>=18) {
//       return("YOU ARE ADULT")
//    } else {
//       return ("YOU ARE NOT ADULT")
//    }
// }

// console.log (adult(22))


//////////////////////// SCOPES //////////////////////////////

// 1) function scope 
// Variables declared inside a function./

// function hello (a,b) {
//    let sum = a+b ;        <=  this is function scope
//    console.log (sum)
// }
//  hello (5,5);



// 2)  block scope

// 3)  Lexical scope     
  
////////////////////////////////  function expression  //////////////////////////////

// let sum = function (a,b) {
//    return a+b 
// }

// console.log(sum(5,4))


///////////////////////////   HIGER  ORDER FUNCTION  /////////////////////////
//  Jo function, function ko call kare ya accept kare = Higher Order Function

// function sayHi() {
//   console.log("Hi");
// }

// function callMe(fn) {
//   fn();
// }

// callMe(sayHi);


////////////////////////////////////   ARROW FUNCTION //////////////////////////////////////////////////

// Q1) 

//  const  sum = (a,b) => {
//    return a+b
// }
// console.log(sum (5,5));


////////////////ARROW FUCTION IMPLICT RETURN /////////////
// Q: Write an arrow function to add two numbers.

// const sum = (a,b)=> a+b;
// console.log(sum(2,4))

// Q: Write an arrow function to square a number

// const square =(a) => a*a
// console.log(square(5))


// Q: Write an arrow function that prints “Hello

// let say =() => console.log("hello");

// say ();




//////////////////////     this  in javscript   ///////////////////
 

// let saish = {
//   class: "BE",
//   RollNo: 32,
//   Maths: 45,
//   science: 56,
//   Bio: 45,
//   Physics: 55,

//   get avg() {
//     let average = (this.Maths + this.science + this.Bio + this.Physics) / 4;
//     console.log(average);
//   }
// };

// saish.avg ()




///////////////////////////// TRY AND CATCH //////////////////////
 
// try → risky code
// catch → error pakad ke message ya alternative action dikhaye

// ex 1)
// try {
//   let result = 10 / 0;
//   console.log(result);
// } catch (err) {
//   console.log("Something went wrong:", err);
// }

// ex 2 )

// try {
//    let a = 5 
//    let b = 10
//    if(a%2===0){
//       console.log(i)
//    } else {
//       console.log(even)
//    }
// }  catch (err) {
//    console.log(" something wrong "+ err)
// }



//////////////////// SetTimeout  Function////////////////////

// setTimeout ( () =>{
//    console.log("HeloW !!")
// },4000 );


// ex 2)

// setTimeout (() => {
//    console.log("saishhhhhh")
// },6000);



// ########################################  D  O  M  #########################################

// SELECTING Element 
// isme jitne bhi he o sab ayege (ex p ko id se call kiya to sab p ayege 

// 1) By ID 

// document.getElementById("....")

// === sare property niklne ke liye 
// console.dir(document.getElementById("..."))

// 2)  By ClassName

// document.getElementsByClassName("....")


// 3) document.getElementsByTagName("...")




// 4)  Querry Selector 

// document.querySelector("..")  == select the first Element

//  document.querySelector("#...")  == select the first Element by ID

//  document.querySelector(".")  == select the first Element  by class

// document.querySelectorAll("....") == for all element



// 5 ) innerText == HTML element ke andar ka visible text change ya read karne ke kaam aata hai.
// 6 )  textContent == textContent DOM element ke andar ka poora text hota hai
// 7) innerHTML == innerHTML element ke andar ka poora HTML code (tags + text) deta hai
// ya phir usse replace karta hai.



// ########################## DOM NAVIGATION ####################



// html code for reference

// 
// <div class="container">

//   <h1>Title</h1>
//   <ul>
//     <li>Item 1</li>
//     <li class="active">Item 2</li>
//     <li>Item 3</li>
//   </ul>
// </div>
// 




// // 1) Move UP (Parent) ///


// const activeitem = document.querySelector(".active");
// console.log(activeitem.parentElement);

// // Output: <ul>...</ul>

// console.log(activeItem.parentElement.parentElement);
// // Output: <div class="container">...</div>


// 2)Move DOWN (Children //

// const ul = activeitem.parentElement;

// console.log(ul.children); 
// // Output: HTMLCollection [li, li, li]

// console.log(ul.firstElementChild); 
// // Output: <li>Item 1</li>

// console.log(ul.lastElementChild); 
// // Output: <li>Item 3</li>


// 3) Move SIDEWAYS (Siblings)///

// console.log(activeitem.previousElementSibling);
// // Output: <li>Item 1</li>

// console.log(activeitem.nextElementSibling);
// // Output: <li>Item 3</li>


// ##############   ADDING ELEMENT ###########
// ###############  REMOVE ELEMENT ############



// ######################## DOM EVENTS ###################

// 1) onclick 

// const buttonn = document.getElementById("btn");

// btn.onclick = () => {
//   console.log("Button CLICK!!");
// };

// method 2 

// const buttonn= document.querySelector(".btn");

// btn.onclick = () => {
//   console.log("Button CLICK!!");
// };


// method 3   u can uses any func

// const button = document.getElementById("btn");
// button.onclick = function () {
//    console. log ('hello');
// }


// for multiple buttons //

// let btns = document.querySelectorAll(".btn");

// for (let btn of btns) {   
//    btn.onclick = sayHello; 
// }

// function sayHello() {
//    console.log("Hello!");
// }

// 2) Onmousenter 

// const button = document.getElementById("btn");
// button.onmouseenter = () => (
//    console.log ("BUTTON WAS CLICKED!!")
// )


// 3) EvEN LISTENER //

//  1 ) addEventListener


// Example: Button click using event + callback
 
// const btn = document.getElementById("btn");
// btn.addEventListener("click",function() {
//    console.log("BUTTON CLICKED!!");
// });




// const btn = document.getElementById("btn");
// const input = document.getElementById("nameInput");;
// btn.addEventListener("click",function() {
//    console.log("BUTTON CLICKED!!"+ input.value);
// });





// const btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//   alert("Button clicked!");
// });




// const btn = document.getElementById("btn");
// const input = document.getElementById("nameInput");

// btn.addEventListener("click", () => {
//   console.log("Hello " + input.value);
// });


// THIS IN EVEN LISTENER//

// const btn = document.getElementById("btn");
// btn.addEventListener ("click", function() {
//    console.log(this)
// this.style.backgroundColor = "pink";

// });


//  FORM EVENT   //

// const form = document.getElementById("myForm");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   console.log("FORM SUBMITTED !!");
  
// });



  // SHOW  user input also //

// const form = document.getElementById("myForm");
// const input = document.getElementById("userInput");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//    console.log(input.value);
//   console.log("FORM SUBMITTED !!");
  
// });   



// ############ EVENT BUBBLING ##############


// const parent = document.getElementById("parent");
// const child = document.getElementById("child");

// parent.addEventListener("click", () => {
//   console.log("Parent clicked");
// });

// child.addEventListener("click", () => {
//   console.log("Child clicked");
// });

// // here problm is when click me button then output comes child  first and then parent 

// solutaion on tht ==>

// child.addEventListener("click", (event) => {
//   console.log("Child clicked");
//   event.stopPropagation(); // stops bubbling
// });



// ###############  JS Call Stack  ################

// function first () {
//   two ();
// }
// function two () {
//   three();
// }
// function three () {
//   console.log("hellow saish");
// }
// first();


// ################## BREAKPOINTS #######################

// let a = 5;
// let b = 10;

// debugger;   // yahin code ruk jaayega thts called  breakpoint

// let sum = a + b;
// console.log(sum);




// function first() {
//   two();
// }

// function two() {
//   debugger;
//   three();
// }

// function three() {
//   console.log("hello saish");
// }

// first();



// ###################### JavaScript Promises ###################
// Promise ek object hota hai jo future me koi value milegi ya error aayega — ye batata hai.


// const promise = new Promise((resolve, reject) => {
//   resolve("Success!");
// });

// promise.then(result => {
//   console.log(result);
// });
// // Output: "Success!"


// Reject example

// const promise = new Promise((resolve, reject) => {
//   reject("Error!");
// });


//  promise .then(res => console.log(res))
// promise.catch(err => console.log(err));



// Example: then & catch 

// const promise = new Promise((resolve, reject) => {
//   let pass = true;
//   if (pass) {
//     resolve("YOU PASSED !");
//   } else {
//     reject("YOU FAILED !");
//   }
// });

// promise.then(result => {  
//   console.log(result);
// })
// promise.catch(error => {
//   console.log(error);
// });

// note == Promise resolve hua => then, reject hua =>catch

// #################### ASYNC AWAIT  ##########################

// function sayHello() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve("Hello Async!");
//     }, 4000);
//   });
// }

// async function greet() {
//   const message = await sayHello(); // wait for promise to resolve
//   console.log(message);
// }

// greet();






// Promise for each step
// function boilWater() {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(" Water boiled"), 1000);
//   });
// }

// function brewCoffee() {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(" Coffee brewed"), 1000);
//   });
// }

// function addMilk() {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(" Milk added"), 500);
//   });
// }

// // Async function to do all steps
// async function makeCoffee() {
//   const step1 = await boilWater();
//   console.log(step1);

//   const step2 = await brewCoffee();
//   console.log(step2);

//   const step3 = await addMilk();
//   console.log(step3);

//   console.log(" Coffee ready!");
// }

// makeCoffee();



// #######################  FETCH API  ##########################



