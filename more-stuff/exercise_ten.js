let x = "5"
x = x + 1
// "51"

let y = "5"
y++

// "55" gets returned because y++ increments itself by itself. Since it's a string, it uses concatenation after coercing it into an integer. 