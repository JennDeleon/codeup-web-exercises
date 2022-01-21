// Create a command line grocery list maker
//
// before prompting the user to enter each item, ask how many items will be entered
// for each item, the user should be prompted to enter in the name, quantity, and category of each grocery item
// Create a GroceryItem class from which to instantiate GroceryItem objects to store in an array
// once the user has entered all items, print out all items grouped by category and alphabetized in each group

let howMany = document.getElementById("How many items are you going to enter?").split(",");
let itemName = prompt("Enter an item name").split(",");
let quantity = prompt("How many?").split(",");
let catagory = prompt("What catagory food is that?").split(",");
let groceries = [];
function groceryList(){

}