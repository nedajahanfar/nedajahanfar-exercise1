// First question
console.log("First question:");

let array = [1,2,3,4,5];

// Without using method
let total = 0;
function sum(array){
   for(let i = 0; i < array.length; i++){
     total += array[i];
   }
   return total;
}
console.log("Sum of elements without using method: " + sum(array));

// Using method
console.log("Sum of elements using reduce method: " + array.reduce(((total, num) => total + num), 0));

// Second question
console.log("Second question:");

// Without using method
let largestNum = array[0];
function largest(array){
  for(let i = 1 ; i < array.length; i++){
   if(array[i] > largestNum){
     largestNum = array[i];
   }
 }
 return largestNum;
}
console.log("Largest number without using method: " + largest(array));

// Using reduce method
console.log("Largest number using reduce method: " + array.reduce((largestNum, currentValue) => {
   return currentValue > largestNum ? currentValue : largestNum;
}, array[0]));

// Third question
console.log("Third question:");

// Without method
function oneToFifty(){
  for(let i = 1; i <= 50; i++){
     if(i % 3 === 0 && i % 5 === 0 ){
       console.log("FizzBuzz");
     } else if(i % 3 === 0){
       console.log("Fizz");
     } else if(i % 5 === 0){
       console.log("Buzz");
     } else {
       console.log(i);
     }
  }
}
console.log("One to fifty without using method:");
oneToFifty();

// With method
let array2 = [];
for(let i = 1; i <= 50; i++){
 array2.push(i);
};
console.log("One to fifty using map method:");
console.log(array2.map(i => (i % 3 === 0 && i % 5 === 0) ? "FizzBuzz" : (i % 3 === 0) ? "Fizz" : (i % 5 === 0) ? "Buzz" : i));

// Fourth question
console.log("Fourth question:");

// Without method
function reverseArray(array){
  let temp = 0;
  let left = 0;
  let right = array.length - 1;
  while(left < right){
   temp = array[left];
   array[left] = array[right];
   array[right] = temp;
   left++;
   right--;
  }
  return array;
}
let newArray = reverseArray([...array]);
console.log("Reversed array without using method: " + newArray);

// With method
let newArray2 = [...array].reverse();
console.log("Reversed array using method: " + newArray2);

// Fifth question
console.log("Fifth question:");

// Without method
function minMax(array){
 let max = array[0];
 let min = array[0];
 for(let i = 0; i < array.length; i++){ 
   if(array[i] > max){
     max = array[i];
   } 
 }
 for(let j = 0; j < array.length; j++){
   if(array[j] < min){
     min = array[j];
   }
 }
 return {
   min: min,
   max: max
 };
};
console.log("Min and Max without using method: ", minMax(array));

// Using method
let methodMaxMin = {
 max : Math.max(...array),
 min : Math.min(...array)
}
console.log(`Min and Max using method: max: ${methodMaxMin.max}, min: ${methodMaxMin.min}`);

// Sixth question
console.log("Sixth question:");

// Without using method
let vowels = ["a", "e", "i", "o", "u"];
function vowelFinder(str){
 let vowelCounter = 0;
 for(let i = 0; i < str.length; i++){
   for(let j = 0; j < vowels.length; j++){
     if(str[i] === vowels[j]){
       vowelCounter++;
       break;
     }
   }
 }
 return vowelCounter;
}
let numVowelsHello = vowelFinder("hello");
console.log("Number of vowels without using method: " + numVowelsHello);

// Using method
let word = "hello";
let numVowels = [...word].filter(char => vowels.includes(char)).length;
console.log("Number of vowels using method: " + numVowels);

// Seventh question
console.log("Seventh question:");

// Without using method
function average(array){
 let total = 0;
 for(let i = 0; i < array.length; i++){
   total += array[i];
 }
 return total / array.length;
}
console.log("Average of numbers without using method: " + average(array));

// Using method
let averageResult = array.reduce((total, num) => total += num, 0) / array.length;
console.log("Average of numbers using method: " + averageResult);

// Eighth question
console.log("Eighth question:");

// Without using method
function numFinder(num, array){
  for(let i = 0; i < array.length; i++){
     if(array[i] === num){
       return true;
     }
  }
  return false;
}
console.log("Finding a number without using method: " + numFinder(2, array));

// Using method
function numFinderMethod(num, array){ 
 return array.includes(num);
}
console.log("Finding a number using method: " + numFinderMethod(2, array));

// Ninth question
console.log("Ninth question:");

// Without method
function multiplier(array){
 for(let i = 0; i < array.length; i++){
   array[i] *= 2;
 }
 return array;
}
console.log("Array doubled without using method: " + multiplier([...array]));

// Using method
function multiplierMethod(array){ 
 return array.map(num => num * 2);
}
console.log("Array doubled using method: " + multiplierMethod(array));

// tenth question 

function pyramid(height){
  for(let i = 1; i < height ; i++){
      let row = "";
    for(let j = 0 ; j < i; j++){
      row += "*";
    }
    console.log(row);
  }
 }

 pyramid(5);

 function reversePyramid(height){
  for(let i = height ; i > 0 ; i--){
    row = "";
    for(let j = 0; j < i ; j++){
     row += "*";
    }
   console.log(row);
  }
 }

 reversePyramid(5);

 //eleventh question

  const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];

function averageAge(array){
  let total = 0 ;
  for(let i = 0 ; i < array.length; i++){
    total += array[i].age;
  };

  if(total !== 0){
    average = total/array.length;
    console.log("average age : " + average);
  }else{
    console.log("error in peoples age in resource array");
  }
}

averageAge(people);

//12th question

function arrayChecker(array,value){
  let newArray=[];
  for(let i = 0 ; i < array.length; i++){
    if(array[i].role === value){
      newArray.push(array[i]);
    }
  }
  return newArray
};

const persons = [
  { name: 'Alice', role: 'developer' },
  { name: 'Bob', role: 'designer' },
  { name: 'Charlie', role: 'developer' }
];


console.log(arrayChecker(persons,"developer"));

//13th question

function palindrome(word){
  let i = word.length-1;
  let j = 0;

  while(j < i ){
    if(word[i] !== word[j]){
      return false;
    }
    i--;
    j++;
  }
  return true;
}

console.log(palindrome("dad"));

//14th question

const fruits = [
  { name: 'apple', price: 1.2 },
  { name: 'banana', price: 0.8 },
  { name: 'orange', price: 1.5 }
];

function totalPrice(array){

 let total = 0;
 for(let i = 0; i < array.length; i++){
  total += fruits[i].price;
 };
return total;
}

console.log(totalPrice(fruits));


//15th question

const gente = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];

function targetFinder(array,target){
  for(let i = 0 ; i < array.length ; i++){
    if(array[i].name === target){
      return array[i];
    }
  }
    return "target not found";
}

console.log(targetFinder(gente,"Bob"));

//16th question 

function frequency(word){
  let newObject = {};

  for(let i = 0; i < word.length; i++){
    if(newObject[word[i]]){
      newObject[word[i]]++;
    }else{
      newObject[word[i]] = 1;
    }
  }
   return newObject;
}

console.log(frequency("ahlaja"));