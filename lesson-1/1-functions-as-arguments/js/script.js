// These are often called callbacks. It is very common
// to pass functions as arguments to other ***
// functions and have the receiving function execute them.

//Normal way of declearing a function
function showMeMessage() {
  console.log("normal function");
}
showMeMessage();

//Calls itself
(function doSomething() {
  console.log("function that calls itself");
})();

//Hoisting(Call the function first, then make the function)
hoisting();

function hoisting() {
    console.log("Hoisting example");
}

// //Anonymous function, then creating it. Will not work(error)
// anonymousFunction();

// const anonymousFunction = function() {
//     console.log("Hoisting example two"); //Error
// };

//Callback functions(as arguments)
function logTheArgument(someFunction) {
    console.log(someFunction);
}

logTheArgument(function(){
    console.log("I am a callback function");
});

//lesson-code
function logSomething (someArgument) {
    console.log(typeof someArgument);
}

logSomething("Sander");
logSomething(1234567);

const obj = {};
logSomething(obj);

const someArray = [];
logSomething(someArray); //object

function justSomeFunction(){
    console.log("Hello i am a function");
}
logSomething(justSomeFunction); //function

const justAHappyFunction = function(){
    console.log("Hello i am a happy function");
}
logSomething(justAHappyFunction) //function