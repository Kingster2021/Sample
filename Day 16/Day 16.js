let num1 = 1;
let printValue;
num1 = 21;

if (num1 > 10 && num1 <20) {
    printValue = "The value of num1 is greater than 10";
}
else if (num1 == 10 || num1 == 21) {
    printValue = "The value of num1 is equal to 10 or equal to 21";
}
else if (num1 > 5) {
    printValue = "The value of num1 is greater than 5";
}
else {
    printValue = "The value of num1 is less than 10";
}
console.log(printValue);

// 
let printStatus;
const age = 19;

// if(age >= 18) {
//     printStatus = "Approve";
// }
// else {
//     printStatus = "Disapprove";
// }

// Tenerary operator
printStatus = (age >= 18) ? "Approve" : "Disaaprove";



console.log(printStatus);


const hourOfDay = new Date().getHours();
let greeting;

if (hourOfDay >= 4 && hourOfDay < 12) {
    greeting = "Good Morning!";
}
else if (hourOfDay >=12 && hourOfDay <= 18) {
    greeting = "Good Afternoon!";
}
else {
    greeting = "Good Evening!"
}

console.log(hourOfDay);
console.log(greeting);


const day = "Friday";

switch(day) {

    case "Monday":
        console.log("Today is Monday");
        break;

    case "Friday":
        console.log("Happy Weekend!");
        break;

    default:
        console.log("Today is Unkonwn"); 
}


// Loops

let num = 0;

// while (num < 10) {
//     console.log(num);
//     num++; // increment, num = num + 1
// }

// do {
//     console.log(num);
//     num++;

// } while (num < 10);

// (initialization; condition; post-loop operation)
for (let i = 0; i < 10; i++) {
    
    
    console.log(i);
}

