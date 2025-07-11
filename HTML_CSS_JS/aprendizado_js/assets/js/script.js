// let nome = "Max Emiliano"
// let idade = 31
// let cidade = "Goiânia - GO"
// let profissao = "Desenvolvedor Web"

// console.log ("Meu Nome é: " + nome + ", tenho " + idade + " Moro em "+cidade+ " Profissão: "+profissao)



// let nomeCarro = "Ferrari"
// let precoBolo = 19.99
// let cidade2 = "São Paulo"

// console.log ("Meu Carro é: " + nomeCarro)
// console.log ("O preço do Bolo é: R$ " + precoBolo)
// console.log ("Moro em: " + cidade2)


// let nome2 =`${nome} é um ${profissao} de ${idade} anos, que mora em ${cidade}.`
// console.log(nome2)


// let x = 10
// let y = 5

// console.log ("Valor é: ", x >= y)


// let w = "10"
// let z = 10

// console.log ("Valor é : ", w === z)


// let a = 10
// let b= 5

// console.log ("Valor é: ", a >= b)


// let precoCarne = 45

// if (precoCarne <= 45) {
//     console.log ("Carne Barata")
// } else {
//     console.log ("Carne Cara")
// }




// function calcPct(x, y) {
//     let resultado = (x / y) * 100
//     return resultado
// }

// let x = 10
// let y = 40


// let resultado = calcPct(x, y)
// console.log(`A Porcentagem de ${x} em relação a ${y} é: ${resultado}%`)


// function calcularImovel(metragem, quartos) {
//     let precoM2 = 3000; // Preço por metro quadrado

//     if (quartos == 1) {
//         precoM2 = precoM2 * 1  //  preco por metro quadrado
//     } else if (quartos == 2) {
//         precoM2 = precoM2 * 1.2 // Aumenta 20% se tiver mais de 2 quartos
//     } else if (quartos >= 3) {
//         precoM2 = precoM2 * 1.5 // Aumenta 50% se tiver mais de 3 quartos
//     }

//     let preco = metragem * precoM2
//     return preco
// }


// let metragem = 123
// let quartos = 3

// let preco = calcularImovel(metragem, quartos)
// console.log(`O Preço do Imovel é : R$ ${preco} com ${metragem} m² e ${quartos} quartos.`)


function validar(usuario, senha) {
    return 'gustavo' === usuario && 123 === senha
}


let usuario = 'gustavo'
let senha = 123

let validacao = validar(usuario, senha)

if (validacao) {
    console.log('Acesso concedido')
    console.log(`Bem vindo ${usuario}`)
} else {
    console.log('Acesso NEGADO')
    console.log('Digite seu Login e senha novamente.')
}


