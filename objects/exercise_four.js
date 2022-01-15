let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let objKeys = Object.keys(obj);

let toUpperCase = objKeys.map((key) => {
  return key.toUpperCase();
});

console.log(toUpperCase);