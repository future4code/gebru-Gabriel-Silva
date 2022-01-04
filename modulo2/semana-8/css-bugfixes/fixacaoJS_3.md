function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
  let exercicio = ex * 1
  let provaUm = p1 * 2
  let provaDois = p2 * 3
  let media = (exercicio + provaUm + provaDois ) / (1 + 2 + 3)
  
  if(media >= 9){
    return "A"
  } else if(media >= 7.5){
    return "B"
  } else if(media >= 6){
    return "C"
  } else{return "D"}

  
}