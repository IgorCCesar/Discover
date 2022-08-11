- Programação funcional

- Funções

  - Pequenas tarefas dentro de uma função
  - Abstrair um problema e isolar ele dentro da função
  - Não modificar dados fora dela
  - Pequenas e bem especificas no que fazem

- Características principais da função
  - Um dado(ou mais) entra em uma função e um novo dada sai dessa função
  - Não altara dados
  - Não guarda estado Stateless

* Pontos Positivos

  - Facil manutenção
  - Facil uso de testes
    - Funções isoladas e consistentes
  - Código mais confiável

* Programação imperativa

  - O código é pensado e gerado em sequência
  - O código é pensado como um passo-a-passo, como uma receita de bolo
  - Uma coisa depende da outra
  - o estado de um dado é alterado constatemente causando mutações nas variáveis
  - Orientação a objetos é um tipo de paradigma imperativo

* Programação Declarativa

  - O código é gerado para fazer algo, não importa como
  - O que fazer e não como fazer
  - Não há necessidade de um passo a passo no código
  - Programação funcional é um tipo de paradigma declarativo

* Imutabilidade

  - Uma variável não vai variar
  - Se você precisar mudar uma variável, você não muda, você cria uma nova

* Stateless

  - Não guarda Estado
  - A função só conhece dados entregues a ela
  - A resposta não poderá variar

* Tipos de Funções

  - Funções independentes

    - Deverá ter ao menos 1 argumento
    - Deverá retornar algo
    - Nada que acontecer lá dentro afeta o mundo externo
      - Dados imutáveis
      - Não guardar Estado
    - Não faremos uso de loops (for, while), mas se houver necessidade de tal, usaremos recursão (a função chama ela mesma)

  - Funções puras
    - Não deverá depender de nenhum dado externo a não ser o que foi passado como argumento
    - Não deverá sofrer nenhuma interferência do mundo externo a ela
    - Se o argumento é o mesmo, o retorno não poderá ser diferente quando a funçao for chamada novamente
    - Não irá modificar nenhum dado
    - Não irá guardar nenhum estado
