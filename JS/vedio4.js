// Abstration Operation

// 4. ToBoolean

// it converts given type to a boolean value
// it maintains a list of values which when recieved as an argument returns False and everything apart from the list of values returns True

// Falsy values

// . null ->return false
// . undefined -> return false
// . +0,-0 -> return false
// . NaN ->return false
// . "" -> return false
// . false -> return false

// else everything is true


// we can test ToBoolean operation by using -> logical NOT operator (!)


console.log(!0)  // true
console.log(!{}) // false
console.log(!console.log(0))  // 0 then true


// ----------------------------------------------------------------------------------------------------------------------------------------------------

// 5. == and === equality

// actually both == and === checks the types but the difference is both of them do something different after checking the type

// the main difference is :-

//     a) == (abstract equality) if data type is not equal then it calls coercion else call strict equality
//     b) === (strict equality) if data type is not equal then it return false (=== never does coercion)
//     c) a NaN is only a primitive value which in not equal to itself


// Strict equality----------------------------------------------------------------------------------------------------------------------------

console.log(NaN === NaN) // false
console.log(NaN===2) // false

console.log(0===-0) // true
console.log(-0===0) // true

console.log(null===null) // true
console.log(undefined===undefined) //true

console.log("st2"==="st2") // true
console.log({} === {}) // false 

// but

x={}

console.log(x===x) // true

// similarly symbols

console.log(Symbol("ab")===Symbol("ab")) // false

// but

y=Symbol("ab")

console.log(y===y) // true
