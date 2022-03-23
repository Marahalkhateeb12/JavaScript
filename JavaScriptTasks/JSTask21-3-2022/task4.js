
/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/
function tellFortune(job,location,partner,children){
    document.write(`<br>ex.1 <br> You will be a  ${job} in ${location} , and married to ${partner} with ${children} kids.`)
}
tellFortune('software engineer', 'Jordan', 'Alice', 3);
/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/
function calculateDogAge(age){
    year=age*7;
    return year;
    document.write(`Your doggie is NN years old in dog years!`)
}
document.write(`<br> <br> ex.2 <br> Your doggie is ${calculateDogAge(2)} years old in dog years!`);

/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/
function calculateSupply(age ,amount){
    var maxAge = 100;
    var total = (amount * 365) * (maxAge - age);
    return total;
}
document.write(`<br> <br> ex.3 <br>You will need ${calculateSupply(30,3)} cups of tea to last you until the ripe old age of 100`);


/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/
function greet(name){
    return `Hello ${name}`;
}
document.write(`<br> <br> ex.4 <br> ${greet("Marah")}`);


function double(x) {
  return 2 * x;
}

function double(x) {
  return 2 * x;
}

function double(x) {
  return 2 * x;
}
document.write(`<br> <br> ex.5 <br>  the double of 7 is ${double(7)}`);




/*

fix these functions:*/
function double1(x){
  return 2 * x ;
}

function double2(x){
return 2 * x;
}

function double3  (x) {
  return 2 * x;
}
document.write(`<br> <br> ex.6 <br>  the double1 of 7 is ${double1(7)}  <br>  the double2 of 8 is ${double2(8)}  <br>  the double3 of 4 is ${double3(4)}`);




/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
function cube(num){
    return num**3;
}
document.write(`<br> <br> ex.7 <br>  the cube of 4 is ${cube(4)}`); 

/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/
function multiply(num1,num2){
    return num1*num2;
}
let x=4; 
y=5;
document.write(`<br> <br> ex.8 <br>  the multiplay of ${x} and ${y} is ${multiply(x,y)}`); 


/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/
function canIGetADrivingLicense(age){
    if(age>=20)
    return `Yes you can.`;
    else 
    return `please come back after ${20-age} years to get one `;
}

document.write(`<br> <br> ex.9 <br>  ${canIGetADrivingLicense(17)}`); 

/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/
function sameLength(str1,str2){
    if(str1.length==str2.length)
    return true;
    else 
    return false;

}
document.write(`<br> <br> ex.10 <br> is tree and car have the same length? <br> ${sameLength("tree","car")}`); 

/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/
function largerNubmer(num1,num2){
    if (num1>num2)
    return num1;
else 
return num2;
}
document.write(`<br> <br> ex.11 <br> what is the larg number (4,8)? <br> ${largerNubmer(4,8)}`); 

/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/
function smallerNubmer(n1,n2,n3){
    if(n1<n2 && n1<n3)
    return n1;
    else if(n2<n1 && n2<n3)
    return n2;
    else 
    return n3;
}
document.write(`<br> <br> ex.12 <br> what is the small number (99,3,77)? <br> ${smallerNubmer(99,3,77)}`); 

/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/
function shorterString(s1,s2,s3,s4,s5){
    if( s1.length<s2.length && s1.length<s3.length && s1.length<s4.length && s1.length<s5.length )
    return s1;
    else  if( s2.length<s1.length && s2.length<s3.length && s2.length<s4.length && s2.length<s5.length )
    return s2;
    else  if( s3.length<s1.length && s3.length<s2.length && s3.length<s4.length && s3.length<s5.length )
    return s3;
    else  if( s4.length<s1.length && s4.length<s3.length && s4.length<s2.length && s4.length<s5.length )
    return s4;
    else 
    return s5;
}
document.write(`<br> <br> ex.13 <br> the short string ("air","by","car","school","github") <br> is  ${shorterString("air","by","car","school","github")}`); 


/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/

/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/
function isEven(num){
    if(num % 2==0)
    return true;
    else 
    return false;
}
document.write(`<br> <br> ex.15 <br> is 8 even number ? <br> ${isEven(8)}`); 


/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/
function isOdd(num){
    if(num % 2==0)
    return false;
    else 
    return true;
}

document.write(`<br> <br> ex.16 <br> is 8 odd number ? <br> ${isOdd(8)}`); 

/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
function positive(num){
    if (num>=0)
    return num;
    else 
    return Math.abs(num);
}
document.write(`<br> <br> ex.17 <br> the positive version of -80 <br>is ${positive(-80)}`); 


/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/
function fullName(fname,lname){
    return `${fname} ${lname}`;
}
document.write(`<br> <br> ex.18 <br> My full name : ${fullName("Marah","Al-khateeb")}`);

/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/
function average(n1,n2,n3,n4,n5){
    return (n1+n2+n3+n4+n5)/5;
}
document.write(`<br> <br> ex.19 <br> The average of (5,7,9,3,5) is ${average(5,7,9,3,5)}`);



/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/
function randomNumber(){
    return Math.random();
}
document.write(`<br> <br> ex.20 <br> The random number is  ${randomNumber()}`);

/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/
function randomBetweenNumbers(n1,n2){
    return Math.random() * (n1 - n2)  + n2;
}
document.write(`<br> <br> ex.21 <br> The random number between 7 and 9 is  ${randomBetweenNumbers(7,9)}`);

/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/
function scoreInUniversty(num){
    if(num>=0 && num<=49)
    return 'F';
    else if(num>=50 && num<=69)
    return 'D';
    else   if(num>=70 && num<=84)
    return 'C';
    else   if(num>=85 && num<=94)
    return 'B';
    else   if(num>=95 && num<=100)
    return 'A';
}
document.write(`<br> <br> ex.22 <br> The alpabet in the unevirsty of 96 is ${scoreInUniversty(96)} <br> The alpabet in the unevirsty of 3 is ${scoreInUniversty(3)} <br>The alpabet in the unevirsty of 77 is ${scoreInUniversty(77)} `);

/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/
function counter(){
   return ++count;
}
count=0;
document.write(`<br> <br> ex.23 <br> First time ${counter()} <br> Second time ${counter()} <br> Third time ${counter() }`);
/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/
function resetCounter(){
    if( count!=0){
    return ` ${count} and the counter reset now`;
    count=0;
    }
}
document.write(`<br> <br> ex.24 <br> Reset the counter ${resetCounter()} `);