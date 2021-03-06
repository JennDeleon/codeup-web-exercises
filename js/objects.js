(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    "use strict";

    var person = {
        firstName: "Jennifer",
        lastName: "Deleon"
    };
    console.log(person.firstName)
    console.log(person.lastName)

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

person.sayHello = function (){
    console.log("Hello, from " + person.firstName + " " + person.lastName + "!")
    }
    person.sayHello()

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
shoppers.forEach(function(shopper){
    var discountAmount = .12;
    var newTotal = (shopper.amount - (shopper.amount * discountAmount));
    console.log(shopper.name + ' original total: ');
    console.log(shopper.amount);
    if (shopper.amount > 200){
        console.log("With discount you get " + Math.round((shopper.amount - newTotal)) + " dollars off")
        console.log("Your new total is: " + newTotal);
    } else {
    }
});

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    var books =[
        {
            title: "'Kindred'",
            author: {
                firstName: "Octavia",
                lastName: "Butler"
            }
        },
        {
            title: "'Harry Potter and the Philosopher's Stone'",
            author: {
                firstName: "J. K.",
                lastName: "Rowling"
            }
        },
        {
            title: "'World War Z'",
            author: {
                firstName: "Max",
                lastName: "Brooks"
            }
        },
        {
            title: "'The Caves of Steel'",
            author: {
                firstName: "Isaac",
                lastName: "Asimov"
            }
        },
        {
            title: "'I, Robot'",
            author: {
                firstName: "Isaac",
                lastName: "Asimov"
            }
        }
    ]
    // console.log("The first book is " + books[0].title + " by " + books[0].author.firstName + " " + books[0].author.lastName)
    // console.log("The second book is " + books[1].title + " by " + books[1].author.firstName + " " + books[1].author.lastName)
    // console.log("The third book is " + books[2].title + " by " + books[2].author.firstName + " " + books[2].author.lastName)
    // console.log("The fourth book is " + books[3].title + " by " + books[3].author.firstName + " " + books[3].author.lastName)
    // console.log("The fifth book is " + books[4].title + " by " + books[4].author.firstName + " " + books[4].author.lastName)

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    function allBooks(books){
        for (var i = 0; i < books.length; i++) {
            console.log( "Book # " + (i + 1) + " is " + books[i].title + " by " + books[i].author.firstName + " " + books[i].author.lastName);
        }
    }
    allBooks(books);

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */


})();