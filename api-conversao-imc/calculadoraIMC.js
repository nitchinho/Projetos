function efetuarCalculoIMC(peso, altura) {
    let imc = peso / (altura * altura);
    return imc;
}

function retornaStatusImc(imc) {
    let status;
    if (imc < 18.5) {
        status = 'Abaixo do Peso'
    } else if (imc >= 18.5 && imc < 24.9) {
        status = 'Peso Normal'
    } else if (imc >= 24.9 && imc < 30.0) {
        status = 'Acima do Peso';
    } else {
        status = 'Obeso';
    }
    return status;
}

function validaParametros(params) {

    if (isNaN(params)) {
        return false;
    } else {
        return true;
    }
}

exports.efetuarCalculoIMC = efetuarCalculoIMC;
exports.retornaStatusImc = retornaStatusImc;
exports.validaParametros = validaParametros;