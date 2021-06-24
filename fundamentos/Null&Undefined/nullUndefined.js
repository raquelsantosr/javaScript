let valor  // não inicialzada 
console.log(valor) // undefined

valor = null // ausencia de valor 
console.log(valor) //null

//console.log(valor.toString()) //Erro

const produto = {}
console.log(produto.preco) //undefined
console.log(produto) // objeto vazio 

produto.preco = undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco= null //sem preço - ta de graça - preço 0 
console.log(!!produto.preco) //undefined
console.log(produto) //null

                                                                                                                                                                                          )