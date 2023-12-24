// Question 1

let num = 50;

if (num % 10 === 0) {
    console.log("good");
} else {
    console.log("bad");
}

// Question 2

let username = prompt("Enter your name:");
let age = prompt("Enter your age:");
// let msg = username + " is " + age + " years old.";
let msg = `${username} is ${age} years old.`;
alert(msg);

// Question 3

let quater = 1;

switch (quater) {
    case 1:
        console.log(`January, Februry, March, you enter ${quater}`);
        break;
    case 2:
        console.log(`April, May, June, you enter ${quater}`);
        break;
    case 3:
        console.log(`July, August,September, you enter ${quater}`);
        break;
    case 4:
        console.log(`October, Novembet, December, you enter ${quater}`);
        break;

    default:
        console.log(`You enter wrong quater no. ${quater}`);
        break;
}

// Question 4


console.log("Golden String or Not Logic");
let str = "Aplicable";
if (((str[0] === 'a') || (str[0] === 'A')) && (str.length > 5)) {
    console.log(`${str} is a Golden String`);
} else {
    console.log(`${str} is not Golden String`);
}

// Question 4

let a = 210;
let b = 120;
let c = 130;

if (a > b) {
    if (a > c) {
        console.log(a, " is the Largest");
    } else {
        console.log(c, " is the Largest");
    }
} else {
    if (b > c) {
        console.log(b, " is the Largest");
    }else{
        console.log(c, " is the Largest");
    }
}

// Question 4

let num1 =32;
let num2 =47852;

if ((num1%10)==(num2%10)) {
    console.log("numbers have the same last digit which is", num1%10);
} else {
    console.log("numbers don't have the same last digit.");
}