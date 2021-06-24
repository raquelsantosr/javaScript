// Função sem retorno 

function imprimiSoma(a, b){
    
}

imprimiSoma(2, 3)
imprimiSoma(2)
imprimiSoma(2, 3, 4, 5, 6)
imprimiSoma()

// Função com retorno
function soma(a, b = 1){
    return a + b
}

console.log(soma(2,3))
console.log(soma(2))
console.log(soma())