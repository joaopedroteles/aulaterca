function gerarNumeros() {
    const quantidade = parseInt(document.getElementById('quantidade').value);
    let numeros = new Set();

    while (numeros.size < quantidade) {
        let numero = Math.floor(Math.random() * 60) + 1;
        numeros.add(numero);
    }

    document.getElementById('resultado').innerText = `Números gerados: ${Array.from(numeros).join(', ')}`;
}