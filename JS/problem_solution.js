// solving a problem
// 1. downloading data
// 2. writing into the file
// 3. uploading the file


// through promise


function fetch_data(url){
    return new Promise(function(resolve,reject){
        console.log("started downloading the data");
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
            resolve(filename);
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


let ans = fetch_data("www.google.com");

ans
.then(function download (value){
    console.log("the data is : ",value);
    return value;
})
.then(function writing (value){
   
    return writeup(value);
})
.then(function (value){
    return upload(value,"www.yahoo.com");
})
.then(function(value){
    console.log(value);
})


