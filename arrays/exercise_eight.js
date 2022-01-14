let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(strings) {
  return strings.reduce( (acc, item) => {
    let length = item.length;
    if (length % 2 !== 0) {
      acc.push(length);
    }
    return acc;
  }, [])
}

console.log(oddLengths(arr)); // => [1, 5, 3]