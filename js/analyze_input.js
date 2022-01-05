
//     In that file, write a program that receives user input and analyzes the input differently if the input is a number or a string. If the input is a string, it will analyze the string differently if it is length 1.

// Following are the rules of analysis:
//     If the input is a number:
//     Output if the number is odd or even (zero is considered even). Use your function from Exercise 2 for this functionality.

//     Output if the number is negative, positive, or zero
// If the input is a string:

//     If the string’s length is 1, output if the string (or char) is a vowel or not
// Otherwise, output the length of the string

// Design your program to include a switch and at least one if/else. You must also make separate functions for all of the following program functionality:
//     Determining if the input is a number, string, or otherwise. This function should be called analyzeInput
//     Determining if a number is odd or even. Re-use your Exercise 2 function for this.
//     Determining if a number is <, >, or equal to zero
//     Determining if the string is a single character or not
//     Determining if the length 1 string is a vowel or not

var input = prompt("Whats your number?");
function analyze(input){
    if (!isNaN(input)){
        alert("Thats a number");
        if (input % 2 === 0){
            alert("Thats an even number");
        } else {
            alert("Thats an odd number.");
        }
        if (input > 0) {
            alert("The number is positive");
        }
        else if (input == 0){
            alert("The number is zero");
        }
        else {
            alert("The number is negative");
        }
    } else if (typeof input === "string") {
        alert("Thats a string");
        switch (input.toLowerCase()) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
            case 'y':
                alert("Thats a vowel")
                break;
            default:
                alert("Thats not a vowel")
        }
    }
}
analyze(input);


//     Add, commit, and push to GitHub.


