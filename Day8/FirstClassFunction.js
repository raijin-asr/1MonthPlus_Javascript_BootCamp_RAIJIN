//First Class Function: function can be 1) assigned to variable, 2) passed as argument and 3) returned from another function

//1) assigned to variable
let greet = function () {
    return 'Hello World';
};

console.log(greet()); //Hello World

//2) passed as argument
function greet2(fn) {
    console.log(fn());
}

greet2(greet); //Hello World

//3) returned from another function
function createGreet() {
    return function () {
        return 'Hello World';
    };
}

let greet3 = createGreet();
console.log(greet3()); //Hello World

//or
console.log(createGreet()()); //Hello World //function inside function