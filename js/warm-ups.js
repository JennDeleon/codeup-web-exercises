// function isFive(num) {
//     if (num === 5){
//         return true;
// } else if (num != 5) {
//     return false;
//     }
// }
// console.log (isFive(5))
// console.log(isFive(4))


// function isMultipleOfThree(x) {
//     {
//         if (x % 3 == 0) {
//             return true;
//         } else {
//             return false;
//         }
//     }
// }
// console.log(isMultipleOfThree(3));
// console.log(isMultipleOfThree(4));
//
// function getFizzBuzz(startingNum) {
//     if (startingNum % 3 === 0 && startingNum % 5 === 0) {
//         return "FIZZ BUZZ"
//     } else if (startingNum % 3 === 0) {
//         console.log("fizz")
//     } else if (startingNum % 5 === 0) {
//         console.log("buzz")
//     } else {
//         return "thats not a good fizz"
//     }
// }
//
// getFizzBuzz(3);
// getFizzBuzz(5);
// console.log(getFizzBuzz(15));
// console.log(getFizzBuzz(4));
// console.log(getFizzBuzz('k'));
//

// function getPassword(input) {
//     var password;
//     do {
//        password = prompt("Enter your password");
//     } while (input !== password);
//     if (input === password) {
//         alert ("good");
//     } else {
//         prompt("Enter your password")
//     }
// }
// getPassword()

// function getMeaningOfLife(meaningfulNum){
//     var counter = 42;
//     if(!isNaN(meaningfulNum)){
//     while (meaningfulNum !== counter) {
//         counter++
//     }
//         console.log("The meaning of life, the universe, and everything is " + counter);
//     }
// }
//
// console.log(getMeaningOfLife(34));


// TODO: MINI EXERCISE
//      Write a function which uses a for-loop and
//      -> accepts the number of times to iterate as a parameter
//      -> only logs *if the iteration number is odd*

// function isOdd (num){
//     for (var odd = 0; odd <= num; odd++){
//         if (odd % 2 != 0) {
//             console.log(odd);
//         }
//     }
// }
// isOdd(5)
//
// // TODO: MINI EXERCISE
// //      Write a function which uses a for-loop and
// //      -> accepts the number of times to iterate as a parameter
// //      -> logs "This is an even iteration" on the evens
// //      -> logs "This is an odd iteration" on the odds
//
// function oddOrEven(num) {
//     for (var x=0; x <= num; x++) {
//         if (x % 2 === 0) {
//             console.log(x + " is an even iteration");
//         }
//         else {
//             console.log(x + " is an odd iteration");
//         }
//     }
// }
// oddOrEven(10)
//
// // TODO: MINI EXERCISE
// //      Make a new version of your getPassword function using a for-loop!
// //      -> The purpose of the for-loop is to only allow a maximum number of attempts
// //          -> If the max attempt used unsuccessfully, alert the user of such and RETURN or BREAK
// //      -> Once the user enters the correct password, use the 'break' keyword to end the loop
// //      -> After the loop concludes, alert the use they have entered the correct password
// 
// function getPassword() {
//     let password = "badpassword";
//     let guess = "";
//     for (let i = 0; i < 3; i++){
//     guess = prompt("Enter your password");
//         if (guess === password){
//             alert("logged in");
//             break;
//         } if (i === 2){
//             alert("WRONG");
//             return;
//         }
//     }
// }
//
// getPassword()