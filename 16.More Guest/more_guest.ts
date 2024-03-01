

let Guest_list :string[] = ['Waleed','Saad','Ayesha'];
// for(let i=0; i<Guest_list.length; i++){

//     console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
    
//     }


let absent_Guest :string = 'saad' ;

let new_Guest :string = 'Bia';

Guest_list[0]= new_Guest ;

for(let i=0; i<Guest_list.length; i++){

    console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
    
    }

    console.log(`Mr. ${absent_Guest} is not comming.`);

    console.log ('Good News! We find Big Table So we are inviting 3 more guests.' )


    Guest_list.unshift('Sir Zia Khan');
    Guest_list.splice(2,0, 'Farhana');
    Guest_list.push('Adnan');

    for(let i=0; i<Guest_list.length; i++){

        console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
        
        }
    