function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');

// This code logs 'Product2, 'Product3', 'Product not found!' to the console because it matches with case 2 but without breaks it falls through to default before exiting.