document.getElementById("gerar").addEventListener("click", function () {
  const numero = parseInt(document.getElementById("numero").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(numero)) {
    resultado.textContent = "Digite um número válido.";
    return;
  }

  let tabuadaHTML = `<h3>Tabuada do ${numero}</h3>`;

  for (let i = 1; i <= 10; i++) {
    tabuadaHTML += `<p class="tabuada-linha">${numero} × ${i} = ${numero * i}</p>`;
  }

  resultado.innerHTML = tabuadaHTML;
});
