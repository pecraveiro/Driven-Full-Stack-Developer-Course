// Implemente a função ao lado, que recebe 3 notas e retorna as strings sim ou não, indicando se a média simples entre as 3 notas (somar e dividir por 3) é maior ou igual a 7.

function aprovado(nota1, nota2, nota3) {
    let mediaNotas = (nota1 + nota2 + nota3) / 3
    
    if (mediaNotas >= 7) {
        return "sim"
    }
    else return "não"
}
