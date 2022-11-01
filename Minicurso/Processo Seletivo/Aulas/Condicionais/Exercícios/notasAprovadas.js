// Implemente a função ao lado, que retorna Aprovado caso a nota passada seja maior ou igual a 7, Prova Final caso seja maior ou igual a 5 porém menor que 7 ou Reprovado caso contrário.

function situacao(nota) {
  let aprovado = "Aprovado";
  let provaFinal = "Prova Final";
  let reprovado = "Reprovado";

  if (nota >= 7){
      return aprovado;
  }
  else if (nota >= 5) {
      return provaFinal;
  }
  else
      return reprovado;
}
