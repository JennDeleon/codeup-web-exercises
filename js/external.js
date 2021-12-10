"use strict"

console.log("Hello from external JavaScript")

//1.
alert("Welcome to my Website!");

//2.
var userInput = prompt("whats your favorite color?");
alert("Great! " + userInput + " is my favorite color too!");

//3.a
var lM = parseFloat(prompt("How many days did you rent The Little Mermaid?"));
var bB = parseFloat(prompt("how many days did you rent Brother Bear?"));
var h = parseFloat(prompt("how many days did you rent Hercules?"));
var total = ((lM + bB + h) * 3);
alert('Your total will be: ' + total + " dollars");

//3.b
var google = parseFloat(prompt("How many hours did you work at Google?"));
var amazon = parseFloat(prompt("How many hours did you work at Amazon?"));
var facebook = parseFloat(prompt("How many hours did you work at Facebook?"));
var grossPay = (google * 400) + (amazon * 380) + (facebook * 350);
alert('Your gonna get paid ' + grossPay + " dollars this week!");

//3.c
var notFull = confirm("Is there room in the class at 8 A.M.?")
var scheduleClear = confirm("Are you free to take classes M-F at 8 A.M.?")
if (notFull && scheduleClear == true)
{
    alert("You can sign up! ");
}
else
{
    alert("Student cant take classes. ");
}

// var classHasSpace = confirm("Is there room in the class at 8 A.M.?")
// var scheduleClear = confirm("Are you free to take classes M-F at 8 A.M.?")
//
// alert("You can sign up! " +(classHasSpace && scheduleClear));
//
// // --- cant take class
//
// var classFull = confirm("Is the class full?");
// var classConflict = confirm("Are you free to take classes M-F AT 8 A.M.?")
//
// alert("Student cant take classes. " + (!classFull && !classConflict));
// // this is how to write the code without using if/else statements

//3.d
var isMember = confirm("Are you a premium member?");
var howManyItems = parseInt(prompt("How many items do you have?"))
var isOfferValid = confirm("Is this offer still valid?");
var discountApplied = isOfferValid && (howManyItems >= 2 || isMember);

if (discountApplied == true)
{
    alert("You get a discount!");
}
else
{
    alert("Sorry, you dont qualify for the discount.");
}
