// Composição de Funções
// Um encadeamento de funções
// Uma função que retorna um dado e vai pra outra função, que retorna um dado e vai para outra função, que retorna...

const people = ["Rafa", "Diego", "Daniela", "Rod"];
const upperCasePeopleThatStartsWithD = people
  .filter((person) => person.startsWith("D"))
  .map((dperson) => dperson.toUpperCase());

console.log(upperCasePeopleThatStartsWithD);
