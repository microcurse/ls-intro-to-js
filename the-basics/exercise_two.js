let num = 4936;
let ones = num % 10;
console.log(ones);

num = (num - ones) / 10; // 4930 / 10 = 493

let tens = num % 10;
console.log(tens);

num = (num - tens) / 10; // 490 / 10 = 49

let hundreds = num % 10;
console.log(hundreds);

let thousands = (num - hundreds) / 10; // 40 / 10 = 4
console.log(thousands);
