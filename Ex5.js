const notas = [5.5, 7.0, 8.5, 6.0, 7.5, 9.0, 6.5];

function calcularMedia(notas) {
  let soma = 0;
  for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
  }
  return soma / notas.length;
}

const media = calcularMedia(notas);

if (media >= 6) {
  console.log(`Parabéns! Sua média é ${media.toFixed(1)} e você foi aprovado.`);
} else {
  console.log(`Infelizmente sua média é ${media.toFixed(1)} e você foi reprovado.`);
}