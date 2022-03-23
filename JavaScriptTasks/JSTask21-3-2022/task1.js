console.log('Here is : ', 'array')




let arr = [1, 7, 9, 45];

let arr2 = ["Str", "alex", "moh"];

let arr3 = ['the', 'fox', 'over', 'lazy', 'dog'];
document.write("ex.1" + "<br> array1 " + arr + "<br> array2 " + arr2 + "<br> array3 " + arr3)


//What the index of "Banana","Tomato"
var fruits = ["Tomato", "Banana", "Watermelon"]
document.write("<br> <br> ex.2 <br> Index of Banana : " + (fruits.indexOf("Banana")) + "<br> Index of Tomato : " + fruits.indexOf("Tomato"));







/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/
let favFood = ["Pizza", "Potato", "Orange", "Apple", "Banana"];
let favSport = ["Tennis", "Basketball", "Football"];
let favMovie = ["Seven Samurai", "Raiders of the lost ark", "Godfather", "A space odyessey"];
document.write("<br> <br> ex.3 <br> Favorite Food : " + favFood + "<br>  Favorite Sport : " + favSport + "<br> Favorite Movie : " + favMovie);


/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
function firstOfArray(arr) {
    return (arr[0]);
}

document.write("<br> <br> ex.4 <br>  First of [3,4,2,6,1] is " + firstOfArray([3, 4, 2, 6, 1]));


/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
function lastOfArray(arr) {
    return arr[arr.length - 1];
}
document.write("<br> <br> ex.5 <br>  Last of [3,4,2,6,1] is " + lastOfArray([3, 4, 2, 6, 1]));

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
var array = [0, 5, 7, 9];
array.shift();
array.shift();
array.shift();
array.unshift(1, 3, 4, 6, 8);
array.push(10);
console.log(array);


/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
var array2 = [5, 9, -7, 3.5]
array2.push(2);
array2.unshift();
array2.shift();
array2.pop();
console.log(array2);



/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/
function middleOfArray(arr) {
    if (arr.length % 2 == 0) {
        return arr[(arr.length) / 2] + "," + arr[(arr.length / 2) - 1];
    }
    else {
        return arr[(arr.length - 1) / 2];
    }

}
document.write("<br> <br> ex.8 <br>  Middle of [3,4,2,6,1] is " + middleOfArray([3, 4, 2, 6, 1]));
document.write("<br>  Middle of [t,u,g,x] is " + middleOfArray(["t", "u", "g", "x"]));

/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/
var animals = ['cat', 'ele', 'bird'];
var nums = [1, 2, 3, 8, 9];
document.write("<br> <br> ex.9 <br> Animals : " + animals);
document.write(" <br> Numbers : " + nums);
animals[0] = 'xxxx';
animals[1] = 'zebra';
animals[2] = 'elephant';
nums[0] = 5;
nums[1] = -22;
nums[2] = 3.4;
nums[3] = 44;
nums[4] = 98;
nums[5] = 44;
document.write("<br>New Animals : " + animals);
document.write(" <br>New Numbers : " + nums);

/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/
function indexOfArray(arr, i) {
    return arr[i];

}
var nums = [1, 2, 3, 8, 9];
document.write("<br> <br> ex.10 <br>[1,2,3,8,9]<br> The element in index 2 is :" + indexOfArray(nums, 2));


/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/
function arrayExceptLast(arr) {
    let a = [];
    for (let i = 0; i < arr.length - 1; i++) {
        a[i] = arr[i];
    }
    return a;
}
var nums = [1, 2, 3, 8, 9]
document.write("<br> <br> ex.11 <br>" + nums + "<br> The array element except last element is :" + arrayExceptLast(nums));

/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/
function addToEnd(arr, v) {
    arr.push(v);
    return arr;
}
var nums = [1, 2, 3, 8, 9];
document.write("<br> <br> ex.12 <br>" + nums + "<br> The array with new value is : " + addToEnd(nums, 55));

// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function sumArray(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
var nums = [1, 2, 3, 8, 9];
document.write("<br> <br> ex.13 <br>" + nums + "  The sum = " + sumArray(nums));
function sumArray1(arr) {
    let sum1 = 0;
    i = 0;
    while (i < arr.length) {
        sum1 += arr[i];
        i++;
    }
    return sum1;
}
document.write("<br>" + nums + "  The sum = " + sumArray(nums));

/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function minInArray(arr) {
    let min = arr[0];
    for (i = 1; i < arr.length; i++) {
        if (arr[i] < min)
            min = arr[i];
    }
    return min;
}
function minInArray1(arr) {
    let min = arr[0];
    let i = 1;
    while (i < arr.length) {
        if (arr[i] < min)
            min = arr[i];
        i++;
    }
    return min;
}
var nums = [1, 2, 3, 8, 9]
document.write("<br> <br> ex.14 <br>" + nums + "<br>The minimum number in array is " + minInArray(nums));
nums = [4, 6, 3, 8, 0, -1];
document.write("<br>" + nums + "  The minimum is " + minInArray1(nums));



/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function removeFromArray(arr, e) {
    let a = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] != e)
            a.push(arr[i]);
    }

    return a;
}
function removeFromArray1(arr, e) {
    let a = [];
    i = 0;
    while (i < arr.length) {
        if (arr[i] != e)
            a.push(arr[i]);
        i++;
    }

    return a;
}
var nums = [1, 2, 3, 8, 9];
document.write("<br> <br> ex.15 <br>" + nums + "<br> the array without 8 is " + removeFromArray(nums, 8));
var nums = [1, 2, 3, 8, 9];
document.write("<br>" + nums + "<br> the array without 2 is " + removeFromArray1(nums, 2));



/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function oddArray(arr) {
    let a = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0)
            a.push(arr[i]);
    }
    return a;
}
function oddArray1(arr) {
    let a = [];
    i = 0;
    while (i < arr.length) {
        if (arr[i] % 2 != 0)
            a.push(arr[i]);
        i++;
    }
    return a;
}
var nums = [1, 2, 3, 8, 9];
document.write("<br> <br> ex.16 <br>" + nums + "<br> the array with odd numbers is " + oddArray(nums));
nums = [4, 9, 7, 3, 5];
document.write("<br>" + nums + "<br> the array with odd numbers is " + oddArray1(nums));


/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function aveArray(arr) {
    let avg, sum=0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    } 
    avg = sum / arr.length;
    return avg;
}
function aveArray1(arr) {
    let avg, sum=0;
    let i=0;
    while ( i < arr.length) {
        sum += arr[i];
        i++;
    } 
    avg = sum / arr.length;
    return avg;
}
var nums = [1, 2, 3, 8, 9];
document.write("<br> <br> ex.17 <br>" + nums + "<br> the  average of this array is " + aveArray(nums));
var nums2= [1,2,3,8,9,77];
document.write("<br>" + nums2 + "<br> the  average of this array is " + aveArray1(nums2));
/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function shorterInArray(arr){
    let sh=arr[0];
    for (i=1;i<arr.length;i++){
        if(arr[i].length<sh.length)
        sh=arr[i];
    }
    return sh;
}
function shorterInArray1(arr){
    let sh=arr[0];
    i=1;
    while (i<arr.length){
        if(arr[i].length<sh.length)
        sh=arr[i];
        i++;
    }
    return sh;
}
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"];
document.write("<br> <br> ex.18 <br>" + strings + "<br> the  shortest string in this array is " + shorterInArray(strings));
var strings2= ["alex","mercer","madrasa","ra","emad","hala"];
document.write("<br>" + strings2 + "<br> the  shortest string in this array is " + shorterInArray1(strings2));


/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function repeatChar(str,ch){
    let count=0;
    for(i=0;i<str.length;i++){
        if(str.charAt(i) == ch)
        count++;
    }
    return count;
}
function repeatChar1(str,ch){
    let count=0;
    i=0;
    while(i<str.length){
        if(str.charAt(i) == ch)
        count++;
        i++;
    }
    return count;
}
var string= "alex mercer madrasa rashed2 emad hala";
document.write("<br> <br> ex.19 <br>" + string + "<br> the  number of a in this string is " + repeatChar(string ,'a'));
document.write("<br>" + string + "<br> the  number of m in this string is " + repeatChar1(string ,'m'));

/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function evenIndexOddLength(str){
    let arr=[];
    for(i=0;i<str.length;i++){
        if(i % 2==0 && str[i].length% 2 !=0)
        {
            arr.push(str[i]);
        }
    }
    return arr;
}
function evenIndexOddLength1(str){
    let arr=[];
    i=0;
    while(i<str.length){
        if(i % 2==0 && str[i].length% 2 !=0)
        {
            arr.push(str[i]);
        }
        i++;
    }
    return arr;
}
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"];
document.write("<br> <br> ex.20 <br>" + strings + "<br> the string with odd length in even index in this array is : " + evenIndexOddLength(strings ));
var string= ["alex","mercer","madrasa","rashed2","emad1","hala"];
document.write("<br>" + string + "<br> the string with odd length in even index in this array is : " + evenIndexOddLength1(string));

/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function powerElementIndex(arr){
    let a=[];
    for(i=0;i<arr.length;i++){
        a.push(arr[i]**i);
    }
    return a;
}
function powerElementIndex1(arr){
    let a=[];
    i=0;
    while(i<arr.length){
        a.push(arr[i]**i);
        i++;
    }
    return a;
}
var nums= [44, 5, 4, 3, 2, 10];
document.write("<br> <br> ex.21 <br>" + nums + "<br> the elemnt power by the index of it self in this array is : " + powerElementIndex(nums ));
nums=[1,2,3,4,5,6,7];
document.write("<br>" + nums + "<br> the elemnt power by the index of it self in this array is : " + powerElementIndex(nums ));


/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function evenNumberEvenIndex(arr){
    let a=[];
    for(i=0;i<arr.length;i++){
        if(i % 2==0 && arr[i]% 2 ==0)
        {
            a.push(arr[i]);
        }
    }
    return a;
}
function evenNumberEvenIndex1(arr){
    let a=[];
    i=0;
    while(i<arr.length){
        if(i % 2==0 && arr[i]% 2 ==0)
        {
            a.push(arr[i]);
        }
        i++;
    }
    return a;
}
var nums= [5,2,2,1,8,66,55,77,34,9,55,1];
document.write("<br> <br> ex.22 <br>" + nums + "<br> the even number in even index in this array is : " + evenNumberEvenIndex(nums));
var num2=[2,4,6,8,22,44,66,88];
document.write(" <br>" + num2 + "<br> the even number in even index in this array is : " + evenNumberEvenIndex1(num2));
