document.getElementById("iniciar").addEventListener("click", function () {
  const input = document.getElementById("numero");
  const valor = parseInt(input.value);
  const contador = document.getElementById("contador");

  if (isNaN(valor) || valor < 0) {
    contador.textContent = "Digite um número válido!";
    contador.classList.remove("boom");
    return;
  }

  let atual = valor;
  contador.classList.remove("boom");
  input.disabled = true;
  this.disabled = true;

  const intervalo = setInterval(() => {
    contador.textContent = atual;

    if (atual <= 0) {
      clearInterval(intervalo);
      contador.textContent = "BOOM!";
      contador.classList.add("boom");
      input.disabled = false;
      document.getElementById("iniciar").disabled = false;
    }

    atual--;
  }, 1000);
});
