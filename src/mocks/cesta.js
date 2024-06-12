import logo from "../../assets/itens/capacete.jpg";

import nivel from "../../assets/itens/nivel.jpg";
import alicate from "../../assets/itens/alicate.png";
import martelo from "../../assets/itens/martelo.jpg";
import prego from "../../assets/itens/prego.jpg";
import cimento from "../../assets/itens/cimento.jpg";

const cesta = {
  topo: {
    titulo: "Listagem de Materiais",
  },
  detalhes: {
    nome: "Lista de Materiais Necessários",
    logoFazenda: logo,
    nomeFazenda: "Example LTDA",
    descricao:
      "Aqui ficarão os itens necessários para dar continuidade em sua obra.",
    preco: "R$ 40,00",
    botao: "Comprar",
  },
  itens: {
    titulo: "Materiais e Ferramentas",
    lista: [
      {
        nome: "Nível",
        imagem: nivel,
      },
      {
        nome: "Alicate",
        imagem: alicate,
      },
      {
        nome: "Martelo",
        imagem: martelo,
      },
      {
        nome: "Prego",
        imagem: prego,
      },
      {
        nome: "Cimento",
        imagem: cimento,
      },
    ],
  },
};

export default cesta;
