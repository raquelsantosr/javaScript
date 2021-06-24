const nome = 'Raquel'
const cancatenacao = 'Olá ' + nome + '!'
const template = `
    Olá 
    ${nome}!`

    console.log(cancatenacao, template)

    //expressoes...
    console.log(`1 + 1 = ${1 + 1}`)

    const up = texto => texto.toUpperCase()
    console.log(`Ei... ${up('cuidado')}!`)