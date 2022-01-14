let array = [3, 5, 7];
function sumOfSquares(numbers) {
  return numbers.reduce((acc, item) => (item * item) + acc, 0);
}
console.log(sumOfSquares(array)); // => 83