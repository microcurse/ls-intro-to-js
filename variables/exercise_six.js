const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

// This will not produce an error because it's console logging 'FOO' outisde of the block which is attempting to reassign the constant variable.