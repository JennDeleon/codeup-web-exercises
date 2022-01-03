function getFizzBuzz(startingNum){
    if (startingNum % 3 === 0 && startingNum % 5 === 0) {
        return console.log("FIZZ BUZZ")
    }else if (startingNum % 3 === 0){
            console.log ("fizz")
        } else if (startingNum % 5 === 0){
            console.log ("buzz")
        }
}
getFizzBuzz(3);
getFizzBuzz(5);
getFizzBuzz(15);