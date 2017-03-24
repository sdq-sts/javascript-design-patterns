const Utils = (function() {
  const config = {} // Toda configuração aqui pode ser privada por conta das closures

  const isEven = (num) => num % 2 === 0

  const random = () => Math.floor(Math.random() * 100)

  // Revealing module pattern permite retornar apenas métodos escolhidos por você
  return {
    isEven,
    random
  }
}()) // Usando IIFE para retornar um objeto

console.log(Utils.isEven(4)) // => true
