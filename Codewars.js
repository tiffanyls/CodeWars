// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord( bool ){
    if (bool === true){
    return "Yes"}
    else if (bool === false){
    return "No"}  
  }

  // Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}

// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

function basicOp(operation, value1, value2)
{
  if (operation === "+"){
  return value1 + value2
  }
  if (operation === "-"){
  return value1 - value2
  }
  if (operation === "*"){
  return value1 * value2
  }
  if (operation === "/"){
  return value1 / value2
  }
}

//Write a function to split a string and convert it into an array of words.
function stringToArray(string){
	return string.split(' ');
}

//Write function makeUpperCase.

function makeUpperCase(str) {
  return str.toUpperCase();
}

//Complete the solution so that it reverses the string value passed into it.

function solution(str){
  return str.split("").reverse().join("");
}

//Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x){
  x = x.replace(/\s/g,'');
  return x;
}

//Write a program that finds the summation of every number between 1 and num. The number will always be a positive integer greater than 0.

var summation = function (num) {
  var total = 0;
  for (i=1; i <=num; i++){
  total = total += i;
}

return total;
}

//All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

//Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

//Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

function feast(beast, dish) {
  if (beast.charAt(0) === dish.charAt(0) && beast.charAt(beast.length-1) === dish.charAt(dish.length-1)){
  return true
} else {
  return false }}

 // Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

//Your task is to calculate how many blank pages do you need.

//Note! if n or m < 0 return 0! Waiting for translations and Feedback! Thanks!

function paperwork(n, m) {
  if(m < 0 || n < 0) {
    return 0;
  } else {
   return n * m;
  }
}