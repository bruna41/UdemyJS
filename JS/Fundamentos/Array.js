// '[]' ->semelhante ao "vetor-Java". Sendo heterogênio e fexivél
const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3]) // indicie
console.log(valores[4])

valores[4] = 10
console.log(valores)

valores[10] = 5.3
console.log(valores)

console.log(valores.length) // quantidades de elementos de um Array

valores.push({id: 3}, false, null, 'teste') // adiciona elementos
console.log(valores)

console.log(valores.pop()) // pega o ultimo elemento
delete valores[0] //deleta o elemento indicado
console.log(valores)

console.log(typeof valores)