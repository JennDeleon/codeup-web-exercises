// Create a while loop that uses console.log() to create the output shown below.
// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096
// 8192
// 16384
// 32768
// 65536

var a = 2
while (a <= 65536){
    console.log(a)
    a = a * 2;
}

// Do While Loop
// An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. This is a way get the random numbers for this exercise.

var allCones = Math.floor(Math.random() * 50) + 50;
var notEnough = Math.floor(Math.random() * 5) + 1;
var cones = 5;

do {
    console.log("You still have " + allCones + " left over");
} while (cones < 5);
{
    do {
        console.log("You dont have enough cones to sell that much! " + notEnough + " left over");
    } while (cones > 51);
    {
        do {
            console.log("You can go home now!");
        } while (cones === 0);
    }
}