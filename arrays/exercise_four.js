let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

// iterate through array
// check if the element at that index is even or odd
// replace that element with corresponding even or odd
// return new array

let newArr = myArray.map( (value) => {
    if( value % 2 === 0) {
      return 'even';
    } else {
      return 'odd'
    }
});

console.log(newArr);