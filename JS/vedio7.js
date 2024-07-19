// Scopes (Part 2)

// undefined -> it is a variable state when the scopes already knows about it but in the execution phase we have not allocated it a value.

// undeclared -> it is a variable state when we never formally declared a variable & before assigning it a value so that it has chance to become autoglobal, we try to use it.

var fun = 10;

function gun(){
    console.log("hello");
}

gun()
// fun()   // type error



// hoisting ---------------------------------------------------------------------------------------------------------------------------------

gunc();
function gunc(){
    console.log("shoot");
}

// it is a direct consequence of lexical parsing that happens in js , due to which we are able to access some function & variables before declaring them.which gives us a notion that they are moved up in the file.

// in strict mode auto globles are prohobited    // syntax -> "use strict";

// example


function func(){
    // "use strict"; 
    tech="JD";                         // in strict mode returns error
    console.log(tech);
}
func()