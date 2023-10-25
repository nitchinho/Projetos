const express = require('express');
const app = express();

const calculadoraIMC = require('./calculadoraIMC');

app.get('/', (req, res) => {
    let peso = req.query.peso;
    let altura = req.query.altura;

    if (calculadoraIMC.validaParametros(req.query.peso) && calculadoraIMC.validaParametros(req.query.peso)) {
        let imc = calculadoraIMC.efetuarCalculoIMC(peso, altura);
        let status = calculadoraIMC.retornaStatusImc(imc);

        let json = { imc: imc, status: status }

        res.json(json);
    }
    else {
        res.status(400).json({'Erro':'Peso ou Altura inválido. O valor deve ser numérico'});
    }
});

app.listen(8080, () => {
    let data = new Date();
    let diaSemana = data.getDay
    console.log('Servidor node iniciado em: ' + data);
});