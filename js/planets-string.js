(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";


    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    var planetsArray = planetsString.split(' ');
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     * */
    var planetsString = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
    var planetsJoin = planetsArray.join("<br>");
    console.log (planetsJoin);
    document.write(planetsString) // this is so I can the what it would look like displayed on the webpage
     /**
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
     var planetsUl = "<ul><li>" + planetsString.join("</li><li>") + "</li></ul>"
    console.log(planetsUl);
    document.write(planetsUl);
})();