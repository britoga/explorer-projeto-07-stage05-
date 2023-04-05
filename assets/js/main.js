import { Modal } from './modal.js'

// Variáveis
const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

form.onsubmit = event => {
    event.preventDefault();

    const weight = inputWeight.value;
    const height = inputHeight.value;

    const result = imcCalculate(weight, height);
    const message = `Seu IMC é de ${result}`;

    Modal.message.innerText = message;
    Modal.open();
}

function imcCalculate(weight, height) {
    let calculateImc = (weight / ((height / 100) ** 2)).toFixed(2)
    return calculateImc; 
}
