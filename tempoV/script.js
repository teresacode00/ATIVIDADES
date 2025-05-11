document.getElementById("calcular").addEventListener("click", function () {
  const distancia = parseFloat(document.getElementById("distancia").value);
  const velocidade = parseFloat(document.getElementById("velocidade").value);
  const resultado = document.getElementById("resultado");
  const carro = document.getElementById("carro");

  if (isNaN(distancia) || isNaN(velocidade) || velocidade <= 0) {
    alert("Digite valores válidos para distância e velocidade.");
    return;
  }

  // tempo = distancia / velocidade
  const tempoHoras = distancia / velocidade;
  const tempoMinutos = tempoHoras * 60;

  resultado.textContent = `Tempo estimado de viagem: ${tempoHoras.toFixed(2)} horas (${tempoMinutos.toFixed(0)} minutos)`;

  // calcular tempo da animação baseado no tempo de viagem (limitado para não demorar demais)
  const animDuration = Math.min(tempoSegundos(tempoHoras), 10); // até 10s

  carro.style.transition = `left ${animDuration}s linear`;
  carro.style.left = '90%';

  // resetar para próxima animação (depois que terminar)
  setTimeout(() => {
    carro.style.transition = 'none';
    carro.style.left = '0';
  }, animDuration * 1000 + 500);
});

function tempoSegundos(horas) {
  return horas * 3600 / 100; // escala para tempo visual (1h = 36s)
}
