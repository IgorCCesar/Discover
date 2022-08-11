const random = (number, Math) => Math.floor(Math.random() * number);

// recursive
// Find the factorial of a number
// cria um loop na função retornando ela mesmas
const factorial = (x) => {
  // if number is 0
  if (x === 0) {
    return 1;
  }
  return x * factorial(x - 1);
};
