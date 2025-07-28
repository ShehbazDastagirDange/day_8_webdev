// what is variables: variables are the containers of programming.
// var keyword used previously for declaration

var fname = "javascript";
console.log(fname);

//let modern mutable
let lname = "worlds best programming language";
console.log(lname);

//const immutable used for fixed values
const pie = 3.14;
console.log(pie);

//Data types: The DNA  of javascript

//string
const ename = "shehbaz10xdev";
console.log(typeof ename, ename);

//number
const percentage = 100;
console.log(typeof ename, ename);

//boolean
const married = true;
console.log(typeof married, married);

// undefined
let futureProject;
console.log(typeof futureProject, futureProject);

//null
let unknownValue = null;
console.log(typeof unknownValue, unknownValue);

//bigint
const infinite = 292929292929292992n;
console.log(typeof infinite, infinite);

//symbol (unique identifiers)
const id = Symbol("unique");
console.log(typeof id, id);

// complex datatypes:
//object
const dev10x = {
  fname: "shehbaz",
  lname: "dange",
  skills: ["js", "react", "node", "angular", "mongodb"],
  is10x: true,
};

console.log(typeof dev10x, dev10x);

//array in javascript
const techskills = [
  "html",
  "css",
  "javascrit",
  "react",
  "angular",
  "mongodb",
  "nodejs",
  "python",
  "java",
  "sql",
  "cloud computing",
];

console.log(typeof techskills, techskills);

//operators in javascript

//arithmetic operators

let x = 10,
  y = 20;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

// comparison operators:
// console.log(10 == "10");
// console.log(10 = "10");

// 5 != "5";
// 5 !== "5";
