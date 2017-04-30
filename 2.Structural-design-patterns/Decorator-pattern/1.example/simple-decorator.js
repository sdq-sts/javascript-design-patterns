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
const beer = new Beer()
console.log('Cost: ', beer.getCost())
console.log('Description: ', beer.getDescription())

// Heineken
const NiceBeer = new Heineken(beer)
console.log('Cost: ', NiceBeer.getCost())
console.log('Description: ', NiceBeer.getDescription())
