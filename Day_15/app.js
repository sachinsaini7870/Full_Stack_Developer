// "****************************** Console.log Practice ******************************"

console.log("****************************** Console.log Practice ******************************")

console.log("Hello World");

let a = 5;
let b = 10;

console.log("The value of a and b is :", a + b);

let pencilPrice = 10;
let erasorPrice = 5;

// let output = "The toral price is : "+ (pencilPrice+erasorPrice) + " Rupees.";
let output = `The total price is : ${pencilPrice + erasorPrice} Rupees.`;

console.log("The total price Pencil and Erasor is :", pencilPrice + erasorPrice, "Rupees.");
console.log(output);

// "****************************** Arithmetic Operators in JavaScript ******************************"
console.log("****************************** Arithmetic Operators in JavaScript ******************************");

let x = 10;
let y = 5;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

// "****************************** Urinary operators in JavaScript ******************************"
console.log("****************************** Urinary operators in JavaScript ******************************");

let xa = 10;
let xb = 5;

console.log(xa++); // xa = 10
console.log(++xa); // xa = 12

// "****************************** Assignment operators in JavaScript ******************************"
console.log("****************************** Assignment operators in JavaScript ******************************");

let ya = 10;
let yb = 5;
yb = ya;
console.log(yb); // yb = 10

// "****************************** Comparision operators in JavaScript ******************************"
console.log("****************************** Comparision operators in JavaScript ******************************");

let age = 18;
console.log("age(18) > 18"); //false
console.log(age > 18); //false
console.log("age(18) >= 18"); //true
console.log(age >= 18); //true
console.log("age(18) < 18"); //false
console.log(age < 18); //false
console.log("age(18) <= 18"); //true
console.log(age <= 18); //true

// ***** compares value, not type *****
console.log("***** compares value, not type *****");
console.log('"123" == 123');
console.log("123" == 123);
console.log('"1" == 1');
console.log("1" == 1);
console.log("0 == ''");
console.log(0 == '');
console.log("null == undefined");
console.log(null == undefined);

// ***** compares value & type (Strict Comparision) *****
console.log("***** compares value & type (Strict Comparision) *****");
console.log('"123" === 123');
console.log("123" === 123);
console.log('"1" === 1');
console.log("1" === 1);
console.log("0 === ''");
console.log(0 === '');
console.log("null === undefined");
console.log(null === undefined);

// ***** comparison for non-numbers *****
console.log("***** comparison for non-numbers *****");
console.log("'a' > 'A'");
console.log('a' > 'A');
console.log("'a' > 'b'");
console.log('a' > 'b');
console.log("'b' < 'c'");
console.log('b' < 'c');
console.log("'B' < 'C'");
console.log('B' < 'C');
console.log("'*' < '&'");
console.log('*' < '&');

// "****************************** Logical operators in JavaScript ******************************"
console.log("****************************** Logical operators in JavaScript ******************************");
// ***** Logical AND *****
console.log("***** Logical AND *****");
console.log("true && true");
console.log(true && true);
console.log("true && false");
console.log(true && false);
console.log("false && true");
console.log(false && true);
console.log("false && false");
console.log(false && false);

console.log("____________Try Different example_______");
console.log("(5 > 3) && (3 > 1)");
console.log((5 > 3) && (3 > 1));
console.log("(5 > 3) && (3 < 1)");
console.log((5 > 3) && (3 < 1));
console.log("(5 < 3) && (3 > 1)");
console.log((5 < 3) && (3 > 1));
console.log("(5 < 3) && (3 < 1)");
console.log((5 < 3) && (3 < 1));

console.log("____________Try Different example_______");
let marks3 = 90;
console.log("marks3 >= 33 && marks3 >= 80");
if (marks3 >= 33 && marks3 >= 80) {
    console.log("Pass");
    console.log("A+");
    console.log(`Marks is ${marks3}`);

}

// ***** Logical OR *****
console.log("***** Logical OR *****");
console.log("true || true");
console.log(true || true);
console.log("true || false");
console.log(true || false);
console.log("false|| true");
console.log(false || true);
console.log("false|| false");
console.log(false || false);

console.log("____________Try Different example_______");
let marks4 = 40;
console.log("marks4 >= 33 || marks4 >= 80");
if (marks4 >= 33 || marks4 >= 80) {
    console.log("Pass");
    console.log("A+");
    console.log(`Marks is ${marks4}`);
}

// ***** Logical NOT *****
console.log("***** Logical NOT *****");
console.log("!true");
console.log(!true);
console.log("!false");
console.log(!false);
console.log("!(5 < 3)");
console.log(!(5 < 3));

console.log("____________Try Different example_______");
let marks5 = 75;
console.log("!(marks5 < 33)");
if (!(marks5 < 33)) {
    console.log("Pass");
    console.log("A+");
    console.log(`Marks is ${marks5}`);
}
console.log("____________Try Different example_______");
let marks6 = 75;
console.log("!(marks6 > 33 && marks6 <= 80) || true");
if (!(marks6 > 33 && marks6 <= 80) || true) {
    console.log("Pass");
    console.log("A+");
    console.log(`Marks is ${marks6}`);
}
let marks7 = 75;
console.log("!(marks7 > 33 && marks7 <= 80) || !false");
if (!(marks7 > 33 && marks7 <= 80) || !false) {
    console.log("Pass");
    console.log("A+");
    console.log(`Marks is ${marks7}`);
}

// "****************************** Practice Questions in JavaScript ******************************"
console.log("****************************** Practice Questions in JavaScript ******************************");
console.log("Good String vs Bad String Logic");
let str = "apple";
if ((str[0] === 'a') && (str.length > 3)) {
    console.log(`${str} is a Good String`);
} else {
    console.log(`${str} is a Bad String`);
}

console.log("Safe and UnSafe Logic");
let num = 12;
if ((num % 3 === 0) && ((num + 1 === 15) || (num - 1 === 11))) {
    console.log("Safe");
} else {
    console.log("Unsafe");
}

// "****************************** Conditional Statements in JavaScript ******************************"
console.log("****************************** Conditional Statements in JavaScript ******************************");

// *****______if statement______*****
console.log("*****______if statement______*****");
console.log("before my if statement");
let age2 = 23;
if (age2 >= 18) {
    console.log(`you can vote and age2 is ${age2}`);
    console.log(`you can drive and age2 is ${age2}`);
}
console.log("after my if statement");
console.log("____________Try again_______");
console.log("before my if statement");
let age3 = 14;
if (age3 >= 18) {
    console.log(`you can vote and age3 is ${age3}`);
    console.log(`you can drive and age3 is ${age3}`);
}
console.log("after my if statement");

console.log("____________Try Different example_______");
let firstName = "sachin";
if (firstName == "sachin") {
    console.log(`Welcome ${firstName}`);
}

// "****************************** Practice Questions in JavaScript ******************************"
console.log("****************************** Practice Questions in JavaScript ******************************");

let color = "green";

if (color === "red") {
    console.log(`Stop!, Light color is ${color}`);
}
if (color === "yellow") {
    console.log(`Slow Down!, Light color is ${color}`);
}
if (color === "green") {
    console.log(`Go, Light color is ${color}`);
}

// *****______if else if statement______*****
console.log("*****______if else if statement______*****");

let age4 = 14;
if (age4 >= 18) {
    console.log("you can vote");
} else if (age4 < 18) {
    console.log("you cannot vote");
}

console.log("____________ Grading System using esle if _______");

let marks = 95;
if (marks >= 80) {
    console.log(`A+ , Your marks is ${marks}`);
} else if (marks >= 60) {
    console.log(`A , Your marks is ${marks}`);
} else if (marks >= 33) {
    console.log(`B , Your marks is ${marks}`);
} else if (marks < 33) {
    console.log(`F , Your marks is ${marks}`);
}

// *****______else statement______*****
console.log("*****______else statement______*****");

let age5 = 14;
if (age5 >= 18) {
    console.log("you can vote");
} else {
    console.log("you cannot vote");
}

// *****______ Traffic Light problem using else statement ______*****
console.log("*****______ Traffic Light problem using else statement ______*****");
let color2 = "white";

if (color2 === "red") {
    console.log(`Stop!, Light color2 is ${color2}`);
}
if (color2 === "yellow") {
    console.log(`Slow Down!, Light color2 is ${color2}`);
}
if (color2 === "green") {
    console.log(`Go, Light color2 is ${color2}`);
} else {
    console.log("traffic light is broken");
}

// "****************************** Practice Questions in JavaScript ******************************"
console.log("****************************** Practice Questions in JavaScript ******************************");

let size = "XL";

if (size === "XL") {
    console.log(`Price of ${size} Popcorn is Rs. 250`);
}
else if (size === "L") {
    console.log(`Price of ${size} Popcorn is Rs. 200`);
}
else if (size === "M") {
    console.log(`Price of ${size} Popcorn is Rs. 100`);
} else {
    console.log(`Price of ${size} Popcorn is Rs. 50`);
}


// *****______ Nested if-else statement______*****
console.log("*****______ Nested if-else statement______*****");

let marks2 = 45;

if (marks2 >= 33) {
    console.log("Pass");
    if (marks2 >= 80) {
        console.log("Grade : 0");
        console.log(`Marks is ${marks2}`);

    } else {
        console.log("grade : A");
        console.log(`Marks is ${marks2}`);

    }
} else {
    console.log("Better luck next time!");
    console.log(`Marks is ${marks2}`);

}

// "****************************** Switch Statement in JavaScript ******************************"
console.log("****************************** Switch Statement in JavaScript ******************************");

let color3 = "red";

switch (color3) {
    case "red":
        console.log(`Stop, Light is ${color3}`);
        break;
    case "yelllo":
        console.log(`Slow Down, Light is ${color3}`);
        break;
    case "green":
        console.log(`Go, Light is ${color3}`);
        break;

    default:
        console.log(`Broken Light, Light is ${color3}`);
        break;
}
console.log("After Switch statement.");

// "****************************** Practice Questions in JavaScript ******************************"
console.log("****************************** Practice Questions in JavaScript ******************************");

let day = 5;

switch (day) {
    case 1:
        console.log(`Monday, you enter ${day}`);
        break;
    case 2:
        console.log(`Tuesday, you enter ${day}`);
        break;
    case 3:
        console.log(`Wednesday, you enter ${day}`);
        break;
    case 4:
        console.log(`Thursday, you enter ${day}`);
        break;
    case 5:
        console.log(`Friday, you enter ${day}`);
        break;
    case 6:
        console.log(`Saturday, you enter ${day}`);
        break;
    case 7:
        console.log(`Sunday, you enter ${day}`);
        break;

    default:
        console.log(`You enter wrong day no. ${day}`);
        break;
}