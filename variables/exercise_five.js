let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

// it logs 'bar' to the console.