const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a -b;
};

const sum = function(arr) {
	return arr.reduce((total, n) => total + n, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, n) => total * n, 1);
};

const power = function(a, b) {
  return Math.pow(a, b);
};

const factorial = function(a) {
	let p = 1;
  for(let i = n; i < 0; i--){
    p *= n;
  }
  return p;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
