//High Order Function
//accepts function as argument or returns function or both
//make code for modular, short and easy to read
//Example: Array.prototype.map(), Array.prototype.filter(), Array.prototype.reduce()
//Example: map, filter, reduce, sort

//normal Example
function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function result(fn, a, b) { //high order function
    return fn(a, b);
}

console.log(result(add, 10, 5)); //15
console.log(result(sub, 10, 5)); //5

//another simple use of high order function
let numbers = [1, 2, 3, 4, 5]; //array

const square = (n) => n*n; //arrow function //or use Math.pow(n,2)
const cube =(n) => n*n*n; //arrow function

//DRY= Don't repeat yourself
function calculate(fn){ //using high order function to calculate square and cube at once in less code
    let output= []; //empty array to store output
    for(n of numbers){
        output.push(fn(n)); //calling fn function
    }
    return output;
}

console.log(calculate(square)); //[1, 4, 9, 16, 25]
console.log(calculate(cube)); //[1, 8, 27, 64, 125]


//filtering student by class and section-------------
function Student(name, grade, section) { //function constructor
    this.name = name;
    this.class = grade;
    this.section = section;
}

let students = [ //array of objects
    new Student('Alice', 5, 'A'),
    new Student('Bob', 10, 'B'),
    new Student('John', 9, 'A'),
    new Student('Doe', 8, 'D')
];
const filterByClass = (s) => { s.grade == 9? true: false; }; //arrow function
const filterBySection = (s) => { s.section == 'A'? true: false; }; //arrow function


function filterStudent(students, fnLogic) { //high order function
    let result = [];
    for(let i=0; i<students.length; i++){
        if(fnLogic(students[i])){
            result.push(student[i]);
        }
    }
    return result;
}

console.log(filterStudent(students, filterByClass));  //[{name: 'John', class: 9, section 'A'}]
console.log(filterStudent(students, filterBySection));  //[{name: 'Alice', class: 5, section 'A'}, {name: 'John', class: 9, section 'A'}]


//Direct Approach----------------
let filterResult = students.filter(function (student) {
    return student.class > 8 && student.section === 'A';
});
console.log(result); //[{name: 'John', class: 9, section: 'A'}] 

//sorting student by class
let sortResult1 = students.sort(function (a, b) {
    return a.grade - b.grade;
})
console.log(sortResult); //[{name: 'Alice', class: 5, section 'A'}, {name: 'Doe', class: 8, section 'D'}, {name: 'John', class: 9, section  'A'}, {name: 'Bob', class: 10, section 'B'}]

//sorting student by name
let sortResult2 = students.sort(function (a, b) {
    return a.name.localeCompare(b.name);
})
console.log(sortResult); //[{name: 'Alice', class: 5, section 'A'}, {name: 'Bob', class: 10, section 'B'}, {name: 'Doe', class: 8, section 'D'}, {name: 'John', class: 9, section 'A'}]


//In Built High Order Function
//forEach: returns NOTHING, just iterate over array
let number = [1, 2, 3, 4, 5];
number.forEach(function (num) { //array.forEach(callback function) has another function as argument
    console.log(num); //1, 2, 3, 4, 5 
});

number.forEach(function (value, index,array) { //first parameter is value and second is index and third is whole array
    console.log(value); //1, 2, 3, 4, 5
    console.log(index); //0, 1, 2, 3, 4
    console.log(array); //[1, 2, 3, 4, 5] //whole array
});


//map: transforms to new one and returns new mapped array with same length, each element is result of callback function
let number1 = [1, 2, 3, 4, 5];
let result = number1.map(function (num) { //array.map(callback function)
    return num * 2;
});
console.log(result); //[2, 4, 6, 8, 10]

let currency = [100, 200, 300, 400, 500];
let result = currency.map(function (amount) {
    return '$' + amount + 'and' + 'Rs.' + amount * 100;
});

console.log(result); //["$100 and Rs.10000", "$200 and Rs.20000", "$300 and Rs.30000", "$400 and Rs.40000", "$500 and Rs.50000"]


//filter: returns new array with elements that pass the condition of callback function
let number2 = [1, 2, 3, 4, 5];
let result = number2.filter(function (num) {
    return num > 2;
});
console.log(result); //[3, 4, 5]


//reduce: returns single value from array //for sum, product, max, min
let number3 = [1, 2, 3, 4, 5];
let result = number3.reduce(function (acc, num) {
    return acc + num; //acc is accumulator and num is element of array
}, 0); //0 is initial value of accumulator
console.log(result); //15


//sort: returns sorted array
let number4 = [1, 2, 3, 4, 5];

//in js, using sort function, first js convert number to string and then compare
console.log(number4.sort()); //[1, 2, 3, 4, 5] //sort in ascending order
//output could be [1,4,2,5,3] because of string comparison

//using "high order function" to sort in ascending order
let result = number4.sort(function (a, b) {
    return a - b; //if -ve, a comes first, if +ve, b comes first, 0: both value same
});

console.log(result); //[1, 2, 3, 4, 5]  

//another case
let data= [1,2,"a","A",3,4];
let output= data.sort(); //["A", 1, 2, 3, 4, "a"]

//in descending order
let result = number4.sort(function (a, b) {
    return b - a; //if -ve, a comes first, if +ve, b comes first, 0: both value same
});

//chaining of high order function
//map().filter().reduce()
let number5 = [1, 2, 3, 4, 5];
let result = number5.map(function (num) {
    return num * 2;
}).filter(function (num) {
    return num > 5;
}).reduce(function (acc, num) {
    return acc + num;
}, 0); 
//output: 2, 4, 6, 8, 10 //map 
//takes above output: 6, 8, 10 //filter
//again takes above output: 24 //reduce //final output

console.log(result); //24
