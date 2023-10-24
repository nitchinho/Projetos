let dados = require('../dados/index');

function retornarMensagemDoDia(dia) {
    return dados.frases[dia - 1];
}

exports.retornarMensagemDoDia = retornarMensagemDoDia;