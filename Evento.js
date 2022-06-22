console.log("BEM VINDO USUARIO!!!!")

let prompt  = require(`prompt-sync`)()
let idadeUsuario = parseInt( prompt("Digite sua idade: ") )

console.log(`A Idade digitada pelo usuario foi ${idadeUsuario}`)

while(idadeUsuario < 18) {
    idadeUsuario= parseInt( prompt("Idade invalida digite a idade corretamente") )
}

console.log("Idade confirmada com sucesso!!!")

let dataUsuario = parseInt( prompt("Digite a data de inscriçao: ") )

console.log(`A data digitada pelo usuario foi ${dataUsuario}`)

while(dataUsuario > 26072022) {
    dataUsuario= parseInt( prompt("Data invalida. Digite a data correta") )
}

console.log("Cadastro feito com sucesso!!!")

let numeroCadastro = parseInt( prompt("Digite o numero do cadastro: ") )

console.log(`O numero digitado foi ${numeroCadastro}`)

while(numeroCadastro > 100 ) {
    numeroCadastro= parseInt( prompt("Numero de cadastro excedido") )
}

console.log("Parabens por se cadastrar!!!!!!!!!!!")


