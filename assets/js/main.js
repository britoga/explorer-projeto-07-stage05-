import { Modal } from './modal.js'

// Variáveis
const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

form.onsubmit = event => {
    event.preventDefault();

    const weight = inputWeight.value;
    const height = inputHeight.value;

    /* Passando a validação para verificar se é um numero ou não */
    const showAlertError = notANumber(weight) || notANumber(height)
    if (showAlertError) {
        console.log("Não é um numero")
        return; 
    }

    const result = imcCalculate(weight, height);
    const message = `Seu IMC é de ${result}`;

    Modal.message.innerText = message;
    Modal.open();
}

/* Validar se o que está sendo escrito é um numero ou não */
function notANumber(value) {
    return isNaN(value) || value == "";
}

function imcCalculate(weight, height) {
    let calculateImc = (weight / ((height / 100) ** 2)).toFixed(2)
    return calculateImc; 
}
