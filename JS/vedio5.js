// Abstract equality

console.log(null==undefined)
console.log(10=='10')          // ToNumber('10') then 10==10 => true
console.log(true==10)          // ToNumber('true') then 1==10 => false
console.log(10=={valueOf() {return 10}}) // true


// example1

let a=5;
if(a){                                 // ToBoolean(5) => true
    console.log("namaste");
}
if(a==true){                           // ToNumber(true) => 1 and 1!=5 => false
    console.log("hello");              // output -> namaste
}


// example2

let ans=0;

for(let i=0;i<"23";i++){               // i<ToNumber("23")
ans++;
}

console.log(ans);


// NaN (Not a number) ----------------------------------------------------------------------------------------------------------------------------

// 1. typeOf(NaN) => number
// 2. it doesn't actually  not a number , rather it gives notion of an invalid number
// 3. NaN is the only primitive value which is not equal to itself i.e., doesn't follow identity property

// isNaN function is used to check wheather a given variable is NaN or not but it has some issues.

// example

 a="10";
let b="abc";
let c= 10 - b;

console.log(isNaN(a));  // false  => right
console.log(isNaN(b));  // true   => why ?  (this is NaN function coerces the argument before checking for NaN. Now string is not NaN , but when we       convert string like "abc" into a number it becomes NaN & hence isNaN function returns true)
console.log(isNaN(c));  // true   => right


// so as to overcome this issue a new function is used that is Number.isNaN() it strictly only checks whether the given variable is NaN ,  this function will not perform coercion

console.log(Number.isNaN("abc"))  // false
console.log(Number.isNaN(20))     // false
console.log(Number.isNaN(NaN))    // true


// boxing in js ---------------------------------------------------------------------------------------------------------------------------------------

// -> it is a phenomenon in js when it tries to convert primitives into objects.
// -> it can be manual or automatic

let x=9;
typeof(x)  // number
console.log(typeof(x.toString()))

console.log((9).toString())