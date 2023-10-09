export const gerarNumero = () => {
  return Math.floor(Math.random() * 30 + 1) + 1
}

const simbolos = ["*", "+", "-"];

export const geraSimboloMatematicoAleatorio = () => {
  const simboloAleatorio = Math.floor(Math.random() * simbolos.length);
  return simbolos[simboloAleatorio];
};

export const validarResposta = (numero1, geraSimboloMatematicoAleatorio, numero2, respostaUsuario) => {

  let respostaCerta = 0;

  switch (geraSimboloMatematicoAleatorio) {
    case '*':
      respostaCerta = numero1 * numero2
      break;
    case '+':
      respostaCerta = numero1 + numero2
      break;
    case '-':
      respostaCerta = numero1 - numero2
      break;        
  }

  if (respostaUsuario == respostaCerta) {
    return true;
  } else {
    return false;
  }
}