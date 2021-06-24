const escola = "Cod3r"

console.log(escola.charAt(4)) //vai me trazer a letra que esta na posição "4"
console.log(escola.charAt(5)) //return vazio
console.log(escola.charCodeAt(3)) // code relacionado a tabela unicode
console.log(escola.indexOf('3')) // indice associado a algo 

console.log(escola.substring(1)) // imprime apartir do indice um pra frente
console.log(escola.substring(0, 3)) //Cod

console.log('Escola '.concat(escola).concat("!")) //cancatenando 
console.log('Escola '+ escola + "!") 
console.log(escola.replace(3, 'e'))

console.log("Ary, Mari, Karen".split(','))

