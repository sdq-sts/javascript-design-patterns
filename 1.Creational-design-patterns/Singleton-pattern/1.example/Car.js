class Car {
  constructor() {
    this.position = 0
  }

  move() {
    this.position++
    console.log(`Car position is ${this.position}`)
  }
}

// Exportando a instância de Car em vez de uma referência à classe
module.exports = new Car()
