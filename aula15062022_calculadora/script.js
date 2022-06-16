function calcular() {
    let optionMessage = `O que deseja fazer?`
    + `\n Digite` 
    + `\n 1. Soma` 
    + `\n 2. Subtrair` 
    + `\n 3. Multiplicar` 
    + `\n 4. Dividir`;

    let option = parseInt(window.prompt(optionMessage));
    let result;

    let number1 = parseInt(window.document.getElementById("number1").value);
    let number2 = parseInt(window.document.getElementById("number2").value);

    switch (option) {
        case 1:
            result = number1 + number2;
            break;
        case 2:
            result = number1 - number2;
            break;
        case 3:
            result = number1 * number2;
            break;
        case 4:
            result = number1 / number2;
            break;
        
        default:
            alert("Decisaão. Receja as opções e tente novamente");
            break;
    }

    let elementoHTML = window.document.getElementById("result");
    elementoHTML.innerHTML = `<p>O resultado da sua operação é: ${result}`;
}