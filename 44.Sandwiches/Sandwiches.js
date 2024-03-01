"use strict";
function makeSandwich(items) {
    console.log("Making a sandwich with:");
    items.forEach(item => console.log("- " + item));
    console.log("Enjoy your sandwich!\n");
}
makeSandwich(["Bread ", "Capsicum", "Cheese", "Chicken Patie", "barbque sauce"]);
makeSandwich(["Bread", "Onions", "Mayonnise", 'Vegetables']);
makeSandwich(["Bread", "Tomatos", "Green Chilies", "Chicken", "Tanduri sauce"]);
