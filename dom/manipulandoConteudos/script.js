// Manipulando Conteúdo
// textContent - muda o texto/conteúdo da Tag selecinada
// colocando o sinal de += acrecenta-se um novo conteudo ao existente
// colocando apenas o sinal de = troca-se o conteudo original da tag

const element = document.querySelector("h1");
// element.textContent = " Olá Devs!";

// innerHTML - para poder usar HTML no codigo
element.innerHTML = "Olá Devs! <small>!!!</small>";

// manipulando valores de Input
// value - atribui valor ao input

const elementValue = document.querySelector("input");
elementValue.value = "Valor que eu quiser";

// Maniular elementos
// atributos - colocando atributos nas tags

const header = document.querySelector("header");
header.setAttribute("id", "header");

const headerID = document.querySelector("#header");
// tbm é possivel pegar o atributo de algum elemento
console.log(headerID.getAttribute("id"));

// tbm é possivel remover atributos
header.removeAttribute("class");
