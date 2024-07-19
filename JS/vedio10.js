// Closures

function todo(task){
    setTimeout(function fun(){
        console.log("completed",task);
    },2000);
    console.log("end of todo");

};

console.log("begin");
todo("assignment");
console.log("ending");

// output :-

//begin
// end of todo
// ending
// completed assignment

// at the time instance when the function fun will be called, the todo function is already over. if the fun is called after the completion of todo & todo has ended, the fun is able to access task variable ?

// This happens due to closures

// Closure -> it is when a function "remembers" its lexical scope even when the function is executed outside that lexical scope.

