function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

// This converts a string into an array using spaces to delineate elements within the array. It then reverses the order of the array. From that, it creates a new array with the length of each of the strings.