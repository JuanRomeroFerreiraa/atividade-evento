let prompt = require("prompt-sync")()

let numeroMaior;
let numeroMenor;
let valorInserido;

for(let contador = 0; contador < 10; contador++) {
    valorInserido = parseInt (prompt("Digite um numero:") )

    if (contador == 0) {
        numeroMaior = valorInserido;
        numeroMenor = valorInserido;
    }

    if(valorInserido > numeroMaior) {
        numeroMaior = valorInserido
    } else if (valorInserido < numeroMenor ) {
        numeroMenor = valorInserido
    }
}

//Nan -> Not a Number

console.log(`O maior valo eh ${numeroMaior} e o menor valora eh ${numeroMenor}`)