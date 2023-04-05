import { Modal } from './modal.js'
import { AlertError } from "./alert-error.js"
import { notANumber, imcCalculate } from "./utils.js"

const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

// Fechar janela de erro quando começar a digitar algo nos inputs
inputWeight.oninput = () => AlertError.close();
inputHeight.oninput = () => AlertError.close();

form.onsubmit = event => {
    event.preventDefault();

    const weight = inputWeight.value;
    const height = inputHeight.value;

    const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)
    if (weightOrHeightIsNotANumber) {
        AlertError.open();
        return; 
    } else {
        AlertError.close();
    }

    const result = imcCalculate(weight, height);
    displayResultMessage(result)
}

function displayResultMessage(result) {
    const message = `Seu IMC é de ${result}`;

    Modal.message.innerText = message;
    Modal.open();
}
