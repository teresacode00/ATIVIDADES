document.getElementById("verificar").addEventListener("click", function () {
  const nota = parseFloat(document.getElementById("nota").value);
  const resultado = document.getElementById("resultado");
  const emoji = document.getElementById("emoji");
  const body = document.body;

  // Limpar classes anteriores
  body.classList.remove("aprovado", "reprovado");

  if (isNaN(nota)) {
    alert("Digite uma nota válida.");
    return;
  }

  if (nota >= 6) {
    resultado.textContent = `Aprovado meu fi!! Nota: ${nota}`;
    body.classList.add("aprovado");
    emoji.src = "feliz.png";
    emoji.style.display = "block";
  } else {
    resultado.textContent = `Reprovado, fez fei. Nota: ${nota}`;
    body.classList.add("reprovado");
    emoji.src = "triste.png";
    emoji.style.display = "block";
  }
});
