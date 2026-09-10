// const

// const is used to declare a variable whose value cannot be reassigned later.

// block scope

// This means const and let are block-scoped.
function activity(){

// This creates a function named activity.
    const game = "gta-5";
// A const variable named game is created.
    function otherActivity(){
// This creates another function inside the activity() function.

// This is called a nested function.

        var exercise = "running";

// A variable named exercise is created using var.

        console.log("current exercise", exercise);
    }

    console.log("game", game);
    otherActivity();

    // console.log("what is current exercise you are doing", exercise)

    // it will cause an error because exercise is declared inside otherActivity().

}

activity();

// This calls the activity() function.

// The code inside activity() starts executing.

// variable declaration

// const task;

// const task = "project complete";

// A constant variable named task is created.

// console.log ("task", task);

// re initialization is not possible

// task = "learning new concept";

// console.log(task);

// when using variable in program follow this hierarchies

// const -> let -> var

// First: const
// Use const when the value will not be reassigned.

// Second: let
// Use let when the value needs to change.

// Third: var
// var is an older way of declaring variables.
// In modern JavaScript, we generally prefer const and let instead of var.

const person = {
    name: "alice",
};

// person is a const variable containing an object.

person.name = "charlie";

// This changes the name property of the object.

console.log(person.name);