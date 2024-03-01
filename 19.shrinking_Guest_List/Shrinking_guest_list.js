"use strict";
let Guest_list = ['Waleed', 'Saad', 'Ayesha'];
// for(let i=0; i<Guest_list.length; i++){
//     console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
//     }
let absent_Guest = 'saad';
let new_Guest = 'Bia';
Guest_list[0] = new_Guest;
// for(let i=0; i<Guest_list.length; i++){
// console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
//         }
// console.log(`Mr. ${absent_Guest} is not comming.`);
// console.log ('Good News! We find Big Table So we are inviting 3 more guests.' )
Guest_list.unshift('Sir Zia Khan');
Guest_list.splice(2, 0, 'Farhana');
Guest_list.push('Adnan');
// for(let i=0; i<Guest_list.length; i++){
//     console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
//      }
// console.log('\nsorry we can not arrange big table, only Two peoples willl be invited.');
while (Guest_list.length > 2) {
    let remove_Guest = Guest_list.pop();
    console.log(`Sorry Mr. ${remove_Guest}, You are not invited for Dinner.`);
}
for (let i = 0; i < Guest_list.length; i++) {
    //  console.log('Dear Mr. ' + Guest_list[i] + ',\n\nYou are still invited.\n\nThank You!\n\n')
}
Guest_list.splice(0, 2);
console.log(Guest_list);
//Exercise 19
//Print a messagee indicating the number of people you are inviting to dinner.
console.log(`Total number of Guest Are: ${Guest_list.length}`);
