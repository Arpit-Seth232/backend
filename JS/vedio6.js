// Scopes


// -> 3 types scopes
// 1. Global Scope -> if a variable is present in a global scope then it is accessable everywhere in js. there are many ways of doing one of them is :-
// .. to declare and define outside a function or block

// 2. Function Scope -> in a function, the visibility of a variable/function is just inside the outer function

// 3. Block Scope -> in js we can use a pair of curly braces to declare a block(if,while,raw,for,etc.) , now if a variable or function is only accessible inside a block then it will be having block scope.


// let vs var vs const

// var -> whenever we use a var anywhere inside a function ,the variable gets function scope if we use it outside a function , no matter if it is enclosed
// in a block or not , it will give variable a global scope
// allows redeclaration and reassign
// it can be accessed after and before it is declared

// example1

{
    var x=10;         // global scope
    console.log(x);               // 10
}
console.log(x);                   // 10

function func(){
    var y=10;         // function scope
    console.log(y);               // 10
}

// console.log(y);                   // error



// let -> whenever we initialise a variable with let, it always gets the scope of enclosing block
// doesn't allow redeclaration but can reassign
// it can be accessed only after declaration

// example

{
    let r=0;
    console.log(r);    // block scope
}

// console.log(r);        // error



// const -> it also has block scope
// can't be redeclared and reassigned


// how Js, passes the code --------------------------------------------------------------------------------------------------------------------------

// Since js is a hybrid language , it definetely is hybrid i.e. compiled + interpreted
// so whenever we try to execute a Js code, Js first parses the whole code, in this passing phase it assigns scopes to variables/function , once done then it reads the code & executes it

var teacher = "Sanket";

function fun(){
    console.log(subject);
    var subject = "Js";        // undefined 
    var teacher = "Pulkit";
    teaching_assis = "png";    // automatically gets global scope , in js , if we keep on searching scope of a variable in outer scopes & no where find it, we automatically consider it in global scope. This happens during execution phase.
    // it only works only as a target reference not source reference. (Non - formal declaration)
    console.log(teacher);
    console.log(teaching_assis);
}

fun();
console.log(teacher);
console.log(teaching_assis);   // auto globals (if this statement is written before before fun() call then it will act as source reference and will show error)