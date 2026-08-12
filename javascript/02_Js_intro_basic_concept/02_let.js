
// now using let


let variable = "hello";

// let → declares a variable.
// variable → variable name.
// "hello" → value stored in the variable.

function checkBlockScope (){
//     Creates a function named checkBlockScope.
// The code inside this function runs only when the function is called.

    // let variable = "hello";

//     This is also commented.
// If uncommented, this variable exists only inside this function.
    console.log("variable value", variable);

    if (true){

//         Starts an if block.
// true always evaluates to true, so this block always runs.
        // let variable = "override";

        // let blockVariable =" this is block variable";

        console.log("variable value", variable);
    }

    // cant't access this 
    // console.log("what is the value of blockvariable", blockVariable);
}

checkBlockScope();

// rules

// variable declaration

let play;

// play = "hide and sick";

// reinitialization can be possible;

play = "cricket"

// in same scope we can't define same name variable again

// let play = "football";

// console.log("play", play)

