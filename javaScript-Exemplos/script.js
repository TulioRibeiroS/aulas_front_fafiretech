// function primeiraFuncao(input) {
        //     alert(input.value);
        // }

function somar(n1, n2) {
    var n1 = parseInt(document.getElementById('numero1').value);
    var n2 = parseInt(document.getElementById('numero2').value);
    somar = n1 + n2;
    // alert("A soma foi " + somar);
    alert(`A soma foi ${somar}`)
}

function media(n1,n2) {
    var n1 = parseInt(document.getElementById('numero1').value);
    var n2 = parseInt(document.getElementById('numero2').value);
    media = (n1 + n2) / 2;
    // alert("A media foi " + media);
    alert(`A media foi ${media}`)
}