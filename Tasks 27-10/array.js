console.log('Here is : ', 'array')



/*
1
Correct the syntax error
 [1,7,9,45]

 ["Str" "alex","moh", 'the','fox', 'over', lazy, 'dog']

*/


/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]
Tomato = 0
Banana = 1
*/


/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)

Answer:
1- const myFavFood = ["Mansaf","Mansaf","Mashawy","Mansaf","Burger"];
2- let myFavSport = [null,null,undefined];
3- let myFavMovies = ["Mr.Nobody","Shutter Island","The Dark Knight Series"];
*/


/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"

Answer:
const firstOfArray = function(array1){
    return array1[0];
}

*/


/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"

const lastOfArray = function(array1){
    return array1[array1.length-1];
}
*/


/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]

Answer:
array.push(10);
array.shift(0,5,7);
array.unshift(1,3,4,6,8);
console.log(array);
*/


/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]

Answer:
push: adds an element to the end of the array.
shift: remove an element from the beginning of the array
unshift: adds an element to the beginning of the array.
pop: removes an element from the end of the array.
*/


/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"

Answer:
const middleOfArray = function(array1){
    const mid = array1.length / 2;

    if(array1.length%2){
        return array1[(array1.length-1)/2];
    }else{
        return [
        array1[mid - 1],
        array1[mid],
        ];
    }
}
*/



/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]

Answer:
    animals[0]= "cat"
    animals[1]= "ele"
    animals[2]= "bird"

*/


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

Answer:
function indexOfArray(array1,index){
    return array1[index];
}
*/


/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self


function arrayExceptLast(array1){
    return arr.slice(0,array1.length-1);
}
*/


/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
Answer:
function addToEnd(array1,value){
    return arr.push(value);
}
*/


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

Answer-1:
function sumArray(array1){
    let sum = 0;
    for(let i = 0; i < array1.length; i++){
        sum += array1[i];
    }
    return sum;
}

Answer-2:
function sumArray(array1){
    let i =0;
    let sum = 0;
    while(i<array1.length){
        sum += array1[i];
        i++;
    }
    return sum;
}

*/




/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
Answer-1:
function minInArray(arr){
    let min = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}

Answer-2:
function minInArray(arr){
    let min = arr[0];
    let i = 0;
    while(i<arr.length){
        if(arr[i] < min){
            min = arr[i];
        }
        i++;
    }
    return min;
}

*/


/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
Answer:
let nums = [1,2,3,8,9];
function removeFromArray(arr,value){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === value){
            arr.splice(i,1);
        }
    }
*/


/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self

Answer:
function oddArray(arr){
    let odd = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 !== 0){
            odd.push(arr[i]);
        }
    }
    return odd;
}
*/


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
Answer:
function aveArray(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum/arr.length;
}
*/


/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
Answer:
function shorterInArray(arr){
    let min = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length < min.length){
            min = arr[i];
        }
    }
    return min;
}
*/


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

Answer:
function repeatChar(string1,char){
    let count = 0;
    for(let i = 0; i < string1.length; i++){
        if(string1[i] === char){
            count++;
        }
    }
    return count;
}
console.log(repeatChar("alex mercer madrasa rashed2 emad hala","a"));

*/


/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self

Answer:

function evenIndexxOddLength(arr){
    let arr2 = [];
    for(let i=0;i<arr.length;i+=2){
        if(arr[i].length % 2){
            arr2.push(arr[i]);
        }
    }
return arr2;
}
*/


/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self

Answer:

function powerElementIndex(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        newArr.push(arr[i]**i);
    }
    return newArr;
}
*/


/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self

Answer:

    function evenNumberEvenIndex(arr){
    let newArr = [];
    for(let i = 1; i < arr.length; i+=2){
        if(!(arr[i] % 2)){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
*/
