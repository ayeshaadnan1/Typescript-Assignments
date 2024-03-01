"use strict";
//  Describe_city Fucntion
function describe_city(cityName, country = 'DefaultCountry') {
    console.log(`${cityName} is in ${country}.`);
}
// Result
describe_city('Chaman', 'Karachi');
describe_city('Lucknow', 'India');
describe_city('Mumbai');
