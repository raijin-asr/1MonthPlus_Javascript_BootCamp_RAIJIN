//Nested template literals
let firstName= "Ameer";
let lastName= "Rai";
let fullName= `${firstName} ${lastName}`;
 let message= `Hello: ${fullName}!
 name is lowercase: ${'${fullName}'.toLowerCase()} `; //nested template literals
console.log("using nested template literals",message);

//Tagged template literals
//more advanced, allows to parse template literals with a function
//first argument is an array of string literals and remaining arguments are expressions
//Library using tagged template literals: styled-components, graphql-tag, lit-html, hyperHTML, glamor, emotion, etc
//tag`$ {expression}` is a function call

let data= personal_data`Hello: ${firstName} ${lastName}!`;
 function personal_data(strings, expression1,expression){
        console.log("strings",strings);
        console.log("expression1",expression1);
        console.log("expression2",expression2);
        return "Hello World";
    }

 //no need to call function name explicitly, it will be called automatically
 //can modify data variable value with return value of function

console.log("using tagged template literals",data); //print return value of function name
