function converteTemperatura(temperatura, conversor){

    let resultado;

    if(conversor == 'C')
    {
        resultado = (temperatura - 32) / 1.8;;
    }
    else if(conversor == 'F')
    {
        resultado = (temperatura * 1.8) + 32;
    }

    return resultado;
}

exports.converteTemperatura = converteTemperatura;