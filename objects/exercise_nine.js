let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a); //  Outputs 'hi' because the bar function assigns a new value to the key of a 
console.log(qux); //  Outputs 'hello' because the bar function attempts to reassign the value of qux but cannot mutate the string.
