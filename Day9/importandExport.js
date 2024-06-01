//ES6 Modules: import---------------
//1. importing default value from another file
import valuetoExport from './MakingCodeResuable.js';

//reusing default exported value
console.log(valuetoExport); //Ameer Default Exported Value


//2. importing Naamed exports from another file
import {value as valueVar,add as addFunc, student as StuObj, Area as AreaClass} from './MakingCodeResuable.js'; //aliasing imported values

//reusing named exported values
console.log(valueVar); //Ameer
console.log(addFunc(2,3)); //5
console.log(StuObj); //{name: "Ameer", age: 25}

//importing class and using it method feature using dot operator
let area1= new AreaClass(10,20);
console.log(area1.getArea()); //200
//or console.log(new AreaClass(10,20).getArea()); //200

//common JS, import-----------
const value= require('./MakingCodeResuable.js');
console.log(value); //Ameer Default Exported Value

const {value, add, student, Area}= require('./MakingCodeResuable.js');