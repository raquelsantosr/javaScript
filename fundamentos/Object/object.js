const prod1 = {}
prod1.nome = "Iphone 11 max"
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)

//modelo object JS
const prod2 = {
    nome: "Camisa Polo",
    preco: 79.90 
}
prod2['Desconto'] = 0.30 

//modelo object JSON
'{"nome": "Camisa Polo", "preco":79.90}'

console.log(prod2)