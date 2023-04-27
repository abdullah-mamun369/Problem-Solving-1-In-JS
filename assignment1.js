// User Input=======================================
const prompt = require('prompt-sync')();

// // Task-1==============================================
// const mark = parseInt(prompt('Enter your mark '));

// if (mark > 50 && mark <= 100) {
//     console.log("Pass");
// }
// else {
//     console.log("You shall not pass");
// }



// // Task-2==============================================
// const mark = (prompt('Enter your mark '));

// if (mark >= 90 && mark <= 100) {
//     console.log("Grade A");
// }
// else if (mark >= 80) {
//     console.log("Grade B");
// }
// else if (mark >= 70) {
//     console.log("Grade C");
// }
// else if (mark >= 60) {
//     console.log("Grade D");
// }
// else if (mark >= 50) {
//     console.log("Grade E");
// }
// else if (mark >= 0) {
//     console.log("Grade F");
// }
// else {
//     console.log("Worng Input");
// }



// // Task-3==============================================
// const height = parseInt(prompt('Enter height '));
// const weight = parseInt(prompt('Enter weight '));
// const area = height * weight;

// console.log("Area is " + area);



// // Problem-4=======================================================
// const a = parseInt(prompt('Enter your age: '));
// const s = parseInt(prompt('Enter your salary: '));

// if (a < 18 || s < 10000) {
//     console.log('No tax');
// }

// else if (s <= 20000) {
//     console.log('Your tax is ' + s * (5 / 100));
// }
// else if (s > 20000) {
//     console.log('Your tax is ' + s * (10 / 100));
// }



// // Problem-5=======================================================
// const a = parseInt(prompt('Enter the second: '));

// if (a < 60) {
//     console.log(a + 'seconds');
// }

// else if (a < 3600) {
//     console.log(Math.floor(a / 60) + 'minutes ' + a % 60 + 'seconds');
// }

// else {
//     console.log(Math.floor(a / 3600) + 'Hours ' + (Math.floor((a % 3600) / 60)) + 'minutes ' + a % 60 + 'seconds');
// }

// // Problem-5=======================================================
// let a = parseInt(prompt('Enter the second: '));
// let hours = Math.floor(a / 3600);
// let minutes = Math.floor((a % 3600) / 60);
// let seconds = a % 60;


// console.log(hours + "hours " + minutes + "minutes " + seconds + "seconds");



// // Problem-6=======================================================
// const s = parseInt(prompt('Type the value of "s": '));

// if (s < 100) {
//     console.log('The value of "L" is: ' + (3000 - (125 * (s * s))));
// }

// else if (s >= 100) {
//     console.log('The value of "L" is: ' + (12000 / (4 + ((s * s) / 14900))));
// }



// // Problem-7=======================================================
// const x = parseInt(prompt('Type the value of "x": '));
// const y = parseInt(prompt('Type the value of "y": '));
// const z = parseInt(prompt('Type the value of "z": '));

// const s = ((x + y + z) / 2);

// const area = (((s - x) * (s - y) * (s - z)) / (1 / s));

// console.log('The value of "L" is: ' + area);



// // Problem-8=======================================================
// const article = parseInt(prompt('Type the value of "x": '));

// const fee = (article * 500);

// console.log('The fees is: ' + fee);



// // Problem-9=======================================================
// let a = parseInt(prompt('Type a number: '));
// let b = parseInt(prompt('Type a number: '));
// let c = parseInt(prompt('Type a number: '));

// let l = a;

// if (l < b) {
//     l = b;
//     if (l < c) {
//         l = c
//     }
// }

// else {
//     if (l < c) {
//         l = c
//     }
// }

// console.log("Largest number is " + l);




// // Problem-10=======================================================
// let c = prompt('Type your car name: ');

// for (i = 0; i < 4; i++) {
//     console.log(c);
// }



// // Problem-11=======================================================
// let a = parseInt(prompt('Type a number: '));
// let b = parseInt(prompt('Type a number: '));

// let x = a;
// a = b;
// b = x;

// console.log(a, b);




// // Problem-12=======================================================
// let a = parseInt(prompt('Type a number: '));
// let b = parseInt(prompt('Type a number: '));
// let c = parseInt(prompt('Type a number: '));

// let x = b;
// b = a;
// a = c;
// c = x;


// console.log("a=" + a, "b=" + b, "c=" + c);




// // Problem-13=======================================================
// let a = parseInt(prompt('Type a number: '));
// let b = parseInt(prompt('Type a number: '));
// let c = parseInt(prompt('Type a number: '));
// let d = parseInt(prompt('Type a number: '));

// let x = c;
// c = d;
// d = a;
// a = b;
// b = x;



// console.log("a=" + a, "b=" + b, "c=" + c, "d=" + d);



// // Problem-14=======================================================
// let a = parseInt(prompt('Type a number: '));

// if (a < 0) {
//     console.log(a * -1);
// }

// else {
//     console.log(a);
// }




// // Problem-14=======================================================
// let a = parseInt(prompt('Type a number: '));

// a = Math.abs(a);
// console.log(a);




// // Problem-15=======================================================
// let a = parseInt(prompt('Type a number: '));

// if (a >= 4 && a <= 6) {
//     console.log("Breakfast");
// }
// else if (a >= 12 && a <= 13) {
//     console.log("Lunch");
// }
// else if (a >= 16 && a <= 17) {
//     console.log("Snacks");
// }
// else if (a >= 19 && a <= 20) {
//     console.log("Dinner");
// }

// else if (a >= 0 && a <= 24) {
//     console.log("Patience is a virtue");
// }

// else {
//     console.log("Wrong Time");
// }


// 94500 20000 64000 7000

// =================================================================

















