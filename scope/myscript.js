// Two types of scope : Global and Local
// Variables defined inside a function are in local scope,
// while variables defined outside of a function are in the global scope. Each function when invoked creates a new scope.
// var s = "overpopulation";
// var ar = [];
// ar = s.split("");
// // alert(ar);
// for (var i = 0; i < ar.length; i++) {
//     console.log(ar[i]);
// }

// Global Scope
var name = "Bob";
console.log(name); // logs 'Bob' name in global scope
// Global Scope
function printName() {
    // Local Scope #1
    var scrore = 1;
    console.log(name);
    // console.log("my score::::" + scrore); // name is accessible here and everywhere else in this page
}

printName(); // will print 'Bob'

// Global Scope
function printAge() {
    //Variables defined inside a function are in the local scope
    // Local Scope #2
    var age = 23;
    console.log(age); // age is local here it is not available outside function

    // Local Scope #1
    function printSkills() {
        // Local Scope #3
        var skills = "React Developer";
        console.log(age); // age is avaialbe here as printSkills function is inside the scope of printAge
        console.log(skills);
    }

    printSkills();
}
printAge();

printSkills(); // Error printSkills is not defined
console.log(age); // Error : age is not Defined

//Block statements like if and switch conditions or for and while loops,
//unlike functions, don't create a new scope.
//Variables defined inside of a block statement will remain in the scope they were already in
//
if (true) {
    var nametwo = "June";
}
console.log(nametwo);

// Global scope lives as long as your application lives.
// Local Scope lives as long as your functions are called and executed.

// Lexical Scope
// Lexical Scope means that in a nested group of functions,
// the inner functions have access to the variables and other resources of their parent scope.
// the exact mechanism used when a JavaScript interpreter is trying to find a particular variable. 
//It starts at the innermost scope being executed at the time, 
//and continue until the first match is found,
//no matter whether there are other variables with the same name in the outer levels or not
function grandfather() {
    var name = 'John';
    // likes is not accessible here
    function parent() {
        // name is accessible here
        // likes is not accessible here
        function child() {
            // Innermost level of the scope chain
            // name is also accessible here
            var likes = 'Coding';
        }
    }
}

// variables with the same name can be specified at multiple layers of nested scope.
// In such case local variables gain priority over global variables.
//  This type of behavior is called shadowing. Simply put, the inner variable shadows the outer.
var hobby = "Reading";

function myHobby() {
    var hobby = "Music";
    //hobby = "music"
    console.log(hobby); // Music
}

console.log(hobby); //Reading
myHobby();

console.log(hobby); //Music

//If a local variable is assigned without first being declared with the var keyword, 
//it becomes a global variable. 
//To avoid such unwanted behavior you should always declare your local variables before you use them. 
//Any variable declared with the var keyword inside of a function is a local variable.
// It’s considered best practice to declare your variables.

// Variables created without the keyword var, are always global, even if they are created inside a function.
// Hoisting
// JavaScript variables consist of two parts: a declaration and an assignment
var state; // variable declaration
state = "ready"; // variable definition (assignment)

var state = "ready"; // declaration plus definition

// We already know that any variable declared within a scope belongs to that scope. 
// But what we don’t know yet, is that no matter where variables are declared within 
// a particular scope,
//  all variable declarations are moved to the top of their scope (global or local).
//  This is called hoisting, as the variable declarations are hoisted to the top of the scope.
//  Note that hoisting only moves the declaration. Any assignments are left in place

console.log(city); // output: undefined because we reference it before the actual assignment
var city = "New York"; // variable definition (assignment)

//Here is how the code is interpreted by a JavaScript engine

var city; // moved to the top
console.log(city);
city = "New York"; // left in place

//function declaration and function expression

// function showState() {}          // function declaration
// var showState = function() {};   // function expression

//  Function declarations are hoisted completely.
//  This means that the entire function’s body is moved to the top.
//  This allows you to call a function before it has been declared:

showState(); // output: Ready

function showState() {
    console.log("Ready");
}

var showState = function() {
    console.log("Idle");
};

// JavaScript engine moves the declaration of showState() function, 
//and all its content, to the beginning of the scope. The code is interpreted like this:
//
// function showState() {     // moved to the top (function declaration)
//   console.log("Ready");
// } 

// var showState;            // moved to the top (variable declaration)

// showState();  

// showState = function() {   // left in place (variable assignment)
//   console.log("Idle");
// };

//only the function declaration is hoisted, 
//but the function expression is not. 
//When a function is assigned to a variable, 
//the rules are the same as for variable hoisting 
//(only the declaration is moved, while the assignment is left in place).
//the function declaration takes precedence over the variable declaration


// function declaration versus variable assignment, variable assignment takes priority

// var showState = function() {
//   console.log("Idle");
// };

// function showState() {
//   console.log("Ready");
// } 

// showState();            // output: Idle


// Interpreted as
// function showState(){        // moved to the top (function declaration)
//   console.log("Ready");
// } 

// var showState;               // moved to the top (variable declaration)

// showState = function(){      // left in place (variable assignment)
//   console.log("Idle");
// };

// showState();
// 
// All declarations, both functions and variables, are hoisted to the top of the containing scope, before any part of your code is executed.
// Functions are hoisted first, and then variables.
// Function declarations have priority over variable declarations, but not over variable assignments
