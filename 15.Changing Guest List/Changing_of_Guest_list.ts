

let Guest_list :string[] = ['Waleed','Saad','Ayesha'];

for(let i=0; i<Guest_list.length; i++){

console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')

}

let absent_Guest :string = 'saad' ;

let new_Guest :string = 'Bia';

Guest_list[0]= new_Guest ;

for(let i=0; i<Guest_list.length; i++){

    console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
    
    }

    console.log(`Mr. ${absent_Guest} is not comming.`)