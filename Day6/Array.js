//array
//grouping of similar data types
//use [] to declare array

let name1 = 'John';
let name2 = 'Bob';
let nameList = ['John', 'Bob'];

nameList[1]; //Bob  //indexing starts from 0

//array is object
console.log(typeof nameList); //object

let studentList= new Array('John', 'Bob', 'Alice'); //constructor object

let student1 =[1, 'John', true, 5.5]; //array can have different data types

//array is known as list in python

//inbuilt array functions
console.log(studentList.length); //3
console.log(studentList[0]); //John

//push() - add element at the end of the array
studentList.push('Tom');
console.log(studentList); //['John', 'Bob', 'Alice', 'Tom']

//pop() - remove element from the end of the array
studentList.pop();
console.log(studentList); //['John', 'Bob', 'Alice']
//delete
delete studentList[studentList.length-1]; //delete last element

//unshift() - add element at the beginning of the array
studentList.unshift('Ameer');
console.log(studentList); //['Ameer', 'John', 'Bob', 'Alice']

//shift() - remove element from the beginning of the array
studentList.shift();
console.log(studentList); //['John', 'Bob', 'Alice']

//splice() - add or remove element from the array
studentList.splice(1, 0, 'Ameer', 'Tom'); //add 'Ameer' and 'Tom' at index 1
console.log(studentList); //['John', 'Ameer', 'Tom', 'Bob', 'Alice']

studentList.splice(1, 2); //remove 2 elements from index 1
console.log(studentList); //['John', 'Bob', 'Alice']

//concat() - merge two arrays
let studentList2 = ['Tom', 'Jerry'];
let studentList3 = studentList.concat(studentList2);
console.log(studentList3); //['John', 'Bob', 'Alice', 'Tom', 'Jerry']

//slice() - copy elements from one array to another array
let studentList4 = studentList3.slice(1, 3);
console.log(studentList4); //['Bob', 'Alice']

//reverse() - reverse the array
studentList4.reverse();
console.log(studentList4); //['Alice', 'Bob']

//sort() - sort the array
studentList4.sort();
console.log(studentList4); //['Alice', 'Bob']

//fill() - fill the array with a static value
studentList4.fill('Ameer');
console.log(studentList4); //['Ameer', 'Ameer']

//map() - iterate through the array
let studentList5 = studentList4.map((student) => student + ' Ali'); //add 'Ali' to each element
console.log(studentList5); //['Ameer Ali', 'Ameer Ali']

//filter() - filter the array
let studentList6 = studentList5.filter((student) => student.includes('Ali')); //filter elements which contains 'Ali'
console.log(studentList6); //['Ameer Ali', 'Ameer Ali']

//find() - find the element in the array
let studentList7 = studentList6.find((student) => student.includes('Ali'));
console.log(studentList7); //Ameer Ali

//join() - join the array elements
let studentList8 = studentList7.join(' & ');
console.log(studentList8); //Ameer Ali & Ameer Ali

//reduce() - reduce the array to a single value
let studentList9 = studentList5.reduce((accumulator, student) => accumulator + ' or ' + student);
console.log(studentList9); //Ameer Ali or Ameer Ali

//forEach() - iterate through the array
studentList5.forEach((student) => console.log(student)); //Ameer Ali, Ameer Ali

//every() - check if all elements satisfy the condition
let studentList10 = studentList5.every((student) => student.includes('Ali'));
console.log(studentList10); //true

//some() - check if any element satisfy the condition
let studentList11 = studentList5.some((student) => student.includes('Ali'));
console.log(studentList11); //true

//indexOf() - find the index of the element
let studentList12 = studentList5.indexOf('Ameer Ali');
console.log(studentList12); //0

//lastIndexOf() - find the last index of the element
let studentList13 = studentList5.lastIndexOf('Ameer Ali');
console.log(studentList13); //1

