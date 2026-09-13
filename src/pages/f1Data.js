export const FLAGS_DATA = [
  {
    name: "Bandeira Verde",
    color: "bg-emerald-500",
    description: "Pista livre! A corrida ou sessão está rolando em velocidade normal.",
  },
  {
    name: "Bandeira Amarela",
    color: "bg-yellow-400 text-black",
    description: "Perigo na pista. Proibido ultrapassar! Os pilotos devem reduzir a velocidade.",
  },
  {
    name: "Bandeira Vermelha",
    color: "bg-red-600",
    description: "Sessão interrompida imediatamente por grande acidente ou chuva forte. Todos voltam aos boxes.",
  },
  {
    name: "Bandeira Azul",
    color: "bg-blue-500",
    description: "Alerta para o piloto retardatário: dê passagem ao carro mais rápido que está te dando uma volta.",
  },
];

const tiresData = [
  {
    name: "Macio (Soft)",
    type: "Pista Seca (Slick)",
    colorText: "text-red-500",
    image: "/F1_tire_Pirelli_PZero_Red.svg", 
    description: "Maior aderência e velocidade imediata, mas desgasta (perde performance) muito rápido. É o pneu ideal para os treinos de classificação ou para ataques rápidos no final da corrida."
  },
  {
    name: "Médio (Medium)",
    type: "Pista Seca (Slick)",
    colorText: "text-yellow-400",
    image: "/F1_tire_Pirelli_PZero_Yellow.svg", 
    description: "O equilíbrio perfeito entre durabilidade e velocidade. É o pneu mais flexível nas estratégias e costuma ser a principal escolha para a maior parte da corrida."
  },
  {
    name: "Duro (Hard)",
    type: "Pista Seca (Slick)",
    colorText: "text-zinc-200",
    image: "/F1_tire_Pirelli_PZero_White.svg", 
    description: "Mais resistente e durável, aguenta dezenas de voltas. Em compensação, tem menos aderência e demora mais para atingir a temperatura ideal de funcionamento."
  },
  {
    name: "Intermediário (Inter)",
    type: "Chuva Leve",
    colorText: "text-emerald-500",
    image: "/F1_tire_Pirelli_Cinturato_Green.svg", 
    description: "Possui ranhuras para escoar água. Usado quando a pista está úmida, secando ou enfrentando uma chuva leve sem formação de grandes poças."
  },
  {
    name: "Chuva Extrema (Wet)",
    type: "Chuva",
    colorText: "text-blue-500",
    image: "/F1_tire_Pirelli_Cinturato_Blue.svg", 
    description: "Pneu altamente sulcado. Consegue escoar até 85 litros de água por segundo a 300 km/h para evitar a aquaplanagem em tempestades intensas."
  }
];

export const RULES_GLOSSARY = [
  {
    term: "DRS (Drag Reduction System)",
    definition: "Asa traseira móvel que abre em zonas específicas se o piloto estiver a menos de 1 segundo do carro da frente, aumentando a velocidade final.",
  },
  {
    term: "Distância de Corrida",
    definition: "Toda corrida tem no mínimo 305 km de extensão (exceto Mônaco com ~260 km) ou tempo limite de 2 horas de pista.",
  },
  {
    term: "Undercut",
    definition: "Estratégia de parar no box antes do rival para aproveitar pneus novos e ultrapassá-lo quando ele fizer o pit stop.",
  },
  {
    term: "Overcut",
    definition: "Estratégia de permanecer mais tempo na pista para conseguir voltas rápidas enquanto o rival lida com o tráfego após parar.",
  },
];