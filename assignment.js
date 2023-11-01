// coding challenge set one


// 1. Write a function named fizzBuzz that takes in two(2) parameters which
// are expected to be strings. The function should return the string Fizz if
// the combined length of the parameters is divisible by 3, the string Buzz
// if it is divisible by 5, and the string FizzBuzz if it is divisible by both 5 and
// 3.


// solution
// split the  function fizzBuzz into 2strings
// use the .length property to determine the number of characters in each string and add them 
// use the if else is statement to check for all the possible results
function fizzBuzz(a, b) {
    const combinedLength = a.length + b.length;
    // checking whether the combined length is divisble by both 5 and 3
    if (combinedLength % 3 === 0 && combinedLength % 5 === 0) {
        return "FizzBuzz";
    } else if (combinedLength % 3 === 0) {
        return "Fizz";
    } else if (combinedLength % 5 === 0) {
        return "Buzz";
    } else {
        return "Neither Fizz nor Buzz";
    }
}
const solution = fizzBuzz("Fizz", "Buzz");
console.log(solution); // checking for the final outcome 

// question2
// Write a JavaScript program that prompts a user to enter their year of
// birth and in turn prints a string in the console stating whether the user
// is a minor, a youth, or an elder. Anyone below 18 years is a minor,
// anyone between 18 and 36 years is a youth and the rest are elders

// solution
// will use the prompt property to help the user receive the pop up to answer the question "what is your date of birth"
// use the if, else if and else to come up with expressions to cater for all the categories (minor, youth and elder) 
let yearOfbirth = prompt("what is your year of birth")

function checkAge(years){
let age = 2023-yearOfbirth;
if(age<18){
    console.log("you are a minor");
}
else if(age>18 && age <=36){
    console.log("you are a youth");
}
else {
    console.log("you are an elder");
}
}
console.log(checkAge());

// question3
// Write a function named twoSum which takes two parameters: nums
// and target. Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to the target.
// You may assume that each input would have exactly one solution, and
// you may not use the same element twice.

// solutions
// create a JavaScript function called "twoSum" that takes two parameters
// an array of integers nums and an integer target
// Utilize a loop to iterate through the nums array, and for each element, calculate its complement
function findIndices(nums, target) {
  const numMap = {};
  
for (let i = 0; i < nums.length; i++) {
    const difference = target. Nums[i];
    
    if (numMap[difference] !== undefined) {
      return [numMap[difference], i];
    }
    
    numMap[nums[i]] = i;
  }
  
  return null;
}

const nums = [2, 7, 11 ,15];
const target = 9;
const result = findIndices(nums, target);
console.log(result); 


// question 4
// solution
function firstPalindrome(words) {
    function isPalindrome(word) {
        return word === word.split('').reverse().join('');
    }

    for (let i = 0; i < words.length; i++) {
        if (isPalindrome(words[i])) {
            return words[i];
        }
    }

    return "";
}
const set1 = ["racecar", "hello", "level"];
const answer1 = firstPalindrome(words1); 

const set2 = ["world", "test", "hello"];
const answer2 = firstPalindrome(words2); 

// question 5
// Given an Array containing integers, floats, and one character strings,
// write a function that takes an Array as a parameter and returns an
// Object with keys evens, odds, and chars. The value for evens is an array
// of sorted even numbers, the value for odds is a list of sorted odd
// numbers and chars is a list of sorted single-character strings.
// Caution: DO NOT use the sort array method

function categorizeAndSort(arr) {
    const result = {
        evens: [],
        odds: [],
        chars: []
    };

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            if (arr[i] % 2 === 0) {
                result.evens.push(arr[i]);
            } else {
                result.odds.push(arr[i]);
            }
        } else if (typeof arr[i] === 'string' && arr[i].length === 1) {
            result.chars.push(arr[i]);
        }
    }

    // Manually sort evens and odds
    result.evens = result.evens.sort((a, b) => a - b);
    result.odds = result.odds.sort((a, b) => a - b);

    // Manually sort chars
    result.chars = result.chars.sort();

    return result;
}
const arr = [3, 5, 2, 'a', 7, 4, 'b', 8, 1, 'c', 6];
const output = categorizeAndSort(arr);
console.log(output);