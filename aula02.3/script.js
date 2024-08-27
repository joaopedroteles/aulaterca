function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const imc = peso / (altura * altura);

    let classificacao;

    if (imc < 18.5) {
        classificacao = 'Abaixo do peso ideal';
    } else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = 'Peso normal';
    } else if (imc >= 25 && imc <= 29.9) {
        classificacao = 'Acima do peso';
    } else {
        classificacao = 'Obeso ou muito acima do peso';
    }

    document.getElementById('resultado').innerText = `Seu IMC deu ${imc.toFixed(2)} (${classificacao})`;
}