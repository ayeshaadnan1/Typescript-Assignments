"use strict";
// Array for usernames
let usernames = ['admin', 'Ayesha', 'Waleed', 'Saad', 'bia'];
// Checking User Availiblity 
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    // Removimg all usernames from the array
    usernames = [];
    console.log("All usernames have been removed. " + usernames.length);
}
