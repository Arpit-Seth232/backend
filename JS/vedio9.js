// Closures && Callbacks

// -> setTimeout :- it is a function that helps to execute some task once after a certain timer.

// -> setInterval :- it is a function that helps to execute some task again & again after agiven interval.

// -> Callback :- a callback is a function that is passed to another function as an argument.

// example1 :-

function fun(x,gn){
    for(let i=0;i<x;i++){
        console.log(x);
    }
    gn();                        // calling callback function
};

fun(5,function(){                // callback funtion
    console.log("hello"); 
});

// array application of callback funtion 

var arr=[5,3,6,7,8];

let x = arr.map(function (v,i){        // for all the elements of the given array, it passes the elements as an argument to the callback function
                                       // v-> arr values , i-> index  
    console.log(v,i);                  // arr.map() function always returns an array
    return 0;
});

console.log(x);


// another example -------------

function mapper(ar,fn){
    let result = [];
    for(let i=0;i<arr.length;i++){
        let res = fn(arr[i],i);
        result.push(res);
    }
    return result;
};

let ar=[2,3,4,5,6];

var ans = mapper(ar,function cuber(v,i){
    console.log(v*v*v,i);
    return v*v*v;
});

console.log(ans);


// setTimeout -----------------------------------------------------------------------------------


setTimeout(function(){
    console.log("hello");
},3000);

// set timeout funtion takes into 2 arguments -> 1. callback function , 2. time after which it should executed

// the set time retuns an unique id which is helpful in clear out the time interval -> clearTimeout(id)

// example ->

let id1 = setTimeout(function fun(){
    console.log("id1");
},10000);

let id2 = setTimeout(function(){
    console.log("id2");
    clearTimeout(id1);
},5000);


// set Interval ------------------------------------------------------------------------------------------------------------

let id=setInterval(function(){
    console.log("hello");
},3000);

setTimeout(function(){
    clearInterval(id);
},13000);
