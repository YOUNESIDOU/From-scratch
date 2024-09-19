/* Wait Window To Load */
window.onload = function () {
  document.querySelector("h1").style.color = "red";
  document.querySelector("h1").style.fontSize = "55px";
  document.querySelector("h1").style.fontStyle = "oblique";
};
// window.alert("Hi There I Am Learning JS ");
// Syntax ( Keyword | Variable Name | Assignment Operator( *** ** = assigne) )
console.error("error");
console.table(["Younes", "Unes", "Yotido"]);
console.log(
  "Hello From %cJS %cFile",
  "color: blue; font-size: 20px",
  "color: red; font-size: 20px"
);
//Declare first then console.log else undefined
var $_1my_Name_$ = " YOYOYO";
console.log("Hello" + $_1my_Name_$);
console.log(`Hello${$_1my_Name_$}`);
/*
Var
redeclare(check)
access before declare(undefined)
variable scope drama [added to window(f12 console)](it will creaete a problem for big application)
block or function scope
*/
var a = 1;
var a = 2;
console.log(a);
/*
Let
redeclare(Uncaught SyntaxError: Identifier 'b' has already been declared (at main.js:)
access before declare(Uncaught ReferenceError: Cannot access 'b' before initialization
    at main.js:)
variable scope drama [added to window(f12 console)](b isn't an object in window)
block or function scope
*/
// let b = 1;
// let b = 2;
let b = 3;
console.log(b);
/*
const
redeclare(Uncaught SyntaxError: Identifier 'c' has already been declared (at main.js:)
access before declare(main.js:50 Uncaught ReferenceError: Cannot access 'c' before initialization
    at main.js:)
variable scope drama [added to window(f12 console)](c isn't an object in window)
block or function scope
*/
const c = 1;
// const c = 2;
console.log(c);
/*string syntax + Character escape sequences
\ escape & line continue
\ n
*/
console.log('let"s" go ');
console.log("let's' go");
console.log("let \"s\" go");
console.log("let \\ \"s\" go");
console.log("let try\
  \"s\" g\
  o");// shown in one line
/*
main.js:57 let"s" go 
main.js:58 let's' go
main.js:59 let "s" go
main.js:60 let \ "s" go */
console.log("\nlet's \ngo");