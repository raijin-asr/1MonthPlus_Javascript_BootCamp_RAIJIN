//Builtins objects
//inbuilt objects(in lowercase or both) in JS like Math, Date, Array, String, Number, Boolean, Object, Function, RegExp, Error, Symbol, Promise, Map, Set, WeakMap, WeakSet, JSON, ArrayBuffer, DataView, TypedArray, Intl, WebAssembly, etc.
//console, window, document
//inbuilt wrapper(first word capitalized) objects: String, Number, Boolean, Symbol, BigInt, Object, Function, Array, RegExp, Date, Error, Map, Set, WeakMap, WeakSet, etc.

//Math
//only works with Number Type not with bigInt, string, boolean, etc.
Math.max(1, 2, 3, 4, 5); //5
Math.min(1, 2, 3, 4, 5); //1
Math.round(1.5); //2
Math.abs(-1); //1

Math.ceil(1.1); //2 //give higher value before decimal(.)
Math.floor(1.9); //1 //gives same or lower value before decimal(.)

Math.random(); //0.123456789 //changes after every refresh
Math.random() * 10; //0.123456789
Math.random() * 10 + 1; //1.123456789
Math.floor(Math.random() * 10 + 1); //1

Math.pow(2, 3); //8
Math.sqrt(9); //3

Math.PI; //3.141592653589793
Math.E; //2.718281828459045

//only works with Number Type not with bigInt, string, boolean, etc.
Math.max(1, 2, 3, 4, 5n); //error in 5n bigint

//Date
//defining normal date object, has less feature
Date.now(); //1626820000000 //current date in milliseconds timestamp format and convert it to see dd/mm//yy format

//defining wrapper date object and has moore feature
let date = new Date();
date; //Tue Jul 20 2021 19:00:00 GMT+045( kathmandu time)

date.getDate(); //20 //date
date.getDay(); //2 //tuesday
date.getFullYear(); //2021 //year
date.getHours(); //19 //hours
date.getMinutes(); //0 //minutes
date.getSeconds(); //0 //seconds
date.getMilliseconds(); //0 //milliseconds
date.getMonth(); //6 //month starts from 0, 0-11
date.getTime(); //1626820000000 //timestamp in milliseconds

new Date("2024 May 29") //gives date object of that date
new Date("2024-05-29").getDay //3 //wednesday

let date1 = new Date(2024,5,28); //2024-06-28

let date2= new Date().toISOString(); //2021-07-20T13:15:00.000Z //another format of date
let date3= new Date().toISOString().split("T")[0]; //["2021-07-20", "13:15:00.000Z"] //splitting date and time
//in timestamp format, index starts form 0
//in iso format, index starts from 1

//Builtin Mistakes in JS
//in datatypes
typeof null; //object //null is not an object, it is a primitive datatype
typeof undefined; //undefined
typeof navigator; //undefined

typeof Date; //function //Date is a not function but object

//can write new keyword in Bigint, Math, Symbol, etc.
BigInt(10); //10n
new BigInt(10); //error
new Math(); //error
new Symbol(); //error

