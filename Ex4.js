var contadorValor = 0;

function aumentarClique() {
    atualizar(++contadorValor);
}

function resetarContador() {
    contadorValor = 0;
    atualizar(contadorValor);
}

function atualizar(val) {
    document.getElementById("counter-label").innerHTML = val;
}