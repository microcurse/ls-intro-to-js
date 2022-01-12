function evenOrOdd(num) {

  if (Number.isInteger(num)) {
    if( 'number' && num % 2 === 0) {
      console.log('That number is even.');
      } else {
        console.log('That number is odd.');
    }
  } else {
    console.log('That is not a number');
    return;
  }
}

evenOrOdd('51');