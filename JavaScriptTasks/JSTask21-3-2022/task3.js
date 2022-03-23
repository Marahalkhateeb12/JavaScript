

// All the exercises should use while loop:

// Please be sure to conect this file to another HTML file
// to seprate it from the recursion file

// dDont serach on the internet except if it is written in the question

// You should solve all the question by what you understand from the lecture
// and with your pair not solo

// And dont look or use a code that you wrote before 

console.log('Here is : While')

/*
1
Create a function called subtract
that takes a single parameter n,
and return the subtraction of all
starting from n to 0
Ex: subtract(2); => 2 - 1 - 0 => 1
Ex: subtract(5); => 5 - 4 - 3 - 2 - 1 - 0 => -5
Ex: subtract(9); => 9 - 8 - 7 - 6 - 5 - 4 - 3 - 2 - 1 - 0 => -27
*/
function subtract(n){
    let sub=n;
    n=n-1;
    while(n>0){
        sub=sub-n;
        n--;
    }
    return sub;
}
document.write("ex.1 <br> Subtraction of all starting from 5 to 0 is : " + subtract(5));

/*
2
Create a function called factorial
that takes a single parameter n,
and return the product of all integers up to n starting from 1
Ex: factorial(2); => 2 * 1 => 2
Ex: factorial(4); => 4 * 3 * 2 * 1 => 24
*/
function factorial(n){
    pro=1;
    while(n>0){
        pro=pro*n;
        n--;
    }
    return pro;
}
document.write("<br> <br> ex.2 <br> Product of all starting from 4 to 1 is : " + factorial(4));


/*
3
Create a function called repeatStr
that takes 2 parameters string and number,
and return the string number time with space
Important: the continue condition should be [somthing !== 0]
** Think how we can return nothing ???
** Important: You should dint have extra space at the end
Ex: repeatStr("to",2); => "to to"
Ex: repeatStr("to",4); => "to to to to"
*/
function repeatStr(str,num){
    let s="";
    i=0;
    while(i<num){
        if(i==num-1)
        s = s+str;
        else
        s = s+str+" ";

        i++;
    }
    return s;
}
document.write("<br> <br> ex.3 <br> the string number time 4 : " + repeatStr("to",4));


/*
4
Create a function called sum2
that take two parameter
and will return the sumation from the first number to the second number
Ex: sum2(4, 5); => 4 + 5 => 9
Ex: sum2(3, 6); => 3 + 4 + 5 + 6 => 18
*/
function sum2(n1,n2){
    sum=0;
    if(n1>n2){
    i=n2;
    while(i<=n1){
    sum=sum+i;
    i++;
    }
}
else{
    i=n1;
    while(i<=n2){
    sum=sum+i;
    i++;
    }
}
return sum;
}
document.write("<br> <br> ex.4 <br> the sumation from 3  to 6 is " + sum2(3,6));


/*
5
Create a function called repeatStr2
that takes 2 string parameters,
and return the first string number time
(of the lenght of the secend string) with space betweeen it
** Important: the continue condition should be [somthing!== 0]
** Important: You should't have extra space at the end
Ex: repeatStr2("ro","cc"); => "ro ro"
Ex: repeatStr2("ro","fff"); => "ro ro ro"
*/
function repeatStr2(str1,str2){
    let s="";
    i=0;
    while(i<str2.length){
        if(i==str2.length-1)
        s = s+str1;
        else
        s = s+str1+" ";

        i++;
    }
    return s;
}
document.write("<br> <br> ex.5 <br> the first string number time (of the lenght of the secend string) is " + repeatStr2("ro","fff"));


/*
6
Create a function called multiOf
that takes 3 parameters,
and return the first number mutiple by
(the second one ^ the third number)
** Important: dont use **
Ex: multiOf(4,10,3); => 4000
Ex: multiOf(6,3,2); => 54
Ex: multiOf(6,2,3); => 48
*/
function multiOf(n1,n2,n3){
return (n1*(n2**n3));
}
document.write("<br> <br> ex.6 <br> the  multiOf(4,10,3) is " + multiOf(4,10,3));

/*
7
Create a function called muti2
that take two parameter
and will return the multiplication
from the first number to the second number
Ex: muti2(4, 5); => 4 * 5 => 20
Ex: muti2(3, 6); => 3 * 4 * 5 * 6 => 360
*/
function muti2(n1,n2){
    let multi=1;
    if(n1>n2){
    i=n2;
    while(i<=n1){
    multi=multi*i;
    i++;
    }
}
else{
    i=n1;
    while(i<=n2){
        multi=multi*i;
    i++;
    }
}
return multi;
}
document.write("<br> <br> ex.7 <br> the multiplication from 3  to 6 is " + muti2(3,6));



/*
8
Create a function called numberBetweenUs
that take 2 parameters
and return the number between them
** Important: You should't have extra space at the end and comma
** Important: the stop condition should [num1!==num2-1]
** hint: maybe you will have 2 if statment
numberBetweenUs(2,8) => "3, 4, 5, 6, 7"
numberBetweenUs(1,3) => "2"
*/
function numberBetweenUs(n1,n2){
    let str="";
    if(n1>n2){
        i=n2+1;
        while(i<n1){
            if(i!=n1-1)
        str=str+i+", "
        else
        
        str=str+i;
        i++;
     } }
    else{
        i=n1+1;
        while(i<n2){
            if(i!=n2-1)
            str=str+i+" ,"
            else
            
            str=str+i;
            i++;
     } }
     return str;
}
document.write("<br> <br> ex.8 <br> the numbers between 2 and 8 is " + numberBetweenUs(2,8));

/*
9
Write a function called countDown
that takes one parameter
and return a string represent the count down from the number
that insert to 0
instead of 0 you shoulf have "done"
between each number a comma and space
** you need to use recursion
** Important: You should't have extra space at the end and comma
countDown(5)
=> "5, 4, 3, 2, 1, done"
countDown(2)
=> "2, 1, done"
countDown(7)
=> "7, 6, 5, 4, 3, 2, 1, done"
*/
function countDown(num){
    str="";
    let i=num;
    while(i>=1)
    {
        if(i!=1){
            str=str+i+" ,";
            i--;
        }
        else{
        str=str+i;
        i--;
        }
}
return str;
}
document.write("<br> <br> ex.9 <br> the count down from 7 to 1 is " + countDown(7));

/*
10
Write a function called multiplication2
that takes two parameters
and return the multiplication of them
you need to use only sum
multiplication2(5,4) => 20
multiplication2(2,8) => 16
multiplication2(7,6) =>  42
*/
function multiplication2(n1,n2){
    return n1*n2;
}
document.write("<br> <br> ex.10 <br> the multiplication of 7 and 6  is " + multiplication2(7,6));
/*
11
Write a function called mod2
that takes two parameters
and return the module of them
without using %
mod2(5,4) => 1
mod2(2,8) => 2
mod2(7,4) => 3
mod2(8,4) => 0
*/
function mod2(n1,n2){
   let q=Math.floor(n1/n2);
   let p=q*n2;
   let mod=n1-p;
   return mod;
}
document.write("<br> <br> ex.11 <br> the  module of 7 and 4 is " + mod2(7,4));

/*
12
Write a function called repeatChar
that takes two parameters
and return the times that this char
without case sensetive
repeat inside this string
**hint: "str"[0] => "s"
**hint: "car"[1] => "a"
repeatChar("schOol","o") => 2
repeatChar("school","a") => 0
repeatChar("School","s") => 1
try more case by yourself
*/
function repeatChar(str,ch){
    count=0;
    i=0;
    while(i<str.length){
        if(str.charAt(i)==ch.toUpperCase() || str.charAt(i)==ch.toLowerCase()){
        count++;
    }
    i++;
    }
    return count;
}

document.write("<br> <br> ex.12 <br>  the times that o repeat insideschool is " + repeatChar("schOol",'o'));











// Advanced Part {for your benefits}

// Dont solve any question here if you didnt 
//finish all the question a bove with your pair

// This part you can try it and solve solo not with your pair

// This part is extra (and there is no help from the trainer) it is good to try it


/*
1
Create a function called fibon
that takes 1 parameter a number,
and return the fibonacci for this number
Ex: fibon(7); => 21
Ex: fibon(2); => 2
Ex: fibon(1); => 1
Ex: fibon(0); => 1
fib(n)=fin(n-1)+fib(n-2)
fibon(n): 1 1 2 3 5 8 13 21
          | | | | | |  |  |
n:        0 1 2 3 4 5  6  7
*/


/*
2
Write a function called mirror
that takes one parameter a string
and return the reversed string
**hint: "str"[0] => "s"
**hint: "car"[1] => "a"
** Important: You should dint have extra space at the end
mirror("school") => "loohcs"
mirror("car") => "rac"
mirror("maDrasa") => "asarDam"
*/



/*
3
Write a function called mirrorCaseAlso
that takes one parameter a string
and return the reversed string order
and the lower case to upper case
and the upper case to lower case
**hint: seacrh in MDN how "a" => "A" and "A" => "a"
** Important: You should dint have extra space at the end
mirrorCaseAlso("sChOol") => "LOoHcS"
mirrorCaseAlso("THOR") => "roht"
mirrorCaseAlso("BaBa") => "AbAb"
*/



/*
4
Write a function called repeatChar2
that takes two parameters
and return the times that this char
wit case sensetive
repeat inside this string
**hint: "str"[0] => "s"
**hint: "car"[1] => "a"
**hint: seacrh in MDN how "a" => "A" and "A" => "a"
repeatChar2("schOol","o") => 1
repeatChar2("school","a") => 0
repeatChar2("School","S") => 1
try more case by yourself
*/


/*
5
Create a function called HiSayHelloTo
that takes 1 parameter a number that represent
the nubmer of people come to an event,
and say hi to each person sepretadly
+ let him/her say hello to each one that comes before him/her
Ex: welcomeSayHello(3);
=>
hi 1
hi 2 Now Pleas Say Hello To 1
hi 3 Now Pleas Say Hello To 1 and 2
Ex: welcomeSayHello(7); =>
hi 1
hi 2 Now Pleas Say Hello To 1
hi 3 Now Pleas Say Hello To 1 and 2
hi 4 Now Pleas Say Hello To 1, 2 and 3
hi 5 Now Pleas Say Hello To 1, 2, 3 and 4
hi 6 Now Pleas Say Hello To 1, 2, 3, 4 and 5
hi 7 Now Pleas Say Hello To 1, 2, 3, 4, 5 and 6
*/



