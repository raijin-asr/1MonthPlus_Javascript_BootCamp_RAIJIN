let a=1;    //int
let b=1.1;  //float
let c="hello"; //string
let d="1"; //string

console.log("type of a",typeof a);
console.log("type of b",typeof b);
console.log("type of c",typeof c);
console.log("type of d",typeof d);

//string
let e= new String("hello"); //wrapper object with extra features
console.log("type of e",typeof e); //object
e.toUpperCase(); //function of wrapper object

//number
let f= new Number(1); //wrapper object with extra features
let g= 1234567898766524; //number can be range from -2^53 to 2^53
//precision upto 15 digits and after that it will be rounded off
console.log(a+1); 

//bigint
let h= 1234567898766524n; //bigint can be range from -2^53 to 2^53
//in bigint precision is better than number
let i = BigInt(1234567899123456) //bigint is not constructor and has no new keyword
console.log("type of i",typeof i); //object
console.log(h+1n);

//boolean
let j= true; //boolean
let k= new Boolean(true); //wrapper object with extra features
console.log("type of j",typeof j); //boolean
console.log("type of k",typeof k); //object

//undefined
let l; //undefined
console.log("type of l",typeof l); //undefined

//null
let m= null; //null
console.log("type of m",typeof m); //object

//symbol
let n= Symbol(); //symbol
let o= Symbol("hello"); //symbol
let p= Symbol("hello"); //symbol
console.log("type of n",typeof n); //symbol
console.log(o==p); //false because symbol is unique

//object
let q= {}; //object
let r= new Object(); //object
let s= new Date(); //object
let t= new Array(); //object
let u= new Function(); //object
let v= new RegExp(); //object
let w= new Error(); //object
// let x= new Promise(); //object
let y= new Map(); //object
let z= new Set(); //object
console.log("type of q",typeof q); //object
console.log("type of r",typeof r); //object
console.log("type of s",typeof s); //object
console.log("type of t",typeof t); //object
console.log("type of u",typeof u); //object
console.log("type of v",typeof v); //object
console.log("type of w",typeof w); //object
console.log("type of x",typeof x); //object
console.log("type of y",typeof y); //object
console.log("type of z",typeof z); //object


let student = {
    name: "Ameer",
    age: 50,
    marks: [10,20,30],
    address: {
        city: "Kathmandu",
        state: "Bagmati"
    }
};

//parse string to int or typecasting
let num1= parseInt("10.5"); //10 
let num4= +("10.5"); //10 (use + sign to convert string to number)
let num2= parseFloat("10.5"); //10.5
let num3= Number("10.5"); //10.5
console.log("num1",num1);
console.log("num2",num2);
console.log("num3",num3);