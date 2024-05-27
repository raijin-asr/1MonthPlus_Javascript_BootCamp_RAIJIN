//use QUOKKA extension in VSCODE for JS output

//Ternary
const isUserLoggedIn = true;
const isUserAdmin = false;

isUserLoggedIn ? console.log('User is logged in') : console.log('User is not logged in');

//nested ternary
isUserLoggedIn ? isUserAdmin ? console.log('User is logged in and is an admin') : console.log('User is logged in but is not an admin') : console.log('User is not logged in');

//AND
if(isUserAdmin && isUserLoggedIn){
    console.log('User is logged in and is an admin');
};

//using ternary operator in AND
(isUserAdmin && isUserLoggedIn) ? console.log('User is logged in and is an admin') : console.log('User is not logged in or is not an admin');

//using AND in ternary operator to not print false part
isUserAdmin && isUserLoggedIn && console.log('User is logged in and is an admin');

//OR
if(isUserAdmin || isUserLoggedIn){
    console.log('User is either logged in or is an admin');
}

// ?? : Nullish Coalescing
//putting default value in null
let isCoder = null; //or undefined
console.log(isCoder ?? 'Not Coder'); //if there is data in isCoder, then nothing happens, value assigned is printed, else 'Not Coder' is printed

// Comparison Operator (===, !==)
// double equals (==) is used for type coercion, triple equals (===) is used for strict comparison
// double equals (==) only checks value and tripe equals checks value and data type both

let num1= "1";
let num2=1;
 if(num1==num2){ //type coercion : double equals(==)
     console.log('Both are equal'); //returns true
    }
 else{
    console.log('Both are not equal');
    }

//tripe equals(===)
if(num1===num2){ //strict comparison : triple equals(===)
    console.log('Both are equal');
}
else{
    console.log('Both are not equal'); //returns false
}

