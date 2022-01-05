(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];
    console.log('Original unedited array'); // added this line
console.log(planets); //added this
    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

    console.log('Adding "The Sun" to the beginning of the planets array.');
    planets.unshift("The Sun"); // added this line
    console.log(planets);

    console.log('Adding "Pluto" to the end of the planets array.');
    planets.push("Pluto"); // added this
    console.log(planets);

    console.log('Removing "The Sun" from the beginning of the planets array.');
    planets.shift(); //added this
    console.log(planets);

    console.log('Removing "Pluto" from the end of the planets array.');
    planets.pop(); //added this
    console.log(planets);

    console.log('Finding and logging the index of "Earth" in the planets array.');
    console.log(planets.indexOf("Earth")); //added this


    console.log("Reversing the order of the planets array.");
    planets.reverse(); //added this
    console.log(planets);

    console.log("Sorting the planets array.");
    planets.sort(); // added this
    console.log(planets);
})();