import { useEffect } from 'react';

// Dados das bandeiras para facilitar a renderização no MVP
const flagsData = [
  {
    name: "Bandeira Verde",
    style: "bg-emerald-500",
    border: "border-emerald-500/30",
    icon: "🟢",
    description: "Pista livre e segura. É acionada no início de treinos, largadas ou após o fim de um período de perigo (bandeira amarela). Pilotos podem acelerar fundo."
  },
  {
    name: "Bandeira Amarela",
    style: "bg-yellow-400",
    border: "border-yellow-400/30",
    icon: "🟡",
    description: "Perigo na pista! É estritamente proibido ultrapassar. Uma bandeira agitada significa reduzir a velocidade; duas bandeiras significam grande perigo, prepare-se para parar."
  },
  {
    name: "Bandeira Vermelha",
    style: "bg-red-600",
    border: "border-red-600/30",
    icon: "🔴",
    description: "Interrupção total da sessão. Acionada por acidentes graves ou chuva extrema. Todos os carros devem reduzir a velocidade e voltar ao pit lane (boxes) imediatamente."
  },
  {
    name: "Bandeira Azul",
    style: "bg-blue-600",
    border: "border-blue-600/30",
    icon: "🔵",
    description: "Obrigatório dar passagem. É mostrada para pilotos retardatários avisando que um carro mais rápido está chegando para dar uma volta neles."
  },
  {
    name: "Bandeira Preta e Branca",
    style: "bg-gradient-to-br from-black via-zinc-500 to-white",
    border: "border-zinc-400/30",
    icon: "⚠️",
    description: "É o 'cartão amarelo' da F1. Serve como advertência por conduta antidesportiva ou por passar dos limites de pista várias vezes."
  },
  {
    name: "Bandeira Preta c/ Círculo Laranja",
    style: "bg-black flex items-center justify-center relative",
    border: "border-orange-500/30",
    icon: "🟠",
    description: "Conhecida como 'Meatball flag'. Indica que o carro tem um dano mecânico perigoso (ex: asa quebrada pendurada) e o piloto deve ir aos boxes obrigatoriamente."
  },
  {
    name: "Bandeira Quadriculada",
    style: "bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] bg-zinc-200", 
    border: "border-white/30",
    icon: "🏁",
    description: "Fim da corrida ou sessão de treinos. O primeiro a recebê-la na corrida de domingo é o grande vencedor do Grand Prix."
  }
];

export default function Flags() {
  // Rola para o topo ao carregar a página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-fade-in w-full pb-20">
      
      {/* 🏁 HERO BANNER INTERNO (Menor que a Home, focado no título) */}
      <section className="relative w-full h-[50vh] flex flex-col justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1534438097545-a81d45137683?q=80&w=1920&auto=format&fit=crop" 
          alt="Visão da pista de F1" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-60"
        />
        {/* Gradientes para mesclar perfeitamente com o fundo dark */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0c] via-black/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-10">
          <p className="text-[#E10600] text-xs font-bold uppercase tracking-[0.3em] mb-3 border-l-2 border-[#E10600] pl-3">
            Guia de Regras
          </p>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic">
            Sinalização
          </h1>
          <p className="text-zinc-400 mt-4 max-w-xl text-sm leading-relaxed">
            A comunicação primária entre a direção de prova e os pilotos acontece através das bandeiras. Entenda o que cada cor exige de quem está a mais de 300 km/h.
          </p>
        </div>
      </section>

      {/* 🚩 GRID DE BANDEIRAS */}
      <section className="max-w-7xl mx-auto px-6 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {flagsData.map((flag, index) => (
            <div 
              key={index} 
              className={`bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-lg p-6 flex flex-col sm:flex-row gap-6 hover:border-zinc-600 transition-colors duration-300 shadow-xl`}
            >
              {/* Representação Visual da Bandeira */}
              <div className="flex-shrink-0">
                <div className={`w-20 h-14 sm:w-24 sm:h-16 rounded-md shadow-inner border border-zinc-800 ${flag.style}`}>
                   {/* Se for a bandeira meatball, renderiza o círculo laranja dentro */}
                   {flag.name.includes("Laranja") && (
                     <div className="absolute inset-0 m-auto w-6 h-6 bg-orange-500 rounded-full"></div>
                   )}
                </div>
              </div>

              {/* Textos da Bandeira */}
              <div>
                <h3 className="text-xl font-bold uppercase tracking-wide text-white mb-2 flex items-center gap-2">
                  {flag.name}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {flag.description}
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
}