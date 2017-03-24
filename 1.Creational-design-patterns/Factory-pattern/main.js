const ObjectFactory = require('./objects/_factory')
const factory = new ObjectFactory()

const printer = factory.create('Printer')
const calc = factory.create('Calculator')
const pen  = factory.create('Pen')

printer.profile() // => I'm a printer and I can print
calc.profile()    // => I'm a calculator and I can make calculations
pen.profile()     // => I'm a pen and I can write

console.log(printer) // => Printer { role: 'print', type: 'Printer', profile: [Function] }
console.log(calc)    // => Calculator { role: 'make calculations', type: 'Calculator', profile: [Function] }
console.log(pen)     // => Pen { role: 'write', type: 'Pen', profile: [Function] }
