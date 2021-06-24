let isAtivo = false
console.log(isAtivo)

isAtivo = true 
console.log(isAtivo)

isAtivo = 1
console.log(!isAtivo) //negação

isAtivo = 1
console.log(!!isAtivo) //negação, negando duas vezes = true

console.log('os verdadeiro...')
console.log(!!33) //true
console.log(!!-3) //true
console.log(!!'') //false
console.log(!!'test') //true
console.log(!![]) //true
console.log(!!{}) //true
console.log(!!Infinity) //true
console.log(!!(isAtivo = true)) //true

console.log('os falsos...')
console.log(!!0)
console.log(!!'') 
console.log(!!null) 
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))  

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ''))


let nome = ''
console.log(nome || 'desconhecido' )