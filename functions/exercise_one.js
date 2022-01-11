let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

// This code logs 1 to the console because that's the value accessible to the log's scope. The function foo does not modify the value of bar.