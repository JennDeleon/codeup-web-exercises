// For each of the following code blocks, read the code and predict what the
// result of evaluating it would be, then execute the statement(s) in the Chrome console.
//
//
var a = 1;
console.log(a);
var b = a++;
console.log(b)
var c = ++a;
console.log(c)
// // what is the value of a, b, and c?
//
// a = 1
// b = 2
// c = 3
//
var d = "hello";
var e = false;
//
// d = hello
// e = false
console.log(d);
console.log(e);
//
d++;
e++;
//
// d++ = false
// e++ = NaN
//
console.log(d)
console.log(e)
//
var perplexed;
// perplexed is undefined (no value is assigned) <---- that gave away the answer
perplexed + 2;
console.log(perplexed)
//
//
var price = 2.7;
price.toFixed(2);
// 2.7
console.log(price)
//
// var price = "2.7";
// price.toFixed(2);
// console.log(price)
// ^^^^ that wont work
//
isNaN(0);
console.log(isNaN(0));
// false
//
isNaN(1);
console.log(isNaN(1));
// false
//
isNaN("");
console.log(isNaN(""));
// false
//
isNaN("string");
console.log(isNaN("string"));
// true
//
isNaN("0");
console.log(isNaN("0"));
// false
//
isNaN("1");
console.log(isNaN("1"));
// false
//
isNaN("3.145");
console.log(isNaN("3.145"));
// false
//
isNaN(Number.MAX_VALUE);
console.log(isNaN(Number.MAX_VALUE));
// false
//
isNaN(Infinity);
console.log(isNaN(Infinity));
// false
//
isNaN("true");
console.log(isNaN("true"));
// true
//
isNaN(true);
console.log(isNaN(true));
// false
//
isNaN("false");
console.log(isNaN("false"));
// true
//
isNaN(false);
console.log(isNaN(false));
// false
//
// // to illustrate why the isNaN() function is needed:
// NaN == NaN
// false
console.log(NaN == NaN)
//
// !true
// false
console.log(!true)
//
// !false
// true
console.log(!false);
//
// !!true
//true
console.log(!!true);
//
// !!false
// false
console.log(!!false)
//
// !!0
// false
console.log(!!0);
//
// !!-0
// false
console.log(!!0);
//
// !!1
// true
console.log(!!1);
//
// !!-1
// true
console.log(!!1);
//
// !!0.1
// true
console.log(!!0.1)
//
// !!"hello"
// true
console.log(!!"hello");
//
// !!""
// false
console.log(!!"");
//
// !!''
// false
console.log(!!'');
//
// !!"false"
// true
console.log(!!'false');
//
// !!"0"
// true
console.log(!!"0");
// Execute the following statement in the Chrome JavaScript console and then follow the directions below.
//
//
    var sample = "Hello Codeup";
// Use .length to find the number of characters in the string.
console.log (sample.length)
//     Try to make the sample string all upper or all lower case.
console.log (sample.toUpperCase());
console.log (sample.toLowerCase());
// Update the variable sample via concatenation so that it contains "Hello Codeup Students".
sample += ' Students'
console.log(sample);
//     Replace "Students" with "Class".
console.log(sample.replace('Students', 'Class'));
//     Find the index of "c" using .indexOf(). What do you observe?
console.log(sample.indexOf('c'));
// Negative 1 because there in no lowercase c

//     Find the index of "C" using .indexOf().
console.log(sample.indexOf('C'));
//     Retrieve a substring that contains only the word "Codeup" by using indexOf() and substring().
console.log(sample.substring(6, 13));
//     Write some JavaScript code, that is, variables and operators, to describe the following scenarios.
//     Do not worry about the real operations to get the values, the goal of these exercises is to
//     understand how real world conditions can be represented with code.
//
//     You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days,
//     they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a
//     movie per day is $3, how much will you have to pay?
//
var lM = 3
var bB = 5
var h = 1
var total = ((lM + bB + h) * 3);
console.log (total)


//
//     Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a
//     different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in
//     payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

var google = 6
var amazon = 4
var facebook= 10
var grossPay = (google * 400) + (amazon * 380) + (facebook * 350);
console.log (grossPay)


// A student can be enrolled in a class only if the class is not full and the class schedule does not
// conflict with her current schedule.
var fullClass = false
var scheduleConflict = false
console.log(!fullClass && !scheduleConflict);
console.log(fullClass && scheduleConflict);
console.log(fullClass && !scheduleConflict);
console.log(!fullClass && scheduleConflict);


//     A product offer can be applied only if a person buys more than 2 items, and the offer has not expired.
//     Premium members do not need to buy a specific amount of products.
//     Use the following code to follow the instructions below:
//
var moreThanTwo = true
var notExpired = true
var premiumMember = true

console.log(notExpired && (moreThanTwo || premiumMember));
console.log(notExpired && !moreThanTwo);
console.log(!notExpired && moreThanTwo);

//
var username = 'codeup';
var password = 'notastrongpassword';
// Create a variable that holds a boolean value for each of the following conditions:
//
//     the password must be at least 5 characters
var fiveChar = 5
// the password must not include the username
var noPassInUserName = true
// the username must be no more than 20 characters
var noMoreThanTwenty = true
// neither the username or password can start or end with whitespace
var noWhiteSpace = true

var willWork = ((fiveChar >=5) && (noPassInUserName) && (noMoreThanTwenty) && (noWhiteSpace));
console.log(willWork);
//true
console.log(!fiveChar && noPassInUserName);
//false
console.log(noMoreThanTwenty && noWhiteSpace);
//true
console.log(!noPassInUserName && !noWhiteSpace);
//false

