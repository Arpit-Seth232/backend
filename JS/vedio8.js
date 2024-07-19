// Function Expression

// example 1

function gun(fn){
    console.log("inside gun");
    fn();
    console.log("leaving gun");
}

// gun(function(){
//  console.log("new function passed");
// });

function fun(){
    console.log("hello");
};

gun(fun);


// function expression are of 2 types :-
// 1. anonymus -> which doesn't have a name
// 2. Named

// anonymous function are hard to debug and recurtion is also tricky

// function expression scopes --------------------------------------------------------------------------------------------------------


var x = function fx(){          // here function expression fx() will have scope of x where x has global scope
 console.log("gun");
};

x();

// fx();                        so we can't call function fx() directly