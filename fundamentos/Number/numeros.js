const peso1 = 1.0 //number de ponto flutuante
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) //pra saber se é um numero inteiro ou não
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // para deixar duas casas decimais
console.log(media.toString(2)) // converte em binario
console.log(typeof media)
console.log(typeof Number)

// Number - função
// number - tipo do dado que tem um valor numerico