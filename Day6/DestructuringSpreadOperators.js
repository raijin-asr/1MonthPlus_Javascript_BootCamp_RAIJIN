//Destructuring assignment and spread operator are modern features of JavaScript that allow us to extract multiple values from arrays and objects and merge them into one.
//used with object,array and sometimes functions parameters and with string
//make code cleaner and more readable

//Destructuring assignment

//Array destructuring
let studentList = ['John', 'Bob', 'Alice'];
//instead of doing let student1= studentList[0], student2= studentList[1], student3= studentList[2];    //old way
let [student1, student2, student3] = studentList; //modifying the array
console.log(student1); //John
console.log(student2); //Bob
console.log(student3); //Alice

//default values in array destructuring
let studentList2 = ['John', 'Bob'];
let [student4, student5, student6='Tom'] = studentList2;
console.log(student4); //John
console.log(student5); //Bob
console.log(student6); //Tom from default value

//Swapping variables using array destructuring
let a=5, b=10;
[a, b] = [b, a];
console.log(a); //10
console.log(b); //5

//Object destructuring
let student = {
    name: 'John',
    age: 25
};

let {name, age} = student;
console.log(name); //John
console.log(age); //25

//default values in object destructuring
student2 = { //no let
    name: 'Ram'
};

let {name: studentName, age: studentAge=25} = student2; //studentName is alias
console.log(studentName); //John
console.log(studentAge); //25 from default value

//Nested object destructuring
student3 = {
    name: 'John',
    age: 25,
    address: {
        city: 'New York',
        country: 'USA'
    }
};

let {name: studentName2, age: studentAge2, address: {city, country}} = student3;
console.log(studentName2); //John
console.log(studentAge2); //25
console.log(city); //New York
console.log(country); //USA

//Spread operator
//Array spread operator
let animalList = ['Cat', 'Dog', 'Lion'];
const [animal1, ...restAnimals] = animalList; //rest operator to get the rest of the elements using spread operator(...)
console.log(animal1); //Cat
console.log(restAnimals); //['Dog', 'Lion'] //rest data comes in array

//Object spread operator
let person = {
    name: 'Ram',
    age: 25,
    city: 'Kathmandu'
};

let {name: personName, ...restPerson} = person;
console.log(personName); //Ram
console.log(restPerson); //{age: 25, city: 'Kathmandu'} //rest data comes in object

//merging objects using spread operator
let person2 = {
    name: 'Shyam',
    age: 30
};

let address2 = {
    city: 'Pokhara'
};

let person4 = {
    ...person2, //like function call
    ...address2
};

console.log(person4); //{name: 'Shyam', age: 30, city: 'Pokhara'}

//spread operator with functions
function sum(a, b, c){
    return a+b+c;
}

let numbers = [1, 2, 3];
console.log(sum(...numbers)); //6

//spread operator with strings
let name2 = 'John';
console.log([...name2]); //['J', 'o', 'h', 'n']

//assigning object lik eObject.assign() method using spread operator
let person5 = {
    name: 'Ram',
    age: 25
};

a= {...person5}
console.log(a); //{name: 'Ram', age: 25}

