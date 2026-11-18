// let marks = 80;

// if(marks >= 35){
//     console.log("you have passed in examination");
// } else{
//     console.log("you have failed in examination")
// }

// let age = 20
// if(age>=20){
//     console.log("you have aligible for voting")
// }
// else{
//     console.log("you have not aligible for voting")
// }

// let number = 7;
// if(number % 2 === 0){
//     console.log("even number")
// }else{
//     console.log("odd number")
// }

// let number = 0;

// if(number >= 0){
//     console.log("positive number")
// } else{
//     console.log("negative number")
// }

// let temperature = 38;
// if(temperature > 30){
//     console.log("It's hot today")
// }else{
//     console.log("weather is normal")
// }

// let password = 12345;
// if(password == 12345){
//     console.log("login successfull")
// }
// else{
//     console.log("incorrect password")
// }

// let price = 1500;

// if (price >= 1000){
//     console.log("you got a discount")
// }
// else{
//     console.log("no discount")
// }

// let age = 16;

// if(age >= 18){
//     console.log("you can drive")
// }
// else{
//     console.log("you cannot drive")
// }

// let marks = 90;

// if(marks >= 80){
//     console.log("excellent")
// }else{
//     console.log("keep practicing")
// }

// let a = 50;
// let b = 30;
// if (a > b){
//     console.log("A is greater")
// }else{
//     console.log("B is greater")
// }

// let balance = 5000;

// let withdrawal = 3000;
// if (5000 >= 3000){
//     console.log("Withdrawal successful")
// }else{
//     console.log("Insufficient balance")
// }

// let marks = 75;

// if (marks >= 90) {
//   console.log("Grade A");
// } else if (marks >= 75) {
//   console.log("Grade B");
// } else if (marks >= 50) {
//   console.log("Grade C");
// } else {
//   console.log("Fail");
// }


// let units = 250;

// if (units <= 100) {
//     console.log("Low consumption");
// } else if (units <= 200) {
//     console.log("Medium consumption");
// } else if (units <= 300) {
//     console.log("High consumption");
// } else {
//     console.log("Very high consumption");
// }


// let username = "yashvi";
// let password = 12345;

// if (username === "yashvi" && password === 12345){
//     console.log("Login successful")
// } else{
//     console.log("Invalid username or password")
// }

// let amount = 2500;

// if (amount >= 5000){
//     console.log("20% discount")
// }else if(amount >= 3000){
//     console.log("10% Discount")
// }else if(amount >= 1000){
//     console.log("5% Discount")
// }else{
//     console.log("no discount")
// }

// let marks = 85;

// if (marks >= 90){
//     console.log("Distinction")
// }
// else if(marks >= 75){
//     console.log("First Class")
// }
// else if(marks >= 60){
//     console.log("second class")
// }
// else if(marks >= 35){
//     console.log("pass")
// }
// else {
//     console.log("fail");
// }

// let number = 0;

// if(number > 0){
//     console.log("positive number")
// }else if(number < 0){
//     console.log("negative number")
// } else {
//     console.log("zero")
// }


// let username = "yashvi";
// let password = 12345;
// let isActive = true;


// if (username === "yashvi" && password === 12345 && isActive){
//     console.log("Login successful")
// } else{
//     console.log("Login failed")
// }

// let units = 150;

// if (units <= 100){
//     console.log(units * 2)
// }else if(units <= 200){
//     console.log(units * 3)
// }else{
//     console.log(units * 5)
// }

let cartAmount = 4500;
let isLoggedIn = true;
let couponApplied = true;

if (!isLoggedIn) {
  console.log("Please login first");
} else if (cartAmount >= 3000 && couponApplied) {
  console.log("You got 20% discount");
} else if (cartAmount >= 3000) {
  console.log("You got 10% discount");
} else {
  console.log("No discount");
}