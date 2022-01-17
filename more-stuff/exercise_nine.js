let value = -0;
let value2 = 0;

function isZero(value) {
  return (value === 0) && (1 / value === -Infinity); 
}

console.log(isZero(value));
console.log(isZero(value2));
