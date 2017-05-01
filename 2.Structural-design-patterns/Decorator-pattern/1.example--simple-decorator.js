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

function Heineken(beer) {
  this.beer = beer
}

Heineken.prototype.getCost = function() {
  return this.beer.getCost() + 3
}

Heineken.prototype.getDescription = function() {
  return this.beer.getDescription() + ', open your world.'
}

// Agora vamos criar algumas cervejas

// Simple beer
const simpleBeer = new Beer()
console.log('Cost:', simpleBeer.getCost())
console.log('Description:', simpleBeer.getDescription())

// Heineken
const niceBeer = new Heineken(simpleBeer)
console.log('Cost:', niceBeer.getCost())
console.log('Description:', niceBeer.getDescription())
