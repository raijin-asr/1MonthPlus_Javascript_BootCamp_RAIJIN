//objects and CRUD operations
//data type that can store multiple values
//key value pairs where key is a string and value can be anything
//grouping of variables, easy to maintain data

let student = { //normal object
    name: 'Ameer',
    age: 50,
};

let student2 = new Object ({ //wrapper object
    name: 'Ameer',
    age: 50,
}); //has more properties

console.log(student);
console.log(student['name']); //accessing value using key
console(student.name);
console(student.age);

//we can create function inside object
let student1 = {
    name: 'Ameer',
    age: 50,
    greet: function(){ //has no name of function in object
        console.log('Hello');
    },
    others(){ //another way to create function inside object
        console.log('Others');
    }
};

console.log(student1.greet()); //calling function inside object

//modify object
student1.name = 'Ram'; //changing value of key

//putting new property from outside to object
student1.roll = 10;

student1.work = function(){
    console.log('Working');
};

console.log(student1); //with new property

//delete property
delete student1.age;

//this keyword inside object
let student3 = {
    name: 'Ameer',
    age: 50,
    greet: function(){
        console.log('Hello ' + this.name); //this keyword refers to object
        this.others(); //accessing another function inside object
    },
    others(){
        let address='Kathmandu'; //local variable
        console.log('Others');
        return address; //returning local variable
        // return this.age; //returning address of object
    }
};

//nest` object
let student4 = {
    name: 'Ameer',
    age: 50,
    address: {
        city: 'Kathmandu',
        country: 'Nepal'
    }
};

//accessing nested object
console.log(student4.address.city);

//global object
Object.keys(student4); //returns keys of object
Object.values(student4); //returns values of object
Object.entries(student4); //returns key value pairs of object

let student5 = {}; //empty object
Object.assign(student4, student5); //adding new property to object

console.log(Object.keys(student4));

//freeze object to lock object
const student6 = { //constant variable also change in object
    name: 'Ameer',
    age: 50,
    address: {
        city: 'Kathmandu', //can't be changed using freeze
        country: 'Nepal'
    }
};
"use strict" //use strict to freeze object
Object.freeze(student6); //freeze object
//nothing changes but
//only can freeze to first level of object but nested ones

//so use deep freeze to lock and freeze any level inside object
//deep freeze function: not yet implemented in JS
function deepFreeze(obj){ //implementing from some online docs
    let propNames = Object.getOwnPropertyNames(obj);
    propNames.forEach(function(name){
        let prop = obj[name];
        if(typeof prop === 'object' && prop !== null){
            deepFreeze(prop);
        }
    });
    return Object.freeze(obj);
}

deepFreeze(student6); //freeze object

student6.address.city = 'Pokhara'; //can't change   due to deep freeze

//checking if object is frozen or not using global object "Object"
Object.isFrozen(student6); //returns true if frozen

