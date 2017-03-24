const Calculator = require('./Calculator')
const Printer = require('./Printer')
const Pen = require('./Pen')

// Criando a função fábrica
class Factory {
  create(type) {
    let obj

    if(type === 'Calculator') {
      obj = new Calculator()
    } else if (type === 'Printer') {
      obj = new Printer()
    } else if (type === 'Pen') {
      obj = new Pen()
    }

    obj.type = type

    obj.profile = function() {
      return console.log('I\'m a ' + this.type.toLowerCase() + ' and I can ' + this.role)
    }

    return obj // Retorna uma nova instância de uma class escolhida
  }
}

module.exports = Factory
