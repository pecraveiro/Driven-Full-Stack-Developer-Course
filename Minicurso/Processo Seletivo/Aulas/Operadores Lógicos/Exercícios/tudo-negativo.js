// Implemente a função ao lado, que recebe 3 números e retorna Tem negativo! caso pelo menos 1 deles seja menor que 0. Caso contrário, ela deve retornar Tudo positivo!

function tudoPositivo(num1, num2, num3) {
    if (num1 < 0 || num2 < 0|| num3 < 0 ) {
        return "Tem negativo!"
    }
    else {
        return "Tudo positivo!"
    }
}

// Utilizamos a barra vertical para indicar a operação OU (OR)
