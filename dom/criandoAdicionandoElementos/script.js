// Criando e adicionando elementos

// createElement
const div = document.createElement("div");
div.innerText = "Olá Devs!";

// append = adiciona o elemento depois
// prepend = adiciona o elemento antes
const body = document.querySelector("body");
body.append(div);

// insertBefore
const body2 = document.querySelector("body");
const script = body.querySelector("script");
body.insertBefore(div, script);
