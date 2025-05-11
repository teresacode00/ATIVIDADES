document.getElementById("converter").addEventListener("click", function() {
  const celsius = parseFloat(document.getElementById("celsius").value);

  if (isNaN(celsius)) {
    alert("Por favor, insira um número válido.");
    return;
  }

  const fahrenheit = (celsius * 9/5) + 32;
  const resultado = document.getElementById("resultado");
  resultado.textContent = `${celsius}°C é igual a ${fahrenheit.toFixed(2)}°F`;

  // Aplica a classe de desintegração na imagem
  const imagem = document.getElementById("imagem");
  imagem.classList.add("desintegrar");
});
