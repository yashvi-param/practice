// 1. string -> textual data

let name = "alice";

// Stores the text "alice" in the variable name.

console.log(name);

// Prints the value of name in the console.

// typeof operator is used to check dataTypes of operator

console.log("type of name is ", typeof name);

// Prints the value of name in the console.

name = "charlie";

// Changes the value of name from "alice" to "charlie".

console.log("name")

// Prints the updated value "charlie" in the console.

// 2. number

let num = 10;

// Stores the number 10 in the variable num.

console.log("num value", num);

// Prints the value of num in the console.

console.log ("type of num is", typeof num);

// Checks the data type of num, which is number.

num = "10";

// Changes the value from number 10 to string "10".

console.log("type of num is", typeof num)

// The data type is now string because "10" is inside quotes.

// 3. boolean

let answer = true;

// Stores the Boolean value true in the variable answer.

console.log("answer", answer);

// Prints the current value of answer.

console.log("type of answer is", typeof answer)

// Checks the data type of answer, which is boolean.

answer = false;

// Changes the value of answer from true to false.

console.log("type of answer is", typeof answer)

// false also has the boolean data type.

// 4.undefined -> work as placeholder in memory it will occupy space in memory but value HashChangeEvent't assign yet 

let a;

// Declares the variable a without assigning any value.

console.log("a value", a);

// Prints undefined because no value has been assigned.

console.log("type of a", typeof a);

// Checks the data type of a, which is undefined.
let b = undefined;

// Explicitly assigns undefined to the variable b.

console.log(b);

// Prints undefined in the console.

// 5. null 

let marks = null;

// Assigns null to represent an intentionally empty value.

console.log("marks", null);

// Prints null in the console.

console.log("type of null", typeof marks);

// The typeof operator returns object for null in JavaScript.

// 6.bigInt

let bigNumber = 90084531548642154865431321564n;

// Stores a very large integer as a BigInt using the n suffix.

console.log("big numbers", bigNumber);

// Prints the BigInt value in the console.

console.log("type of bigNumber", typeof bigNumber);

// Checks the data type, which is bigint.

// 7.symbol

let id = Symbol("id");

// Creates a unique value using Symbol.

console.log("id", id);

// Prints the Symbol value in the console.

console.log("type of id", typeof id);

// Checks the data type, which is symbol.

// 8.object

let person = { name: "alice"};

// Creates an object with a name property containing "alice".

console.log("person", person);

// Prints the complete person object.

console.log("type of person", typeof person);

// Checks the data type of person, which is object.

let fruits = ["apple", "banana", "mango", 1, true];

//Creates an array containing strings, a number, and a Boolean value.

console.log("fruits items are", fruits);

// Prints all the items of the fruits array.

console.log(typeof fruits);

// The typeof operator returns object for an array in JavaScript.