//for loop
for(let i=0;i<5;i++){
    console.log(i);
}

let i=0;
for(;i<5;){ //no need to declare i again
    console.log(i);
    i++;
}

//for loop in array
let studentList = ['John', 'Bob', 'Alice'];
for(let i=0;i<studentList.length;i++){
    console.log(studentList[i]);
}

//for-in loop in object and can also be used in array
let student = {
    name: 'John',
    age: 25
};

for(let key in student){  //for(variable in object)
    console.log(key); //name, age
    console.log(student[key]); //John, 25
}

//for-each loop
studentList.forEach(function(student){ //function(value,index,array)
    console.log(student); //John, Bob, Alice
});

//for-of loop in array and string
//for-of loop in array
let studentList2 = ['Ram', 'Sita', 'Laxman'];
for(let student2 of studentList2){ //for(element of Iterable)
    console.log(student2); //Ram, Sita, Laxman
}

//for-of loop in string
let str = 'Hello'; //in string
for(let char of str){
    console.log(char); //H, e, l, l, o
}

//for-in loop in nested object
let student3 = {
    name: 'John',
    age: 25,
    address: {
        city: 'New York',
        country: 'USA'
    }
};

for(let key in student3){
    console.log(key); //name, age, address
    console.log(student3[key]); //John, 25, {city: 'New York', country: 'USA'}

    let value = student3[key];
    if(typeof value === 'object'){ //nested loop for nested object value
        for(let key2 in value){
            console.log(key2); //city, country
            console.log(value[key2]); //New York, USA
        }
    }
}

//while loop----------------
let j=0;
while(j<5){
    console.log(j);
    j++;
}

//do-while loop
let k=0;
do{
    console.log(k);
    k++;
}
while(k<5);

