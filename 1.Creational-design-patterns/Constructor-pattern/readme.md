## Constructor pattern

Usado pra criar objetos com escopo próprio.

Usando a palavra chave `new` em frente de uma função, o javascript: 

- Cria um objeto totalmente novo
- Liga aquele objeto a um protótipo de um objeto
- Anexa `this` ao escopo do novo objeto
- Retorna `this` implicitamente

Exemplo de função construtora pode ser visto [aqui]('./1.example.js).

O problema com o código acima é que toda vez que instanciamos um novo objeto, os métodos são copiados e replicados em cada instância, desperdiçando memória. 

Para resolver esse problema temos o objeto `prototype`.

Quando usado `Object.prototype`, todas os métodos das instâncias apontam para o mesmo objeto.

O código melhorado pode ser visto [aqui](./2.example.js).

---

### EcmaScript2015

Em EcmaScript2015 nós agora temos Classes, portanto o código com a sintaxe de ES6 pode ser visto [aqui](./3.example.js)
