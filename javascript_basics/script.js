// Variables and data types.

// var firstName = 'John';
// console.log(firstName);

// var lastName = 'Smith';
// var age = 28;

// var fullAge = true;
// console.log(fullAge);

// var job;
// console.log(job);

// job = 'Teacher';
// console.log(job);

// // variable naming rules
// var $3 = 3;
// console.log($3)

/******** Variable mutation and type coercion.
 *
 */
// type coercion
// var firstName = 'John';
// var age = 28;
// console.log(firstName + ' ' + age);

// var job, isMarried;
// job = 'teacher';
// isMarried = false;

// console.log(firstName + ' is a ' + age +  ' year old ' + job + '. Is he married? ' + isMarried);

// variable mutation
// age = 'twenty eight';
// job = 'driver';

// alert(firstName + ' is a ' + age +  ' year old ' + job + '. Is he married? ' + isMarried);

// var lastName = prompt('What is his last Name?');
// console.log(firstName + ' ' + lastName);

/***************
 * Basic operators
 */

// Math operators
//  var year, yearJohn, yearMark;
//  now = 2018
//  ageJohn = 28;
//  ageMark = 33;

//  yearJohn = now - 28;
//  yearMark = now - 33;
//  console.log(yearJohn);
//  console.log(now + 2);
//  console.log(now * 2);
//  console.log(now / 10);

//  // Logical operators
//  var johnOlder = ageJohn > ageMark;
//  console.log(johnOlder);

//  // type of operator
//  console.log(typeof johnOlder);
//  console.log(typeof ageJohn);
//  console.log(typeof 'Mark is Older then John');
//  var x;
//  console.log(typeof x);

/********************
 * Operator precedence
 * codingheroes.io/resources
 */

//  var now = 2018;
//  var yearJohn = 1989;
//  var fullAge = 18;

//  //multiple operators
//  var isFullAge = now - yearJohn >= fullAge; //true
//  console.log(isFullAge);

//  //Grouping
//  var ageJohn = now - yearJohn;
//  var ageMark = 35;
//  var average = (ageJohn + ageMark) / 2;
//  console.log(average);

//  //Multiple assignments
//  var x, y;
//  x = y = (3 +5) * 4 - 6; // 8*4-6 // 32 -6 // 26
//  console.log(x,y);

//  // 2+4+5 - left to right
//  // assignments operators works from right to left

//  // More operators
//  x *= 2;
//  // x = x * 2; same as
//  console.log(x);
//  x += 10;
//  //x = x + 10; same as
//  console.log(x);
//  x = x + 1;
//  //x += 1; same as
//  //x++; same as

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/

// assign values to variables for Mark and John's mass and height
// var markMass, markHeight;
// markMass = 100;
// markHeight = 3.1

// var johnMass, johnHeight;
// johnMass = 110;
// johnHeight = 2.7;

// // Calculate Mark and John's BMI's
// var markBMI = markMass / (markHeight * markHeight);
// var johnBMI = johnMass / (johnHeight * johnHeight);
// // log the BMIs to console to test
// console.log(markBMI, johnBMI);

// // create a boolean variable - does mark have a higher BMI then John?
// var isMarkBMI = markBMI > johnBMI;
// console.log('Is Mark\'s BMI higher then John\'s BMI? ' + isMarkBMI);

/*****
 * IF / ELSE statements
 */

//  var firstName = 'John';
//  var civilStatus = 'single';
//  if (civilStatus === 'married'){
//      console.log(firstName + ' is married!');
//  } else {
//      console.log(firstName + ' is not married!')
//  }
//  var isMarried = true;
//  if (isMarried) {
//      console.log(firstName + ' is married!');
//  } else {
//      console.log(firstName + ' is not married!')
//  }

// //  assign values to variables for Mark and John's mass and height
// var markMass, markHeight;
// markMass = 300;
// markHeight = 3.1

// var johnMass, johnHeight;
// johnMass = 190;
// johnHeight = 2.7;

// // Calculate Mark and John's BMI's
// var markBMI = markMass / (markHeight * markHeight);
// var johnBMI = johnMass / (johnHeight * johnHeight);
// // log the BMIs to console to test
// console.log(markBMI, johnBMI);

// // create a boolean variable - does mark have a higher BMI then John?
// var isMarkBMI = markBMI > johnBMI;
// if (markBMI > johnBMI){
//     console.log('Mark\s BMI is higher then John\s');
// } else {
//     console.log('John\s BMI is higher then Mark\s');
// }

/***
 * Boolean Logic
 *
 */

// AND (&&) => true if ALL are true
// OR (||) => true if ONE is true
// NOT (!) => inverts true/false value

//  var firstName = 'John';
//  var age = 29;

//  if (age < 13) {
//      console.log(firstName + ' is a boy. ');
//  } else if (age >= 13 && age < 20) {//between 13 and 20 = age >= 13 AND < 20
//      console.log(firstName + ' is a teenager. ');
//  } else if (age >= 20 && age < 30) {
//      console.log(firstName + ' is a young man. ');
//  }
//     else {
//      console.log(firstName + ' is a man. ');
//  }

/****
 * Ternary Operator and Switch Statements
 */
// ternary operator
// var firstName = "John";
// var age = 25;
// age >= 30
//   ? console.log(firstName + " drinks beer. ")
//   : console.log(firstName + " Drinks Juice. ");

// var drink = age >= 18 ? "beer" : "juice";
// console.log(drink);

// // same as this:
//  if (age >= 18) {
//      var drink = 'beer';
//  } else {
//      var drink = 'juice';
//  }

// // switch statement
// var age = 20;

// var job = "cop";
// switch (job) {
//   case "teacher":
//     console.log(firstName + " Teaches kids how to code. ");
//     break;
//   case "driver":
//     console.log(firstName + "Driver drives a uber");
//     break;
//   case "designer":
//     console.log(firstName + " Designs awesome websites. ");
//     break;
//   default:
//     console.log(firstName + " does something else. ");
//     break;
// }

// var age = 20;
// var firstName = "John";
// var firstName = "John";
// var age = 20;

// var firstName = 'John';
// var age = 25;
// switch (true) {
//   case age < 13:
//     console.log(firstName + " is a boy. ");
//     break;
//   case age >= 13 && age < 20:
//     console.log(firstName + " is a teenager. ");
//     break;
//   case age >= 20 && age < 30:
//     console.log(firstName + " is a young man. ");
//     break;
//   default:
//     console.log(firstName + " is a man. ");
// }

/**
 * Truthy and Falsy values and equality operators 
 * 
 * falsy values: undefined, null, 0, '', NaN
 * 
 * truthy values: NOT falsy values
 */

// var height;
// height = '23';
// if (height || height === 0) {
//   console.log('Variable is defined');

// } else {
//   console.log('Variable has not been defined. ');

// }

// //equality operators
// if (height == '23') {
//   console.log('The == operator does type coercion');
// }

/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

// assign variables for each team
// var johnTeamAVGPTS, mikeTeamAVGPTS, maryTeamAVGPTS;
// johnTeamAVGPTS = (89 + 120 + 103) / 3;
// mikeTeamAVGPTS = (116 + 94 + 123) / 3;
// maryTeamAVGPTS = (97 + 104 + 135) / 3;
// //print scores to console for checking 
//   console.log('John\'s Team average is ' + johnTeamAVGPTS + ' points.');
//   console.log('Mike\'s Team average is ' + mikeTeamAVGPTS + ' points.');
//   console.log('Mary\'s Team average is ' + maryTeamAVGPTS + ' points.');
// // find out who wins and print the winner with score
// if (johnTeamAVGPTS > mikeTeamAVGPTS && johnTeamAVGPTS > maryTeamAVGPTS) {
// console.log('John\'s Team WINS! with ' + johnTeamAVGPTS + ' average points.');
// } else if (mikeTeamAVGPTS > johnTeamAVGPTS && mikeTeamAVGPTS > maryTeamAVGPTS) {
// console.log('Mike\'s team WINS! with ' + mikeTeamAVGPTS + ' average points.');
// } else if (maryTeamAVGPTS > johnTeamAVGPTS && maryTeamAVGPTS > mikeTeamAVGPTS) {
// console.log('Mary\'s team WINS! with ' + maryTeamAVGPTS + ' average points.');
// // else its a tie!
// }  else {
// console.log('It\'s a TIE!');
// }

/*********
 * Functions
 * 
 */

// function calculateAge (birthYear) {
//   return 2020 - birthYear;
// }

// var ageJohn = calculateAge(1990);
// var ageMike = calculateAge(1970);
// var ageJane = calculateAge(1960);

// console.log(ageJohn, ageMike, ageJane);

// function yearsUntilRetirement(year, firstName) {
//     var age = calculateAge(year);
//     var retirement = 65 - age;

//     if (retirement > 0) {
//     console.log(firstName + ' retires in ' + retirement + ' years. ');
//   } else {
//     console.log(firstName + ' is already retired.')
//   }
// }
// yearsUntilRetirement(1990, 'John');
// yearsUntilRetirement(1948, 'Mike');
// yearsUntilRetirement(1969, 'Jane');

/*********
 * Function Statements and Expressions
 */

// function declaration
// function whatDoYouDo(job, firstName) {}

// function expression
// var whatDoYouDO = function(job, firstName) {
//   switch(job) {
//     case 'teacher':
//       return firstName + ' teaches kids how to code';
//     case 'driver': 
//       return firstName + ' drives a cab in Calgary.';
//     case 'designer': 
//       return firstName + ' designs really nice websites';
//     default:
//       return firstName + ' does something else. ';
//   }
// }

// console.log(whatDoYouDO('teacher', 'John'));
// console.log(whatDoYouDO('designer', 'Jane'));
// console.log(whatDoYouDO('teacher', 'Mark'));

//expressions alaways produce a value
// statements and declarations do not produce a value

/*********
 * Arrays
 */

 //arrays are a collection of variables.
//initialize new array
//  var names = ['John', 'Mark', 'Jane'];
//  var years = new Array(1990, 1969, 1948);

//  console.log(names[2]);
//  console.log(names.length);
// // mutate array data
//  names[1] = 'Ben';
//  names[5] ='Mary';
//  console.log(names);

//  // different data types
//  var john = ['John', 'Smith', 1990, 'teacher', 'designer', false];

//  john.push('blue');
//  //push adds element to the end of the array
//  john.unshift('Mr.');
//  //unshift adds element to beginning of array
//  john.pop()
// //pop removes an element from the end of an array
// john.shift();
// // shift removes an elemente from the beginning of an array
//  console.log(john);

//  console.log(john.indexOf(1990))
//  //if index returns nothing will return -1

//  var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
//  console.log(isDesigner);

/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/

// Should use a console log to test your function!

// try 4
// function tipPercentage(onBill){
//   var addTip;
//   if (addTip < 50){
// addTip = .2;
//   } else if (addTip >= 50 && addTip < 200) {
//     addTip = .15;
//   } else addTip = .10;
//   return addTip * onBill;
// }

// var allBills = [124, 48, 268];
// var netTip = [tipPercentage(allBills[0]),
//             tipPercentage(allBills[1]),
//             tipPercentage(allBills[2]),
// ];
// var billTotal = [netTip[0] + allBills[0], 
//                 netTip[1] + allBills[1], 
//                 netTip[2] + allBills[2]
// ];
// console.log(billTotal, netTip);

//try 3
// function cp (bill) {
//   var pct;
//   if (bill < 50){
//    pct = .2;
//   } else if (bill >= 50 && bill <200) {
//   pct = .15;
//   } else pct = .1;
// return pct * bill;
// }
// var bls = [124, 48, 268]
// var pctg = [cp(bls[0]), cp(bls[1]), cp(bls[2])];
// var tb = [bls[0]+pctg[0], bls[1]+pctg[1], bls[2]+pctg[2]];
// console.log (pctg, tb);

// try 2
// function calcPercent(bill) {
// var tip;
// if (bill < 50) {
// tip = .2;
// } else if (bill >= 50 && bill < 200) {
//   tip = .15;
// } else tip = .10;
// return bill * tip;
// }

// 
// var bills = [124, 48, 268];
// var tips = [calcPercent(bills[0]), calcPercent(bills[1]), calcPercent(bills[2])
// ];
// var finalBill = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]
// ];
// console.log (tips, finalBill);

// try 1
// function addTip(bill) {
//   var tipPercentage;
//   if (bill < 50) {
//   tipPercentage = .2;
//   } else if (bill >=50 && bill < 200) {
//   tipPercentage = .15;
//   } else
//   tipPercentage = .1;
//   return tipPercentage * bill;
// }

// var bills = [124, 48, 268];
// var tip = [addTip(bills[0]), 
//             addTip(bills[1]), 
//             addTip(bills[2])];

// var finalBill = [bills[0] + tip[0], 
//                 bills[1] + tip[1],
//                 bills[2] + tip[2]];
// console.log (tip, finalBill);

/**
 * Objects and properties
 */
//object literal
//  var john = {
// firstName: 'John',
// lastName: 'Smith',
// birthYear: 1990,
// family: ['Jane', 'Mark', 'Bob', 'Emily'],
// job: 'teacher',
// isMarried: false
//  }
//  console.log(john.firstName);
//  console.log(john['lastName']);
//  var x = 'birthYear';
//  console.log(john[x]);

// //object mutations
//  john.job = 'designer';
//  john['isMarried'] = true;
//  console.log(john);

//  //new object syntax
// var jane = new Object();
// jane.firstName = 'Jane';
// jane.birthYear = 1969;
// jane['lastName'] = 'Smith';
// console.log(jane);


/***********
 * Objects and methods
 */

// var john = {
//   firstName: 'John',
//   lastName: 'Smith',
//   birthYear: 1992,
//   family: ['Jane', 'Mark', 'Bob', 'Emily'],
//   job: 'teacher',
//   isMarried: false,
//   calcAge: function() {
//     this.age = 2018 - this.birthYear;
//   } 
// };
// 'this' is used to pull data from current object

// john.calcAge();
// console.log(john);


/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/

// var johnIndex = {
//   firstName: 'John',
//   mass: 161,
//   height: 3.1,
//   calcBMI: function() {
//     this.bmi = this.mass / (this.height*this.height);
//     return this.bmi;
//   }
// }
// var markIndex = {
//   firstName: 'Mark',
//   mass: 161,
//   height: 3.1,
//   calcBMI: function() {
//     this.bmi = this.mass / (this.height*this.height);
//     return this.bmi;
//   }
// }
// //console.log(johnIndex.firstName, johnIndex.calcBMI());
// //console.log(markIndex.firstName, markIndex.calcBMI());

//   if (johnIndex.calcBMI() > markIndex.calcBMI()) {
//     console.log(johnIndex.firstName + ' has a higher BMI then ' + markIndex.firstName);
// } else if (markIndex.calcBMI() > johnIndex.calcBMI()) {
//   console.log(markIndex.firstName + ' has a higher BMI then ' + johnIndex.firstName);
// } else {console.log('They have the same BMI index.');
// }

/****************************
 * Loops and iterations
 * 
 */

 //for loops
//  for (var i = 5; i <= 10; i+= 2) {
// console.log(i);
//  }

 // i is a standard for a counter in a loop variable.
// i = 0, condition is evaluated 0 < 10, log i to the console, i++
// i =1, 1 < 10 true, log i to the console, i++
//i = 9 , 9 < 10 true, log i to the console , i ++
//i = 10, 10 < 10 FALSE, exit the loop!

// var john = ['John','Smith', 1990, 'designer', false];
// for (var i = 0; i < john.length; i ++) {
//   console.log(john[i]);
// }

// //while loops
// var i = 0;
// while(i < john.length){
//   console.log(john[i]); i ++;
// }

// continue and break statements
// strict different operator is !==
// var john = ['John','Smith', 1990, 'designer', false, 'blue'];
// for (var i = 0; i < john.length; i++) {
// if (typeof john[i] !== 'string') 
//   continue;
//   console.log(john[i]);
// } 
// for (var i = 0; i < john.length; i++) {
//   if (typeof john[i] !== 'string') 
//     break; //becuase the 1990 int breaks the loop
//     console.log(john[i]);
//   } 

//   //looping backwards
//   for (var i = john.length - 1; i >= 0; i--){
//     console.log(john[i]);
//   }

/*****************************
* CODING CHALLENGE 5
*/

/*** 
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

*/
 var john = {
   fullName: 'John'
   bills: [124, 48, 268, 180, 42], 
 }


// create an object including an array with the bill values for john
 //   var john = {
//     allBills: [77, 375, 110, 45],
//     fullName: 'John',
// // create a method inside the object
//     tipCalculate: function(){
//     for (var i = 0; i < this.allBills.length; i++) 
//       {
//         //assign variables for function
//       var percentage;
//       var bill = this.allBills[i];
//         // assign calculations to the variables 
//     if (bill > 50) {
//         percentage = .2;
//       } else if (bill >= 50 && bill < 200) {
//         percentage = .15;
//       } else percentage = .10;
//     // add results to the previous defined arrays (fill arrays with a loop)
//     this.tips = []; //defining array 1
//     this.finalBill = []; // defining array 2
// this.tips[i] = bill * percentage;
// this.finalBill[i] = bill + bill * percentage; 
//     }
//   } 
// }
// console.log(john.finalBill)

