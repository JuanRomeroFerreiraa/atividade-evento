let dataHoje = new Date() // Salvando a data atual
let dataEventoString = new Date("2022-07-26") // Salvando a data do evento com uma string
let dataEventoArg = new Date(2022, 6, 26) // Salvando a data do evente com argumentos numericos
// listaMeses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Out," "Nov", "Dez"]

console.log("A data de hoje eh:", dataHoje)
console.log("O aniversario do Juan eh", dataEventoString)
console.log("O aniversario do Juan eh", dataEventoArg)

if (dataEventoString > dataHoje) {
    console.log("A data do evento eh valida")
}   else {
    console.log("Data invalida")
}