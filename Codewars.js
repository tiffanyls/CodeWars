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