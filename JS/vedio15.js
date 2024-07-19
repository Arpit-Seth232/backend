// // async await continues


function fetch_data(url){
    return new Promise(function(resolve,reject){
        console.log("started downloading the data from ",url);
        setTimeout(function(){
            console.log("downloaded the data");
            let response = "raw_data";
            resolve(response);
        },3000);
    });
}


function writeup(data){
    return new Promise(function(resolve,reject){
        console.log("started writing the data");
        setTimeout(function(){
            console.log("written the data");
            let filename="hello.txt";
            reject(filename);
        },5000);
    });
}

function upload(file,new_url){
    return new Promise(function(resolve,reject){
        console.log("started uploading the data");
        setTimeout(function(){
            console.log("uploaded the file : ", file ,"on " ,new_url);
            let upload_resp="SUCCESS";
            resolve(upload_resp);
        },5000);
    });
}


async function process1(){
    let d1=await fetch_data("www.google.com");
    let f1=await writeup(d1);
    let u1=await upload(f1,"yahoo");
    return u1;
}

async function process2(){
    let d2=await fetch_data("www.google.com");
    let f2=await writeup(d2);
    let u2=await upload(f2,"yahoo");
    return u2;
}

async function process3(){
    let d3=await fetch_data("www.google.com");
    let f3=await writeup(d3);
    let u3=await upload(f3,"yahoo");
    return u3;
}

Promise.all([process1(),process2(),process3()]).then(function(value){
    console.log(value);
})


// -> Promise.all() :- 
//  starts parallely executing all the promises
//  it takes the iterable as an input and return a single promise
//  reduces async await hell
//  it return the promise fulfill when all the promise get fulfilled


// -> Promise.any() :-
//  starts parallely executing all the promises
//  it takes the iterable as an input and return a single promise
//  reduces async await hell
//  it return the promise fulfill when any of the promise get fulfilled




// errors in promises --------------------------------------------------------------------------------------------------------------

// -> in promise .then() function takes two functions as paramater ---> function success(value) , function err(error)


function fetch_data(url){
    return new Promise(function(resolve,reject){

        console.log("Started downloading the data");
        setTimeout(function fun(){
            console.log("downloaded the data");
            let resp="dummmy";

            resolve(resp);
            
        },3000);
    })
}

let x=fetch_data("www.google.com");
x.then(function suc(value){
    console.log("the resolved data is",value);
},function err(error){
    console.log("the error is",error);
})


// another example ----

console.log();
console.log();

let y=fetch_data("www.google.com");
y.then(function fun(value){
    console.log("the resolved data is :",value);
    return 10;
})
.then(function(vl){
    console.log(vl);
    throw {errr:"new error"};                                             // it is used to throw the error when promise is resolved but new error occured 
})
.catch(function err(error){
    console.log("error is",error);
  
})
.then(function(vl){
    console.log(vl);
})
.finally(function (){
    console.log("experiment completed");                                  // always executed even if promise is rejected or resolved
})



// async await error handling ----------------------------------------------------------------------------------------------------------------


async function fun(){
    try{
        let data=await fetch_data("www.google.com");
        console.log("await downloading complete");
        let write=await writeup(data);
        console.log("await writing complete");
        
    }
    catch(err){
        console.log("error is",err);
    }
}

fun();


// error first callback -------------------------------------------------------

function custom(url,fn){
    console.log("start");
    let data="dummy";
    fn({error:"something"},data);
    console.log("end");
}

custom("www",function(err,val){
    if(err){
        console.log("error :",err);
    }
    else{
        console.log(val);
    }
})