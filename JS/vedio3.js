//  coercion stands for type inter-conversion

// types :
// 1. implicit , 2. explicit

// In js, the type of variable depends on the value stored


// ABSTRACTION OPERATIONS :-

// these operations are used by ecmascript or js internally , we as a end user can't use it 

// 1. ToPrimitive -> 

// it tries to convert the input to a non-object type (primitive type) value
// it takes an input argument and an optional preferred type argument
// if an input argument is capable of getting converted into more than one primitive type, then the function uses preferred type argument helps to resolve  it
// this function prefers to convert string and number (i.e. prefered type argument = string,number)

//-->  input argument number -> valueOf() then toString() [the valueOf() and toString() are not abstract operations i.e. we can use it]
//-->  input argument string -> toString() then valueOf() [the valueOf() and toString() are not abstract operations i.e. we can use it]

// --> by default toString() on object returns "[object Object]"
// --> by default valueOf() on an object returns same object


console.log({a:6}.toString())
console.log({a:6}.valueOf())


// for array ->  valueOf() will return same array
//               to String() will return array without brackets


console.log([1,2,3].toString())
console.log([1,2,3].valueOf())

// -------------------------------------------------------------------------------------------------------------------------------------------------------

// 2. ToString ->

// converts everything to string except symbol (internally)




// --------------------------------------------------------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------------------------------------------------------

// 3. ToNumber ->

// converts undefined ->NaN (invalid number), null = +0 , true = 1 , false = +0 , symbol = type_error

    console.log(undefined - 5)        // NaN
    console.log(null - 5)             // -5
    console.log("132" - 10)           // 122
    console.log("12fd" - 5 )          // NaN
    console.log("@" - 5)              // NaN
    console.log(4-true)               // 3






// -------------------------------------------------------------------------------------------------------------------------------------------------------

let a=10

console.log(10-{"a":10 , valueOf(){return a;}})

console.log(10-{"a":10, valueOf(){return {};}, toString() {return "5";}})