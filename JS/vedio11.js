// Async Nature Of JS

// Js is a single threaded  language
// Js by default only supprots synchronous code execution (line by line execution)

// Note -> the above property of sync code execution only works for opertion natively known to JS. (e.g -> for loop)

// JS RUNTIME ------------------------------------------------------------------------------------------------------------------- (node or browser)


// we know that the runtime also provides functionalities that can be leveraged by JS. (e.g. -> setTimeout ,  SetInterval ,etc)

// Js consists of 2 things ->

// 1. event loop  (infinite loop)
// 2. event queue

// whenever js code consits of an functionality of runtime then js gives this code runtime environment to execute , and continue executes the operations which are known to Js.

// when the runtime functionality get executed by js runtime then it comes under event queue

// the event loop continuously checks for 2 conditions :-
// -> if call stack is empty (which stores the functions which has to performed)

// -> and all the global scoped statements are performed


// if yes, then operation residing in event queue comes into the call stack and gets executed by Js


// Example :-

function process(){
    console.log("start");
    setTimeout(function(){            // Runtime functionality                                  // Output
        console.log("time completed");                                      
    },3000);                                                                                    // start
    console.log("end");                                                                         // end
};                                                                                              // TATA
                                                                                                // time completed

process();
console.log("TATA");


// js can't tolerate hinderance of flow of program by runtime functionality






