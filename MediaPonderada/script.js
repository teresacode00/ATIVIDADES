document.getElementById("calcular").addEventListener("click", function() {
  // Obter os valores das notas e pesos
  const nota1 = parseFloat(document.getElementById("nota1").value);
  const peso1 = parseFloat(document.getElementById("peso1").value);
  const nota2 = parseFloat(document.getElementById("nota2").value);
  const peso2 = parseFloat(document.getElementById("peso2").value);
  const nota3 = parseFloat(document.getElementById("nota3").value);
  const peso3 = parseFloat(document.getElementById("peso3").value);

  // Calcular a média ponderada
  const mediaPonderada = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3);

  // Exibir a média no resultado
  const resultado = document.getElementById("resultado");
  resultado.textContent = `Média Ponderada: ${mediaPonderada.toFixed(2)}`;

  // Alterar o fundo da página com base na média
  if (mediaPonderada <= 5.9) {
    document.body.classList.add("red-background");
    document.body.classList.remove("yellow-background", "green-background");
  } else if (mediaPonderada >= 6 && mediaPonderada <= 6.9) {
    document.body.classList.add("yellow-background");
    document.body.classList.remove("red-background", "green-background");
  } else if (mediaPonderada >= 7) {
    document.body.classList.add("green-background");
    document.body.classList.remove("red-background", "yellow-background");
  }
});
