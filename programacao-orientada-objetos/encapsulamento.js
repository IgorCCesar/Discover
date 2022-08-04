// Orientado a Objetos

// encapsulamento das informações

class Poligono {
  constructor(altura, largura) {
    this.altura = altura;
    this.largura = largura;
  }

  get area() {
    return this.#calcularArea();
  }

  // # significa que a função só vai ser visivel dentro desse escopo
  #calcularArea() {
    return this.altura * this.largura;
  }
}
// Criando o objeto

let poligono = new Poligono(50, 50);
console.log(poligono.area);
