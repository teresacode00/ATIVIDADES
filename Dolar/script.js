document.getElementById('converter').addEventListener('click', function () {
  // Pega os valores digitados pelo usuário
  const valorDolar = parseFloat(document.getElementById('valor-dolar').value);
  const cotacaoDolar = parseFloat(document.getElementById('cotacao-dolar').value);

  // Verifica se os valores são válidos
  if (isNaN(valorDolar) || valorDolar <= 0) {
    document.getElementById('resultado').textContent = 'Por favor, insira um valor válido em dólares.';
    return;
  }

  if (isNaN(cotacaoDolar) || cotacaoDolar <= 0) {
    document.getElementById('resultado').textContent = 'Por favor, insira uma cotação válida para o dólar.';
    return;
  }

  // Calcula o valor em reais
  const valorReal = valorDolar * cotacaoDolar;

  // Exibe o resultado
  document.getElementById('resultado').textContent = `R$ ${valorReal.toFixed(2)}`;
});
