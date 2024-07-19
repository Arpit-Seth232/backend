// various functions of promise

// ->  if you want an immediate resolved promise

let x =Promise.resolve(123);

x.then(function (value){
    console.log("the value is",value);
})

// -> if you want an immediate rejected promise

// let y= Promise.reject(123);
// y.then(function(value){                                               //  error
//     console.log("the rejected value is",value);
// })



// Microtask queue has a higher priority

// promise -> callbacks -> microtask queue

// normal callbacks -> event queue


// example :-

console.log("Start of the file");

setTimeout(function timer1(){
    console.log("Timer 1 done");
},0);

for(let i=0;i<100000000;i++){
    // some code
}
                                                                        // output:-
let y=Promise.resolve("Sanket's Promise");                              //  Start of the file
                                                                        //  end of file        
y.then(function(value){                                                 //  whose promise ? Sanket's Promise
    console.log("whose promise ?",value);                               //  Timer 1 done
})                                                                      //  Timer 2 done

setTimeout(function timer2(){
    console.log("Timer 2 done");
},0);

console.log("end of file");




//  async & await -----------------------------------------------------------------------------------------------------------------

// we can declare a function async 
// if you declare the function async, it does the following :-

// 1) it allows the use of await keyword
// 2) if you declare a function async, it allows consumption of promise using await
// 3) an async function always converts your return value to a promise


function fetch_data(url){
    console.log("starting downloading data");
    setTimeout(function(){
        return new Promise(function(resolve,reject){
            let data="raw-data";
            console.log("the data is :",data);
            resolve(data);
        })
    },3000);
   
}

function writeup(data){
    console.log("writing data");
    setTimeout(function(){
        return new Promise(function (resolve,reject){
            let filename="hello.txt";
            console.log("the file is :",filename);
            resolve(filename);
        })
    },3000);
    
}

function uploadfile(file,newurl){
    console.log("uploading started");
    setTimeout(function(){
        return new Promise(function(resolve,reject){
            console.log("file uploaded status : SUCCESS");
        })
    },3000);
   
}

async function process(){
    let data = await fetch_data("www.google.com");
    console.log("fetch await completed");
    let file = await writeup(data);
    console.log("writeup await completed");
    let response =await uploadfile(file,"www.yahoo.com");
    console.log("upload await completed");

    return true;
}

let z=process();
z.then(function(value){
    console.log(value);
})

