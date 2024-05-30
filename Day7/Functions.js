//function declaration
function add(a, b) {
    return a + b;
}

console.log(add(5, 10)); //15

//function expression
let subtract = function (a, b) {
    return a - b;
};

console.log(subtract(10, 5)); //5

//using spread operator in function
function multiply(a, b, ...rest) {
    let result = a + b;
    for (let i of rest) {
        result += i;
    }
    return result;
}

console.log(multiply(2, 3, 4, 5)); //14

//default values in function
function divide(a, b = 2) {
    return a / b;
}

console.log(divide(10)); //5

//function add(...rest) works same as console.log(rest);

//destructuring in function
function greet({ name, age }) { //also can do function(object)
    console.log(`Hello ${name}, you are ${age} years old.`);
}

let student = {
    name: 'John',
    age: 25
};

greet(student); //Hello John, you are 25 years old.

//destructuring in function with default values
function greet2({ name = 'Tom', age = 30 }) {
    console.log(`Hello ${name}, you are ${age} years old.`);
}

let student2 = {
    name: 'Bob'
};

//recursive function //fibonacci series, factorial
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5)); //120

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}   //0, 1, 1, 2, 3, 5, 8, 13, 21, 34

console.log(fibonacci(5)); //5

//tower of hanoi
function towerOfHanoi(n, source, destination, auxiliary) {
    if (n === 1) {
        console.log(`Move disk 1 from ${source} to ${destination}`);
        return;
    }
    towerOfHanoi(n - 1, source, auxiliary, destination);
    console.log(`Move disk ${n} from ${source} to ${destination}`);
    towerOfHanoi(n - 1, auxiliary, destination, source);
}

towerOfHanoi(3, 'A', 'C', 'B');

//ways of creating function------------

//arrow function or anonymous function(has no function name)-------------
let multiply = (a, b) => a * b; //no need to write function keyword and assigning variable to function
console.log(multiply(2, 3)); //6

let greet = name => `Hello ${name}`; //if only one parameter, no need of paranthesis
console.log(greet('John')); //Hello John

//if arrow function has more lines of code, use curly braces
let greet2 = name => {
    let message = `Hello ${name}`;
    return message;
};

console.log(greet2('Bob')); //Hello Bob

//if no parameter, use paranthesis
let greet3 = () => `Hello World`;
console.log(greet3()); //Hello World

//nested function
function outerFunction() {
    function innerFunction() {
        console.log('Inside inner function');
    }
    innerFunction();
    console.log('Inside outer function');
}

outerFunction(); //output: Inside inner function, Inside outer function

//function inside object
let person = {
    name: 'Prachanda',
    age: 25,
    greet: function () { //also can write greet() {}
        console.log(`Chor ${this.name}`);
    }
};

person.greet(); //Chor Prachanda

//function inside array
let numbers = [1, 2, 3, 4, 5];
let sum = 0;
numbers.forEach(function (num) { //number is array and function num is element of array
    sum += num;
});
console.log(sum); //15


//getting inner function value
function outer(){
    return function inner(x,y){
        console.log(x,y)
    };
};

let innerFunction = outer();
innerFunction(5,10); //5 10

//or
outer()(5,10); //5 10

//IIFE (Immediately Invoked Function Expression): function that needs to execute only at once in its current scope and not in other scope or reuse
(function(){ //parenthesis is used to make it function expression
    console.log('IIFE'); 
})();

//or   
let iife= (function(){ //commonly assigned to variable
    console.log('IIFE');
})();

//IIFE in arrow function
(() => console.log('IIFE'))();

//type of function
console.log(typeof add); //function

//Q: is function object?
//A: Yes, function is object in javascript and can also be created as wrapper object

//two reasons:
//reason 1: function can have properties and methods
function greet(){
    console.log('Hello');
}

greet.language = 'English'; //using dot operator to add property to function
console.log(greet.language); //English
greet.length; //0

//reason 2: object constructor function + initialization as wrapper object

//function constructor as wrapper object
let greet = new Function('console.log("Hello")'); //wrapper object using new keyword
greet(); //Hello

//object constructor function
function person1(name){ //function as blueprint
    this.name = name; //this keyword is used to refer object like in object
} //body of function is like template or pre-defined design

let person2 = new person1('John'); //new instance follows above template
console.log(person2.name); //John

typeof person1; //function
typeof person2; //object //instance of person1 type changed to object after instantiation

