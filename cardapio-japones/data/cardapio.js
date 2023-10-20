import urumaki from '../assets/imagens/uramaki.png';
import urumaki_atum from '../assets/imagens/uramaki-atum.jpg';
import sushi from '../assets/imagens/sushi.png';
import sushi_atum from '../assets/imagens/sushi-atum.jpg';
import sashimi_salmao from '../assets/imagens/sashimi-salmao.jpg';
import sashimi_atum from '../assets/imagens/sashimi.jpg';
import roll from '../assets/imagens/roll.png';
import hot from '../assets/imagens/hot.png';
import yakisoba_frango from '../assets/imagens/yakisoba-frango.jpg';
import yakisoba_legumes from '../assets/imagens/yakisoba-legumes.jpg';
import yakitori_ebi from '../assets/imagens/yakitori-ebi.jpg';
import yakitori_ika from '../assets/imagens/yakitori-ika.jpg';
import temaki_salmao from '../assets/imagens/temaki-salmao.jpg';
import temaki_atum from '../assets/imagens/temaki-atum.jpg';
import shimeji from '../assets/imagens/shimeji.jpg';
import shitake from '../assets/imagens/shitake.jpg';
import gyoza from '../assets/imagens/gyoza.jpg';
import tempura_camarao from '../assets/imagens/tempura-camarao.jpg';
import tempura_salmao from '../assets/imagens/tempura-salmao.jpg';

const cardapio = [
    {nome:"Uramaki (Salmão)" , descricao: "Contém Arroz, alga, salmão, cream cheese e cebolinha", categoria: "Chicletes", pratoSugerido: false, imagem: urumaki},
    {nome:"Uramaki (Atum)" , descricao: "Contém Arroz, alga, atum, cream cheese e cebolinha", categoria: "Chicletes", pratoSugerido: false, imagem: urumaki_atum},
    {nome:"Sushi (Salmão)" , descricao: "Arroz coberto por uma lâmina de salmão", categoria: "Sushi", pratoSugerido: true, imagem: sushi},
    {nome:"Sushi (Atum)" , descricao: "Arroz coberto por uma lâmina de atum", categoria: "Sushi", pratoSugerido: false, imagem: sushi_atum},
    {nome:"Roll Tradicional" , descricao: "Enrolado de alga nori com Arroz, Cream Cheese e Salmão", categoria: "Chicletes", pratoSugerido: false, imagem: roll},
    {nome:"Hot Filadelfia" , descricao: "Empanado de alga crocante, arroz, salmão, cream cheese e cebolinha.", categoria: "Chicletes", pratoSugerido: false, imagem: hot},
    {nome:"Yakisoba (Frango)" , descricao: "Macarrão oriental, frango, repolho, cenoura e brócolis americano.", categoria: "Pirulitos", pratoSugerido: false, imagem: yakisoba_frango},
    {nome:"Yakisoba (Legumes)" , descricao: "Macarrão oriental, repolho, cenoura e brócolis americano", categoria: "Pirulitos", pratoSugerido: false, imagem: yakisoba_legumes},
    {nome:"Yakitori (Ebi)" , descricao: "Espetinho de camarão.", categoria: "Balas", pratoSugerido: false, imagem: yakitori_ebi},
    {nome:"Yakitori (Ika)" , descricao: "Espetinho de lula.", categoria: "Balas", pratoSugerido: true, imagem: yakitori_ika},
    {nome:"Temaki (Salmão)" , descricao: "Cones feitos de alga recheado com salmão, arroz e cebolinha.", categoria: "Licenciados", pratoSugerido: false, imagem: temaki_salmao},
    {nome:"Temaki (Atum)" , descricao: "Cones feitos de alga recheado com atum, arroz e cebolinha.", categoria: "Licenciados", pratoSugerido: false, imagem: temaki_atum},
    {nome:"Sashimi (Salmão)" , descricao: "Fatias finas de salmao cru.", categoria: "Licenciados", pratoSugerido: true, imagem: sashimi_salmao},
    {nome:"Sashimi (Atum)" , descricao: "Fatias finas de atum cru.", categoria: "Candy Toys", pratoSugerido: false, imagem: sashimi_atum},
    {nome:"Shimeji" , descricao: "Porção de cogumelos Shimeki na manteiga", categoria: "Candy Toys", pratoSugerido: false, imagem: shimeji},
    {nome:"Shitake" , descricao: "Porção de cogumelos Shitake na manteiga", categoria: "Candy Toys", pratoSugerido: false, imagem: shitake},
    {nome:"Gyoza (Carne)" , descricao: "Bolinho frito recheado com carne", categoria: "Outros", pratoSugerido: true, imagem: gyoza},
    {nome:"Gyoza (Legumes)" , descricao: "Bolinho frito recheado com legumes", categoria: "Outros", pratoSugerido: false, imagem: gyoza},
    {nome:"Tempurá (Camarão)" , descricao: "Camarões fritos em uma massa leve.", categoria: "Outros", pratoSugerido: false, imagem: tempura_camarao},
    {nome:"Tempurá (Salmão)" , descricao: "Salmão frito em uma massa leve.", categoria: "Outros", pratoSugerido: true, imagem: tempura_salmao}
]

export default cardapio