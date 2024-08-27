function converterTemperatura() {
    const temp = parseFloat(document.getElementById('temp').value);
    const tipoConversao = document.getElementById('conversao').value;
    let resultado;

    if (tipoConversao === 'celsius') {
        resultado = (temp - 32) * 5/9;
        document.getElementById('resultado').innerText = `${temp}°F é igual a ${resultado.toFixed(2)}°C`;
    } else {
        resultado = (temp * 9/5) + 32;
        document.getElementById('resultado').innerText = `${temp}°C é igual a ${resultado.toFixed(2)}°F`;
    }  if (tipoConversao === 'kelvin') {
        resultado = temp + 273.15;
        document.getElementById('resultado').innerText = `${temp}°C é igual a ${resultado.toFixed(2)}K`;
    }
}