
import { nomes } from "./dados";

function sorteio() {
  var quandidade = nomes.length;
  var sorteioAleatorio = parseInt(Math.random() * quandidade);
  document.write("O nome sorteado foi o " + nomes[sorteioAleatorio])
}

console.log(sorteio())