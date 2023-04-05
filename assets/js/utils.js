export function notANumber(value) {
    return isNaN(value) || value == "";
}

export function imcCalculate(weight, height) {
    let calculateImc = (weight / ((height / 100) ** 2)).toFixed(2)
    return calculateImc; 
}