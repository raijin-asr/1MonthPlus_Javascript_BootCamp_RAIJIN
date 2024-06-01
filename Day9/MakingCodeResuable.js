//practice js in JSChallenger, W3Schools, and HackerRank

//in index.html : <script  src="./Day9/MakingCodeResuable.js" type="module"></script> <!-- using type="module" sets defer="defer" -->
//some browser does not support type module, so use: <script nomodule src="file.js"></script>
//but have to write and combine all import and export code in one file "file.js"

//modules, modularity, and making code reusable
//two techniques:
//1. ES6 modules: import and export; only supported by JS engines that support ES6
//2. CommonJS modules: require and module.exports, old module system used in Nodejs

//ES6 modules: export-------------------
//Two types of exports:
//1. Default export: only one default export per module
//2. Named export: multiple named exports per module

const value= "Ameer";

//exporting function to another file
function add(a, b){
    return a+b;
}

//exporting object to another file
let student = {
    name: "Ameer",
    age: 25
};

const valuetoExport= "Ameer Default Exported Value";

//class
export class Area{ //for default, write export default class Area{}
    constructor(length, breadth){ //exporting named class
        this.length= length;
        this.breadth= breadth;
    }

    getArea(){
        return this.length*this.breadth;
    }
}

//1. Default Export
export default valuetoExport; //only share one value, it is exported by default if no other value exported

//2. Named Export
//exporting a value to another file; also known as named export
export {value, add, student, Area}; //exporting multiple values


//in common JS, we use module.exports in export file and require in import file
module.exports= value; //default export
module.exports= {value, add, student, Area}; //named export

module.exports.add= function(a,b){
    return a+b;
}   //exporting function


