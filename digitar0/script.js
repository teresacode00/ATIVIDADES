let soma = 0;
let lista = [];

document.getElementById("adicionar").addEventListener("click", function () {
  const input = document.getElementById("numero");
  const valor = parseFloat(input.value);
  const resultado = document.getElementById("resultado");
  const listaDiv = document.getElementById("lista");

  if (isNaN(valor)) {
    alert("Digite um número válido.");
    return;
  }

  if (valor === 0) {
    resultado.textContent = `Soma total: ${soma}`;
    input.disabled = true;
    this.disabled = true;
    return;
  }

  soma += valor;
  lista.push(valor);

  listaDiv.textContent = `Números digitados: ${lista.join(', ')}`;
  input.value = "";
  input.focus();
});
