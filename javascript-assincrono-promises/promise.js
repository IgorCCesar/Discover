/* 
Promise

A promessa de que algo irá acontecer
poderá dar certo ou errado, mas irá acontecer
*/

let aceitar = true;

console.log("pedir uber");
const promessa = new Promise((resolve, reject) => {
  if (aceitar) {
    return reject("pedido negado!");
  }

  return reject("pedido negado!");
});

console.log("aguardando");

promessa
  .then((result) => console.log(result))
  .catch((erro) => console.log(erro))
  .finally(() => console.log("finalizada"));
