const car = require('./Car')

const moveCarThreeTimes = (function() {
  car.move() // Car position is 1
  car.move() // Car position is 2
  car.move() // Car position is 3
}())

module.exports = moveCarThreeTimes
