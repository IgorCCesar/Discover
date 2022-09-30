//Função que retorna números Inteiros de 0 a 10
function random() {
  return Math.floor(Math.random() * 10);
}

const numberOne = random();
const numberTwo = random();

console.log(numberOne, numberTwo);

// função de somatoria
function some(a, b) {
  return a + b;
}

console.log(some(numberOne, numberTwo));
