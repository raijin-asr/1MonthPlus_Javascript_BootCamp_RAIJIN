//variables: var, let, const
 
//var has global scope, accessed in for, if and function
for(var i=0; i<5; i++){
    console.log("i value",i);
}

if(true)   {
    console.log("i value in if",i);
}

function test(){
    console.log("i value in function",i);
}

test(); //function call

// to solve issue of var being global scope, let and const are introduced

//let has block scope, accessed only in block
for(let j=0; j<5; j++){ //let value can be changed
    console.log("j value",j);
}

if(true)   {
    //console.log("j value in if",j); //error
}

//const has block scope, accessed only in block
const pi = 3.14; //constant value cant be changed
console.log("pi value",pi);

