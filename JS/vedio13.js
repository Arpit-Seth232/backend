// Promises continues

// -> the promise object that we create has 4 major properties :-

// 1) status                3) onfullfillment
// 2) values                4) on reject


// 1) status : it shows current promise state . There are 3 status/states :-
//             --> a) pending -> still going on
//             --> b) fulfilled -> success
//             --> c) rejected -> error

// 2) value : when status of the promise is pending, this value property is undefined. The moment promise is resolved (status -> fulfilled) the value property is updated from undefined to the new vale (this value we can consider as the returned value or resolved value) . So the value property acts like a placeholder till the time promise finishes.

// 3) onfulfillment -> this is an array which contains function that we attach to our promise object. (to a promise object we can attach some function using .then() method) .

// when the value property is updated from undefined,to the new value, Js gives chance to these attached funtion one by one with the prperty value as their argument ( if there is no piece of code in the call stack & global scope)


// syntax ->  return new Promise(function (resolve , reject){

//});


function fetchdata(url){
    return new Promise(function(resolve , reject){
        console.log("downloading started");
        setTimeout(function (){
            let data = "hello";
            console.log("download completed");
            resolve(data);
        },1000);
    })
};

let x=fetchdata("www");
console.log(x);

setTimeout(function(){
    console.log(x);
},3000)



//  --> if we call resolve() function, we consider it fulfilled
//  --> we consider it rejected if we call reject()


// example --

function check(val){
    return new Promise(function(resolve,reject){
        console.log("starting");
        setTimeout(function(){
            if(val%2==0){
                resolve("Even");
            }
            else{
                reject("Odd");
            }
        },3000)
        console.log("end");
    })
}

console.log(check(2))           


// previous vedio example  (consuming the promise)


// --> the promise consumption is the main beauty , using which we will avoid inversion of conrtol.

// --> whenever we call a function, retuning a promise, we will get a promise object which is like any js object that we can store in a variable.

// --> if the promise creation involves synchronous piece of code then only js will wait for promise resolving unless it will return promise pending


console.log();


function fetch_data(url){
    return new Promise(function(resolve,reject){
        console.log("Start downloading");
        setTimeout(function (){                                             // <---- here promise object will be created easily as there is no blocky piece of code,  but
                                                                            //       initially it will be pending. As the fulfillment happens after a timer of 3 sec
            let response = "raw_data";
            console.log("downloaded")
            resolve(response);

        },3000);

        // for(let i=0;i<10000000;i++){                                     // <---- this is sync piece of code , so js will wait for promise object creation . and just after 
                                                                            //       the for loop , we also resolve the promise , so we get a resolved promise.     
                                                                 

        // }
        // let response = "raw data";
        // console.log("download completed");
        // resolve(response);
    })
}


// Now technically when the promise gets resolved, we have to execute some functions. 

// -> we can use .then() function on the promise object, to bind the functions we want to execute once we fulfill a promise

// -> the .then() function takes function as an argument that we want to execute after the promise fulfills and the argument function takes value property as parameter.


let ans = fetch_data("www.google.com");

ans.then(function download(value){
    console.log("promise fulfilled");
    console.log(value);
})


// -> the above piece of code solves the problem of inversion of control but it leads to promise hell

// -> promise hell can be resolved as :-

x=ans.then(function download(value){
    console.log("new promise");
    return "sanket";
});

console.log(x);

// here .then() returns new promise that is named 'x' , therefore 

x.then(function (value){
    console.log(value);
})

