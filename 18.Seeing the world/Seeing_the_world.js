"use strict";
// Store the location in a array, make sure the array  is not in alphabetical order.
let places = ['Italy', 'Australia', 'Turkey', 'Eifel Tower', 'agra'];
//Print your array in its orignal order.
console.log('orignal' + places);
//Print your array in alphabetical order without modifying the actual list.
console.log('copy ' + [...places].sort());
//Show that your array is still in its original order by printing it.
console.log('orignal' + places);
//Print your array in reverse alphabetical order without changing the order of the original list.
console.log('copy' + [...places].sort().reverse());
//Show that your array is still in its original order by printing it again.
console.log('orignal' + places);
//Reverse the order o your list. print the array to show that its order has changed.
console.log('orignal' + places.reverse());
//Reverse the order of your list again. Print the list to show its back to its originalorder.
console.log('original' + places.reverse());
//Sort your array so its stored in alphabetical order. print the array to show that is order has been changed.
console.log('original' + places.sort());
//Sort to change your array so its stored in reverse alphabetical order.Print the list to show that its order has changed.
console.log('original' + places.sort().reverse());
