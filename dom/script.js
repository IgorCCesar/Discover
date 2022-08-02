// getElementById()
const elementId = document.getElementById("blog-title");
console.log(elementId);

// getElementsByClassName()
const elementClass = document.getElementsByClassName("one");
console.log(elementClass);

// getElementByTagName()

const elementTag = document.getElementsByTagName("meta");
console.log(elementTag);

// querySelector() procura no HTML os seletores do CSS, pega o primeiro seletor que ele encontrar

const elementSelector = document.querySelector("#blog-title");
console.log(elementSelector);

// querySelectorAll() pega todos os seletores da pagina
const elementSelectorAll = document.querySelectorAll(".one");
elementSelectorAll.forEach((el) => console.log(el));
