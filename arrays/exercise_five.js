let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

function findIntegers(arr) {
  return arr.filter( (thing) => {
    return Number.isInteger(thing);
  });
}

console.log(findIntegers(things)); // => [1, 3, -4]
