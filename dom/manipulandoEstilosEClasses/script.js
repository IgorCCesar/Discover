//Alterando estilos
const element = document.querySelector("body");

//element.style.backgroundColor = "#f9f3d2";
//console.log(element.style.backgroundColor);

// Alterando estilos
// classList
element.classList.add("active", "#f9f3d2");
console.log(element.classList);
element.classList.remove("active");
element.classList.toggle("active");
