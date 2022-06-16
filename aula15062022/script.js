function mudarFrase() {
    var nome = window.prompt("Qual é o seu nome?")
    var resposta = window.document.getElementById("mudarAqui")

    resposta.innerHTML = `<p>Oi ${nome}! É um grande prazer te conhecer!`
}

