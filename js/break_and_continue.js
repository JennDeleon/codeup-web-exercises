"use strict"

//     Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
//     Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.

var odd = 0;
while (true){
    if(odd % 2 === 1 && odd > 1 && odd <50){
        break;
    }
    var input = prompt("Enter a odd number between 1 and 50:");
    odd = parseInt(input);
}
function skipPrompt (x){
    for (var skip = 1; skip <=50; skip++) {
    if (skip === x){
        console.log("Skip");
        continue;
    }
    console.log(skip)
    }
}
skipPrompt(odd);