document.getElementById('imc').addEventListener('submit', function (e) {
  e.preventDefault();

  const peso = parseFloat(document.getElementById('peso').value);
  const altura = parseFloat(document.getElementById('altura').value);

  if (!peso || !altura || altura <= 0) {
    document.getElementById('resultado').textContent = 'Preencha os campos corretamente.';
    return;
  }

  const imc = peso / (altura * altura);
  let classificacao = '';

  if (imc < 18.5) {
    classificacao = 'Abaixo do peso, se cuida fi!';
  } else if (imc < 24.9) {
    classificacao = 'Peso normal, amém';
  } else if (imc < 29.9) {
    classificacao = 'Sobrepeso, vigia';
  } else if (imc < 34.9) {
    classificacao = 'Obesidade grau 1, se cuida logo';
  } else if (imc < 39.9) {
    classificacao = 'Obesidade grau 2, amigo cuidado';
  } else {
    classificacao = 'Obesidade grau 3, se demorar muito, vai pro hospital';
  }

  document.getElementById('resultado').textContent = `Seu IMC é ${imc.toFixed(2)} (${classificacao})`;
});
