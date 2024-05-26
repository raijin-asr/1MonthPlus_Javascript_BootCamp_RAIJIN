// also known as string literals
// allow to embed expressions in the string
// use backticks (`) to perform template interpolation
// use ${} to embed expressions or ${expression} to embed expressions
// we can achieve multiline strings, direct variable usage, and hookup an expression making easy to read and understand code

//string simply concatenation
let firstName= "Ameer";
let lastName= "Rai";
let fullName= firstName+" "+lastName; //for space, we need to add manually
console.log("simple Concatenation",fullName);

//we can do above using string template literals
let fullName1= `${firstName} ${lastName}`;
console.log("using template literals",fullName1);

//multiline strings
let fullName2= `${firstName} ${lastName}


Hello`;
console.log("using template literals",fullName2);

//hookup an expression
let a= 10;
let b= 20;
let sum= `${a} + ${b} = ${a+b}`;
console.log("using template literals",sum);

//hookup function as an expression
function hello(){
    return "Hello World";
}

let message= `Message: ${hello()}`;
console.log("using template literals",message);
