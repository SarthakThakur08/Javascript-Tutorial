/* This is a code that prints hello world! (this comment can be apply on several lines)*/
console.log("Hello World!")
//Arithmetic Opeaters
// let a = 9;
// let b = 5;
// console.log("a =",a," & b =",b)
// console.log("a + b = ", a + b);
// console.log("a - b = ", a - b);
// console.log("a * b =", a * b);
// console.log("a / b =", a / b);
// console.log("a % b =", a % b);
// console.log("a ** b =", a ** b);
// console.log("a ** b =", a ** b);

// Unary Operator
// let a = 9;
// let b = 5;

// console.log("a =",a," & b =",b)
// a++;
// console.log("a =", a);
// a--;
// console.log("a =", a);
// ++a;
// console.log("++a =",++a)

// Assignment Operators
// let a = 5;
// let b = 4;
// a += 4;
// console.log("a =",a);
// a -= 4;
// console.log("a =",a);
// a *= 4;
// console.log("a =",a);
// a /= 4;
// console.log("a =",a);
// a %= 4;
// console.log("a =",a);
// a **= 4;
// console.log("a =",a);

//Comparison Operators
// let a = 5;
// let b = 4;
//  console.log("5 == 5" , a == b)
// console.log("5 !=4" ,a !=b);

//Logical Operators
// let a = 9;
// let b = 8;

// console.log("cond1 && cond2 =", a < b && a === 6);
// console.log("cond1 || cond2 =", a > b || a===6)
// console.log(" !(9>8) =", !(a > b));

// Conditional Statement

// let age = 25;
// if (age > 18) {
//     console.log(" you can vote")
// }
// if (age < 18) {
//     console.log(" you cannot vote")
// }

 //Odd or Even

 let num = 12;
 if (num % 2 === 0) {
    console.log(num,"is Even")
 }else{
    console.log(num,"is Odd")
 }

 let mode = "dark";
let color; 
if(mode === "dark") {
    color = "black";
}else if(mode === "blue"){
    color = "blue";
}else if(mode === "pink"){
    color = "pink";
}else {
    color = "white";
}
console.log(color);

if (mode === "black") {
    console.log(mode);
}

//Ternary Operators

let age = 80;
 let result = age>18 ? "eligible for vote" : "not eligible for vote";
console.log(result); 

//MDN Docs

//Practice Questions (Q.NO.= 1)

// alert("Hello!");
// let poop = prompt ("Enter a number :");
// if (poop % 5 === 0){
// console.log(poop,"Is a Multiple");
// }else{
// console.log(poop,"Is Not a Multiple");
// } 

// Q.NO. = 2, JS Program
// let grade = prompt ("Enter Your Marks :");
// if (grade>=90 && grade<= 100) {
//     console.log("A");
// }else if(grade>=70 && grade <=89){
//     console.log("B");
// }else if(grade>=60 && grade <=69){
//     console.log("C");
// }else if(grade>=50 && grade <=59){
//     console.log("D");
// }else if(grade>=0 && grade <=49){
//     console.log("F");
// } 

//LOOPS
// IT'S Types 
// 1.For Loop -
//Print 1 to 5
// for (let i = 1; i <= 8; i++) {
// console.log("i =" ,i);
// }

//Calculate sum of 1 to 5
// let sum = 0;
// for (let i = 1; i <= 5; i++){
//    sum = sum + i;
// }
// console.log("sum = ",sum)
// console.log("Loop Has Ended");

// 2. Infinite Loop
// A Loop that will never End We never have to create.

// 3. While Loop(As Same As for loop, we can do same things in both for and while loop.)
// let i = 1;
// while(i<=5){
// console.log("Sarthak Thakur")
// i++
// }

// 4. Do- While Loop
// let i = 20;
// do{
//     console.log("Sarthak Thakur");
//     i++;
// }while(i>=7);

// 5. For-of Loop

// let str = "SarthakThakur"
// for(let val of str){
//     console.log("val =",val);
// }

// 6. for-in Loop 

// let student = {
//     Name: "Sarthak Thakur",
//     Age : 18,
//     height : 6,
//     ispass : true,
// };
// for (let key in student){
//     console.log("key =",key,"value =",student[key]);
// }

// Practice Questions
// Q.NO.-1

// for (let index = 0; index <= 100; index++) {
//     if (index%2 === 0)
//      console.log("index =",index)
// }

// Q.NO.-2
 
// let gamenum = 25;
// let game = prompt ("Guess The Correct Value");
// while (game != gamenum) {
//     game = prompt ("Oops You Entered The Wrong Value. Try Again");
// }

// console.log("Congratulations! You Guessed The Correct Number.");

// STRINGS 

// let str = "SarthakThakur";
// let str2 = "PrateshBharadwaj"
// console.log(str[0],str[7]);
// console.log(str2[0],str2[7]);

//Template Literals (Template Strings)
// let specialstring = `This is a template literal ${89+ 98}`;
// console.log(specialstring);
// let black = "Sarthak\nThakur"
// console.log(str.length);

//String Methods
// let str = "yellow";
// let newstr = str.toUpperCase();
// console.log(str);
// console.log(newstr);

// let str = "SARTHAK THAKUR";
// let newstr = str.toLowerCase();
// console.log(str);
// console.log(newstr);

// let str = "    violet   ";
// let newstr = str.trim()
// console.log(str);
// console.log(newstr);

// Practice Questions
// Q.NO. (1)

// let teen = prompt("Enter Your Full Name Without Spaces")
// let username = "@" + teen + teen.length 
// console.log (username);

//Arrays

// let profile = ["SarthakThakur",18,7.8 ]
// console.log(profile);
// console.log(profile.length);

//Loops In Arrays

//for loop

// let years = [18,25,89,80,14,76,35,50]
// for (let idx = 0; idx < years.length; idx++){
//     console.log(years[idx]);
// }

//for of 
// for(let year of years){
// console.log(year);
// }

// Practice Questions

// Q.NO. 1

// let Marks = [85,97,44,37,76,60]
// let sum = 0;
// for(let val of Marks){
//  sum += val;
// }
// let avg = sum / Marks.length;
// console.log(`avg. marks of the class = ${avg}`);

// Q.NO. 2 

// let items = [250,645,300,900,50]
// let i = 0 ;
// for (let val of items){
//     console.log(`Value at index ${i} = ${val} `);
//     i++;
// }

// for(let i=0; i<items.length; i++ ){}

// Arrays Method
// let cars = ["Rolls-Royce","BMW","Ferrari","TATA","Lamborghini"]
// cars.push("Audi","Beetly","Jaguar");
// console.log(cars);
// let deleteditems = cars.pop()
// console.log(cars);
// console.log("deleted",deleteditems);

// let vegetables = ["Potato","Tomato","Bringal","Cauliflower"];
// let fruits = ["Apple","Banana","Strawberry","Orange"]
// console.log(vegetables);
// console.log(vegetables.slice(1,3));
// let Diet = vegetables.concat(fruits);
// console.log(Diet);

// let array = [1,2,3,6,7,8,9];
// array.splice(3,2,4,5);

//Add Element 
// array.splice(2,0,40);

//Delete Element
//array.splice(4,1);
// console.log(array);

//Replace Element
//array.splice(3,1,90)

// Practice Questions

// Q.NO.- 1

// let companies =["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// companies.splice(0,1);
// companies.splice(2,1,"Ola");
// companies.push("Amazon");

//Functions
// function stt(){
//     console.log("Hey There!")
//     console.log("Welcome to my channel what's going there?") //Parameter
// }

// stt();

// function yrs(msg){
//     console.log(msg);
// } //Argument
// yrs("Hey There!");
// yrs("Welcome To My Channel. What's Going on");

// function eeda(a,b,c){
//     console.log(a + b + c);
// }

// function sum(a,b){
//     s = a + b ;
//     console.log("before return");
//     return s;
// }

// let val = sum(9,8);
// console.log(val);

//Sum Function
// function sum(a , b){
//     return a+b;
// }

//Modern JS 
// const arrowsum = (a,b) => {
//     console.log(a + b);
// }

//Multiplication Function
// function mul(a,b){
//     return a * b;
// }

// Practice Q.no.1

// function countVowels(str){
//     let count = 0; 
//     for (const char of str){
//       if(
//         char === "a" ||
//         char === "e" || 
//         char === "i" || 
//         char === "o" ||
//         char === "u" 
//     ) {
//       count++;
//       }
//     }
//     return count;
// }

// ForEach loop in Arrays

// let val = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 ]
// array.forEach(val => {
//     console.log(val);
// });

// Practice Questions
// let square = [1,2,3,4,5];
// let calcsquare = (num) => {
//     console.log(num*num);
// }
// square.forEach(calcsquare);

//Filter Array
// let arr = [1,2,3,4,5,6,7,8,9,10]
// let even = arr.filter((val) =>{
// return val % 2 === 0;
// });
// console.log(even);
// let odd = arr.filter((val) =>{
//     return val % 2 !== 0;
// });
// console.log(odd);

//Reduce Method

// let tannu = [1,2,3,4,5];
// const output = tannu.reduce((prev,curr) => {
//     return prev > curr ? prev : curr;
// })
// console.log(output);

// Practice Questions Q.no.1

// let marks = [89 , 98 , 79 , 80 , 95 , 92]
// let performance = marks.filter((val) => {
//     return val > 90;
// })
// console.log(performance);

// DOM (Document Object Model)

// DOM Manipulation

// console.dir(document);

// let fth = document.getElementById("problem");
// console.dir(fth);

// let start = document.getElementsByClassName("start")
// console.dir(start);

// let para = document.getElementsByTagName("p");
// console.dir(para);

// DOM Manipulation (Query Selector)

// let firstelements = document.querySelector(".start");
// console.dir(firstelements);

// let allelements = document.querySelectorAll(".start");
// console.dir(allelements);

// console.log("peer");








