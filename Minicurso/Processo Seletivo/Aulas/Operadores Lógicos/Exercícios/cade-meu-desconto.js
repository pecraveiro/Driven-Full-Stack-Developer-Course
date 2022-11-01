// Implemente a função ao lado, que recebe um preço e um booleano indicando se já está com desconto ou não. Se o preço for maior que 100 e não estiver com desconto, a função deve retornar Quero pechinchar. Caso contrário, deve retornar Negócio fechado

function pecoDesconto(preco, estaComDesconto) {
  if (preco > 100 && !estaComDesconto) {
    return "Quero pechinchar";
  } else
  return "Negócio fechado";
}
