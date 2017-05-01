// Guardando memória inicial na variável
const initialMemory = process.memoryUsage().heapUsed

// Criando uma classe Car
function Car(data) {
  this.name = data.name
  this.owner = data.owner
  this.color = data.color
  this.isUsed = data.isUsed
  this.manufacturer = data.manufacturer
  this.price = data.price
}

// Criando a função CarList para criar instâncias de Car
function CarsList() {
  let cars = {}
  let count = 0

  let addCar = function(data) {
    cars[data.name] = new Car(data)
    count++
  }

  let get = function(name) {
    return cars[name]
  }

  let getCount = function() {
    return count
  }

  let list = function() {
    return cars
  }

  return {
    list,
    addCar,
    get,
    getCount
  }
}

// Definindo variáveis de criação de objeto
const owners = ['Ana', 'Paul', 'Amanda', 'Daniel']
const colors = ['Red', 'Blue', 'Black', 'White', 'Silver']
const manufacturers = ['Tesla', 'Ford', 'Wolksvagem', 'Chevrolet']
const isUsed = [true, false]
const prices = [20000, 25000, 30000, 35000, 40000]

const cars = new CarsList()

// Criando 100 mil objetos
for(let i = 1; i <= 100000; i++) {
  cars.addCar({
    name: 'car-' + i,
    owner: owners[Math.floor(Math.random() * 4)],
    color: colors[Math.floor(Math.random() * 5)],
    manufacturer: manufacturers[Math.floor(Math.random() * 4)],
    isUsed: isUsed[Math.floor(Math.random() * 2)],
    price: prices[Math.floor(Math.random() * 5)]
  })
}

// Guardando memória final e calculando a diferença
const finalMemory = process.memoryUsage().heapUsed
const usedMemory = (finalMemory - initialMemory) / 1000000

// Mostrando o uso de memória final
console.log(cars.list())
console.log(usedMemory) // => ~34mb

