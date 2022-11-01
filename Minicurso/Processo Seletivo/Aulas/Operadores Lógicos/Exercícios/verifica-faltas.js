// Implemente a função ao lado, que recebe uma nota e um número de faltas e retorna Aprovado caso a média seja maior ou igual a 7 e o número de faltas menor que 10, ou Reprovado caso contrário.

function aprovado(nota, faltas) {
  if (nota >= 7 && faltas < 10) {

  return "Aprovado"
  }
  else { 
  return "Reprovado"
  }
}
