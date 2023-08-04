// Images
import bebida_01 from "../images/bebida-1.png";
import bebida_02 from "../images/bebida-2.png";
import bebida_03 from "../images/bebida-3.png";
import paquete_cafe from "../images/paquete-cafe.png";
import clientes from "../images/clientes.png";
import rewards from "../images/rewards.png";
import manos from "../images/manos.png";
import noticias from "../images/noticias.png";
import promociones from "../images/promociones.png";

// Interface
import { IndexData } from "../types/types";

const data: IndexData[] = [
  {
    image: { source: bebida_01, alt: "¡Chocolate, chocolate y más chocolate!" },
    title: "¡Chocolate, chocolate y más chocolate!",
    description: "Atrévete a probar los nuevos Sweet Chocolate Sensation",
    footer: "¡Pídelo Latte, Helado o Frappuccino!",
    bgColor: "bg-[#CC3568]",
    color: "text-[#FFFFFF]",
  },
  {
    image: { source: bebida_02, alt: "¡Verano de sí a todo!" },
    title: "¡Verano de sí a todo!",
    description:
      "Ponle sabor a esta temporada con tu Matcha favorito y dale la bienvenida al nuevo Berry Matcha Helado.",
    footer: "#TodasLasFormasDeDisfrutarTuVerano",
    bgColor: "bg-[#CBE678]",
    color: "text-[#CC3568]",
  },
  {
    image: { source: bebida_03, alt: "Haz tus días refrescantes" },
    title: "Haz tus días refrescantes",
    description: "Hay un Refresher® perfecto para hoy.",
    footer: "¡Pruébalos con limonada!",

    bgColor: "bg-[#8985EF]",
    color: "text-[#FFFFFF]",
  },
  {
    image: { source: paquete_cafe, alt: "Starbucks perú mujeres de junín" },
    title: "Starbucks perú mujeres de junín",
    description:
      "Disfruta en casa una mezcla de sabores únicos de merengue dulce y chocolate.",
    footer: "¡Pruébalo en tu café favorito!",
    button: {
      text: "Más información",
      url: "/rewards",
    },
    bgColor: "bg-[#92CBFF]",
    color: "text-[#1E3932]",
    border: "border-[#1E3932]",
  },
  {
    image: { source: clientes, alt: "Recompensas en tu bebida favorita" },
    title: "Recompensas en tu bebida favorita",
    description:
      "Sé parte de Starbucks Rewards y obtén más café gratis, promociones exclusivas, accesos a productos antes que nadie y más.",
    footer: "Descarga la app y regístrate",
    button: {
      text: "Conoce más",
      url: "/loyalty",
    },
    bgColor: "bg-[#1E3932]",
    color: "text-[#FFFFFF]",
    border: "border-[#FFFFFF]",
  },
  {
    image: { source: rewards, alt: "Paga como quieras y obten estrellas" },
    title: "Recompensas en tu bebida favorita",
    description:
      "Ahora ya puedes disfrutar de café gratis y más beneficios al pagar con tarjetas bancarias, efectivo o Starbucks card.",
    footer: "Descarga la app y regístrate",
    button: {
      text: "Más información",
      url: "/loyalty",
    },
    bgColor: "bg-[#D4E9E2]",
    color: "text-[#1E3932]",
    border: "border-[#1E3932]",
  },
  {
    image: { source: manos, alt: "Todo y todos por el planeta" },
    title: "Todo y todos por el planeta",
    description:
      "Trae tu vaso o termo a tu Starbucks favorito y obtén $8 pesos de descuento en tu bebida.",
    footer: "#StarbucksHagamosElCambio",
    bgColor: "bg-[#93C47D]",
    color: "text-[#1E3932]",
  },
  {
    image: { source: noticias, alt: "Noticias Starbucks" },
    description: "Consulta los eventos más recientes.",
    button: {
      text: "Ver más",
      url: "/boletines",
    },
    bgColor: "bg-[#F1FF67]",
    color: "text-[#1E3932]",
    border: "border-[#1E3932]",
  },
  {
    image: { source: promociones, alt: "Conoce nuestras promociones" },
    description: "Términos y condiciones",
    button: {
      text: "Aquí",
      url: "/terminos-y-condiciones",
    },
    bgColor: "bg-[#F9423A]",
    color: "text-[#FFFFFF]",
    border: "border-[#FFFFFF]",
  },
];

export default data;
