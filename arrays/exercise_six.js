let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
// iterate through array
// determine lengths of all elements within array of string values
// discard the even values (output the odd values)

function oddLengths(strings) {
  let newArr = strings.filter( (element) => {
    if (element.length % 2 !== 0) {
      return element;
    };
  });

  let odds = newArr.map( (odd) => {
    return odd.length;
  });

  return odds;
}


console.log(oddLengths(arr)); // => [1, 5, 3]