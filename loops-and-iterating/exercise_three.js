let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

// This code causes an infinite loop because the while condition uses a single '=', this assigns counter to 1 instead of evaluating if counter is equal to 1.