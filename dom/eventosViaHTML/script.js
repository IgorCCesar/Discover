// Eventos via HTML

// click - Inicia colocando um evento On na Tag HTML como demonstrado nesse exemplo que vai resopnder a função
function print() {
  console.log("print");
}

// Eventos de Teclado

const input = document.querySelector("input");

input.onkeydown = function () {
  console.log("rodei");
};
