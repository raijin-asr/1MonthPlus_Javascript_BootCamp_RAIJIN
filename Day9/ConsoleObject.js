//Console Object: The Console object provides access to the browser's debugging console (e.g. the Web Console in Firefox). The specifics of how it works varies from browser to browser, but there is a de facto set of features that are typically provided.
//built in global object, used for logging, debugging and displaying messages
//not part of js but available in browser and js environment for development purpose
//methods: log(), error(), warn(), info(), clear(), time(), timeEnd(), table(), count(), group(), groupEnd()

//1. log(): used to log the message to the console
console.log("Hello World"); //Hello World

//2. error(): used to log error message to the console
console.error("This is an error message"); //This is an error message

//3. warn(): used to log warning message to the console
console.warn("This is a warning message"); //This is a warning message

//4. info(): used to log information message to the console
console.info("This is an information message"); //This is an information message

//5. clear(): used to clear the console
//console.clear(); //clears the console

//6. time(): used to start a timer
console.time("Time taken"); //Time taken

//7. timeEnd(): used to end a timer
console.timeEnd("Time taken"); //Time taken: 0.000000ms

//8. table(): used to display data in tabular format
console.table({name: "Ameer", age: 25, city: "Karachi"}); //displays data in tabular format

//9. count(): used to count the number of times count() is called
for(let i=0; i<5; i++){
    console.count(i); //counts the number of times count() is called
}

//10. group(): used to group the log messages
console.group("Group 1 name"); //Group 1
for(let i=0; i<3; i++){
    console.log(i); //0 1 2
}
console.groupEnd; //end of Group 1

//11. groupEnd(): used to end the group
console.groupEnd(); //ends the group

//console playground of browser: where we can test console methods
//directly manipulate the DOM, test js code, and see the output in console

//REPL: Read, Evaluate, Print, Loop Environment

