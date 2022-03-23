let number1 = prompt("Please Enter the First Number : ");
let number2 = prompt("Please Enter the Second Number : ");
if (number1 > number2) {
    larg = number1;
} else
    larg = number2;
window.alert("The Largest is : " + larg);

let n1 = Number(prompt("Please Enter the First Number : "));
let n2 = Number(prompt("Please Enter the Second Number : "));
let n3 = Number(prompt("Please Enter the Third Number : "));
result = n1 * n2 * n3;
if (result > 0)
    window.alert("The sign is : +");
else
    window.alert("The sign is : -");


let a1 = Number(prompt("Please Enter the First Number : "));
let a2 = Number(prompt("Please Enter the Second Number : "));
let a3 = Number(prompt("Please Enter the Third Number : "));
if (a1 > a2 && a1 > a3) {
    if (a2 > a3) {
        window.alert(a1 + " " + a2 + " " + a3);
    }
    else
        window.alert(a1 + " " + a3 + " " + a2);
} else if (a2 > a1 && a2 > a3) {
    if (a1 > a3) {
        window.alert(a2 + " " + a1 + " " + a3);
    }
    else
        window.alert(a2 + " " + a3 + " " + a1);
} else if (a3 > a1 && a3 > a2) {
    if (a2 > a1) {
        window.alert(a3 + " " + a2 + " " + a1);
    }
    else
        window.alert(a3 + " " + a1 + " " + a2);
}

let num1 = Number(prompt("Please Enter the First Number : "));
let num2 = Number(prompt("Please Enter the Second Number : "));
let num3 = Number(prompt("Please Enter the Third Number : "));
let num4 = Number(prompt("Please Enter the Fourth Number : "));
let num5 = Number(prompt("Please Enter the Fifth Number : "));

if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5)
    window.alert("the largest number is : " + num1)
else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5)
    window.alert("the largest number is : " + num2)
else if (num3 > num2 && num3 > num1 && num3 > num4 && num3 > num5)
    windowalert("the largest number is : " + num3)
else if (num4 > num2 && num4 > num3 && num4 > num1 && num4 > num5)
    window.alert("the largest number is : " + num4)
else if (num5 > num2 && num5 > num3 && num5 > num4 && num5 > num1)
    window.alert("the largest number is : " + num5)

let x= Number(prompt("Please Enter the First Number : ")); 
let y=Number(prompt("Please Enter the First Number : "));
if (x>y)
window.alert("Hello World")
else 
window.alert("Good Bey")

