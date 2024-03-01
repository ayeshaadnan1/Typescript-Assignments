// part 1

// Using if-else chain
let alienColor: string = "green"; 

if (alienColor === "green") {
    console.log("The player earned 5 points.");
} else if (alienColor === "yellow") {
    console.log("The player earned 10 points.");
} else if (alienColor === "red") {
    console.log("The player earned 15 points.");
} else {
    console.log("Unknown alien color."); // If not filled.
}

// Part 2

// Using switch statement
alienColor = "yellow"; // alienColor ka variable V1 file me Declared he.

switch (alienColor) {
    case "green":
        console.log("The player earned 5 points.");
        break;
    case "yellow":
        console.log("The player earned 10 points.");
        break;
    case "red":
        console.log("The player earned 15 points.");
        break;
    default:
        console.log("Unknown alien color."); // If not filled        
}

// part 3 

//  Using object mapping
alienColor = "red"; // alienColor ka variable V1 file me Declared he.

const pointMap: {[key: string]: number} = {
    "green": 5,
    "yellow": 10,
    "red": 15
};

const points: number | undefined = pointMap[alienColor];

if (points !== undefined) {
    console.log(`The player earned ${points} points.`);
} else {
    console.log("Unknown alien color."); // If not Filled than it was working
}