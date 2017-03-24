function Car(position) {
  // Atributos
  this.wheels = 4
  this.position = position
  // Implicitamente está retornando 'this'
}

// Métodos
Car.prototype.move = function() {
  this.position++
  console.log(`Este carro está na posição ${this.position}.`)
}

Car.prototype.stop = function() {
  console.log(`Este carro parou.`)
}

let car1 = new Car(2)
let car2 = new Car(3)
let car3 = new Car(5)

console.log(car1.position) // => 2
console.log(car2.position) // => 3
console.log(car3.position) // => 5

car3.move() // Este carro está na posição 6.

console.log(car3.position) // => 6

