// Promises

// -> console.log() is mostly considered to be synchronous in nature
// -> it depends on the runtime how it behaves

// e.g.
// -> for file i/o : console.log() behaves synchronously on windows (acc. to node.js runtime environment)


// Disadvantages of callback :-

// 1. callback hell -> means callback inside callback inside callback ... , it hinders code readability  (not a major problem can be rectified through promises)

// 2. inversion of control -> if there is some part of code whose control we are passing to someone else, and we don't know how that part will be executed. This is problem is called as inversion of control



// solution to all the problems of the callbacks is -> "Promises"


// -> promises are special Js objects that are also considered readability enhancers. They get immediately returned from a function setup to return a promise.

// -> promises acts as a placeholder for the data we hope to get back from some future task

// -> we can also attach the functionality we want to defer until the future task is done and promise automatically handles execution of this functionality.

// how to create a promise :-


// solving a problem
// 1. downloading data
// 2. writing into the file
// 3. uploading the file



// solving problem through callback

function fetchCustom(url,fn){
    // here we are mimicing the fetching process

    console.log("start downloading");
    setTimeout(function process(){
        let response = "raw data";   
        console.log("downloaded the data");
        fn(response);
              
        
    },3000);

}


function writeup(data,fn){
    console.log("started writing data",data);
    setTimeout(function process (){
        console.log("Writing completed");
        let filename ="output.txt";
        fn(filename);
    },3000);
}

function uploadfile(filename,newurl,fn){
    console.log("started uploading");
    setTimeout(function(){
        console.log("file uploaded");
        let response = "Success";
        fn(response);
    },4000);
}

fetchCustom("www.google.com",function(response){
        console.log("downloaded data is : ",response);
        writeup(response,function (filename){
            console.log("file name is : ",filename);
            uploadfile(filename,"www.yahoo.com",function(uploadresp){
                console.log("file uploading status: ",uploadresp);
            })
        })
});


// this solution throw callbacks leads to callback hell


// its solution through promises is in vedio13.js





