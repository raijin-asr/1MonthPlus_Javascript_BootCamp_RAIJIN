//callback functions:   function passed as argument to another function
//executed after parent function is executed
//used to handle tasks like responding to user input, fetching data from server, making API requests, reading files, etc.

//used to isolate codes and inner function has local scope inside function but callback has access to outer function
//async behavior and not predictable

//Example 1
function greet(name){
    console.log('Hello ' + name);
}

function processUserInput(callback){
    var name = 'John';
    callback(name); //needs to call the function to execute
}

processUserInput(greet);

//Example 2
function buttonClick(){
    console.log('Button clicked');
}

function clickEvent(callback){
    callback();
}

clickEvent(buttonClick);

//Example 3
function add(a, b){
    return a + b;
}

function multiply(a, b){
    return a * b;
}

function calculate(a, b, callback){ //callback function passed as argument in higher order function
    return callback(a, b);
}

console.log(calculate(2, 3, add));
console.log(calculate(2, 3, multiply));

//difference between Higher Order Function and Callback Function

//1. Higher Order Function: function that takes another function as argument or returns a function
// while Callback Function: function passed as argument to another function

//2. Higher Order Function: used to isolate codes and inner function has local scope inside function but callback has access to outer function
// while Callback Function: used to handle tasks like responding to user input, fetching data from server, making API requests, reading files, etc.