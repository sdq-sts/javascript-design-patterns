function Computer() {
  this.isOn = false
}

Computer.prototype.getElectricity = function() {
  console.log('Getting electricity')
}

Computer.prototype.makeSomeSound = function() {
  console.log('Making some noise')
}

Computer.prototype.turnOnScreen = function() {
  console.log('Turning on screen')
}

// Usando o facade para ligar o computador de maneira mais simples
Computer.prototype.turnOn = function() {
  this.getElectricity()
  this.makeSomeSound()
  this.turnOnScreen()
  this.isOn = true
}

// Criando um novo computador
const pc = new Computer()

// Ligando o PC de forma simplificada pelo facade
pc.turnOn()
