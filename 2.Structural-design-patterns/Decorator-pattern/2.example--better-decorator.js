function Beer() {
  this.cost = 3
  this.description = 'A awesome beer'
}

Beer.prototype.getCost = function() {
  return this.cost
}

Beer.prototype.getDescription = function() {
  return this.description
}

// Se precisar adicionar  alguma nova funcionalidade à classe Beer, usa-se
// o decorator pattern
function Heineken() {
  Beer.call(this)
}

// Objetos em javascript são passados por referência, 
// portando se apenas atribuirmos 'Beer.prototype' a 'Heineken.prototype',
// quando um valor for alterado em 'Heineken.prototype', ele será alterado também em 'Beer.prototype'.
// Por esse motivo usa-se 'Object.create()', que cria um objeto novo
Heineken.prototype = Object.create(Beer.prototype)

// 'Beer.prototype.getCost.call(this)' permite 'chamar' a função no contexto de Heineken
Heineken.prototype.getCost = function() {
  return Beer.prototype.getCost.call(this) + 3
}

Heineken.prototype.getDescription = function() {
  return Beer.prototype.getDescription.call(this) + ', open your world.'
}

// Criando a cerveja simples
const simpleBeer = new Beer()
console.log('Simple Beer Cost:', simpleBeer.getCost())
console.log('Simple Beer Description:', simpleBeer.getDescription())

// Criando a Heineken
const niceBeer = new Heineken()
console.log('Heineken Cost:', niceBeer.getCost())
console.log('Heineken Description:', niceBeer.getDescription())


// Como dito, esse padrão permite adicionar funcionalidades a 
// objetos sem prejudicar o funcionamento do objeto original
