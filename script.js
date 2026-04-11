function calcularEspacamento(total, lateral, central, qtd) {
  return (total - lateral - (central * qtd)) / (qtd + 1);
}
