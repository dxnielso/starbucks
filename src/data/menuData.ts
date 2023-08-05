// Images
import bebidas_calientes from "../images/bebidas-calientes.png";
import frappuccino from "../images/frappuccino.png";
import bebidas_frias from "../images/bebidas-frias.png";
import bebidas_base_te from "../images/bebida-base-te.png";
import cold_brew from "../images/cold-brew.png";
import sandwich from "../images/sandwich.png";
import chiapas from "../images/chiapas.png";

const menu = {
  bebidas: [
    {
      text: "Bebidas Calientes",
      image: {
        source: bebidas_calientes,
        alt: "Bebidas calientes",
      },
    },
    {
      text: "Frappuccino",
      image: {
        source: frappuccino,
        alt: "Frappuccino",
      },
    },
    {
      text: "Bebidas frías",
      image: {
        source: bebidas_frias,
        alt: "Bebidas Frías",
      },
    },
    {
      text: "Bebidas Base Té",
      image: {
        source: bebidas_base_te,
        alt: "Bebidas base té",
      },
    },
    {
      text: "Cold Brew",
      image: {
        source: cold_brew,
        alt: "Cold brew",
      },
    },
  ],
  alimentos: [
    {
      text: "Elige tu complemento favorito",
      image: {
        source: sandwich,
        alt: "Sandwich",
      },
    },
  ],
  cafeEnGrano: [
    {
      text: "Elige tu café favorito",
      image: {
        source: chiapas,
        alt: "Café Chiapas",
      },
    },
  ],
};
export default menu;
