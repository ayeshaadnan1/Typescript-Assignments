// Array Of variable  magicians
const magicians: string[] = ["Ayesha", "Waleed", "Saad", "Bia"];

function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great megition " + magicians[i];
    }
}

function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

make_great(magicians);
show_magicians(magicians);
