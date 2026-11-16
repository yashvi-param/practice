const person1 = {
    name: "alice",
};

// Creates an object person1 with the name "alice".

console.log("person 1 name", person1.name);

// console.log() prints information to the console.
// person1.name accesses the name property of the person1 object.
// The value is "alice".

const person2 = person1;

// A new object is not created here.
// person2 gets the reference of the same object.
// Both person1 and person2 point to the same object.

console.log("person 2 name", person2.name);

// person2.name accesses the name property.
// Since person2 refers to the same object, the value is "alice".

person2.name = "charlie";

// Changes the object's name to "charlie" through person2.

console.log("person 1 name", person1.name);

// Prints "charlie" because person1 and person2 refer to the same object.
