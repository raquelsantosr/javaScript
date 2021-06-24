// Armazenando uma funcao em uma variavel
const imprimiSoma = function(a, b){
    console.log(a + b)
}
imprimiSoma(2, 3)

// Armazenando uma funcao arrow em uma variavel
const soma = (a, b) =>{
    return a + b
}
console.log(soma(2, 3))

// retorno implicito
const subtracao = (a, b) => a - b // apenas para funcao de um a unica linha 
console.log(subtracao(2, 3))

const imprimi = a => console.log(a) // apenas um parametro 
imprimi('Top!')