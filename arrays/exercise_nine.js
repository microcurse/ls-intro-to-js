let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

function checkForThree(arr) {
  return arr.reduce( (acc, item) => {
    if ( item === 3 ) {
      return acc;
    }
  return true;
  }, false);
}

console.log(checkForThree(numbers1));
console.log(checkForThree(numbers2));
console.log(checkForThree(numbers3));

// Wow.. I forgot about the includes() method...

function checkForThreeIncludes(arr) {
  return arr.includes(3);
}

console.log(checkForThree(numbers1));
console.log(checkForThree(numbers2));
console.log(checkForThree(numbers3));