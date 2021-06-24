const valores = [7.7, 8.9, 6.3, 9.2] //indice: 0, 1, 2, 3
console.log(valores[0], valores[3])
console.log(valores[4]) //se o valor não existir ele retorna = undefined

valores[4] = 10 // valore no indice 4 recebe 10 -> forma de acessar formas do array
console.log(valores) // [ 7.7, 8.9, 6.3, 9.2, 10 ]
console.log(valores.length) // quantidade de elementos do array a partir do length -> 5 elementos

valores.push({id:3}, false, null, 'teste') //adiciona novos valores no array 
console.log(valores)

console.log(valores.pop()) // retira o ultimo valor do array
delete valores[0]
console.log(valores)

console.log(typeof valores) // do tipo object