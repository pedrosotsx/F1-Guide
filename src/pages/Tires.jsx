import { useEffect, useState } from 'react';

// Dados dos compostos atualizados com os seus arquivos SVG
const tiresData = [
  {
    name: "Macio (Soft)",
    type: "Pista Seca (Slick)",
    colorText: "text-red-500",
    image: "/F1_tire_Pirelli_PZero_Red_18.svg", 
    description: "Maior aderência e velocidade imediata, mas desgasta (perde performance) muito rápido. É o pneu ideal para os treinos de classificação ou para ataques rápidos no final da corrida."
  },
  {
    name: "Médio (Medium)",
    type: "Pista Seca (Slick)",
    colorText: "text-yellow-400",
    image: "/F1_tire_Pirelli_PZero_Yellow_18.svg", 
    description: "O equilíbrio perfeito entre durabilidade e velocidade. É o pneu mais flexível nas estratégias e costuma ser a principal escolha para a maior parte da corrida."
  },
  {
    name: "Duro (Hard)",
    type: "Pista Seca (Slick)",
    colorText: "text-zinc-200",
    image: "/F1_tire_Pirelli_PZero_White_18.svg", 
    description: "Mais resistente e durável, aguenta dezenas de voltas. Em compensação, tem menos aderência e demora mais para atingir a temperatura ideal de funcionamento."
  },
  {
    name: "Intermediário (Inter)",
    type: "Chuva Leve",
    colorText: "text-emerald-500",
    image: "/F1_tire_Pirelli_Cinturato_Green_18.svg", 
    description: "Possui ranhuras para escoar água. Usado quando a pista está úmida, secando ou enfrentando uma chuva leve sem formação de grandes poças."
  },
  {
    name: "Chuva Extrema (Wet)",
    type: "Chuva",
    colorText: "text-blue-500",
    image: "/F1_tire_Pirelli_Cinturato_Blue_18.svg", 
    description: "Pneu altamente sulcado. Consegue escoar até 85 litros de água por segundo a 300 km/h para evitar a aquaplanagem em tempestades intensas."
  }
];

export default function Tires() {
  // Estado para armazenar o pit stop mais rápido puxado da API
  const [fastestPit, setFastestPit] = useState({ time: "Buscando...", race: "..." });

  useEffect(() => {
    // Garante que a página abra no topo ao trocar de rota
    window.scrollTo(0, 0);

    // Busca os pit stops da última corrida
    fetch('https://api.jolpi.ca/ergast/f1/current/last/pitstops.json')
      .then(res => res.json())
      .then(data => {
        const race = data.MRData.RaceTable.Races[0];
        if (race && race.PitStops) {
          // Lógica para achar o menor tempo de pit stop na lista da corrida
          let minTime = 999;
          race.PitStops.forEach(p => {
            const time = parseFloat(p.duration);
            if (time < minTime) minTime = time;
          });
          setFastestPit({ time: minTime.toFixed(2), race: race.raceName });
        }
      }).catch(console.error);
  }, []);

  return (
    <div className="animate-fade-in w-full pb-20">
      
      {/* 🏎️ HERO BANNER INTERNO */}
      <section className="relative w-full h-[50vh] flex flex-col justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1627625066927-4a0b23267598?q=80&w=1920&auto=format&fit=crop" 
          alt="Mecânicos da F1 em Pit Stop" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-50 blur-[1px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0c] via-black/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-10">
          <p className="text-[#E10600] text-xs font-bold uppercase tracking-[0.3em] mb-3 border-l-2 border-[#E10600] pl-3">
            Guia de Desempenho
          </p>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic">
            Pneus & Box
          </h1>
          <p className="text-zinc-400 mt-4 max-w-xl text-sm leading-relaxed">
            Na Fórmula 1, o pneu certo no momento exato define o vencedor. Entenda os compostos da Pirelli e a guerra estratégica que acontece dentro dos boxes.
          </p>
        </div>
      </section>

      {/* 🛞 GRID DE PNEUS PIRELLI COM SVGs */}
      <section className="max-w-7xl mx-auto px-6 mt-10">
        <h2 className="text-2xl font-bold uppercase tracking-widest text-white mb-8 border-b border-zinc-800 pb-4">
          Compostos Oficiais
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiresData.map((tire, index) => (
            <div 
              key={index} 
              className="bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/80 rounded-lg p-6 hover:border-zinc-500 transition-all duration-300 group"
            >
              <div className="flex items-center gap-5 mb-5">
                
                {/* Imagem do Pneu SVG com Animação de Rotação */}
                <div className="w-20 h-20 shrink-0">
                  <img 
                    src={tire.image} 
                    alt={`Pneu ${tire.name}`} 
                    className="w-full h-full object-contain transform transition-transform duration-1000 ease-in-out group-hover:rotate-[360deg] drop-shadow-xl"
                  />
                </div>

                <div>
                  <h3 className={`text-xl font-black uppercase italic tracking-wide ${tire.colorText}`}>
                    {tire.name}
                  </h3>
                  <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
                    {tire.type}
                  </span>
                </div>
              </div>

              <p className="text-zinc-400 text-sm leading-relaxed">
                {tire.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ⏱️ ESTRATÉGIAS DE PIT STOP */}
      <section className="max-w-7xl mx-auto px-6 mt-20">
        <h2 className="text-2xl font-bold uppercase tracking-widest text-white mb-8 border-b border-zinc-800 pb-4">
          Estratégias de Pit Stop
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-lg p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl font-black italic group-hover:text-[#E10600] transition-colors">01</div>
            <h3 className="text-2xl font-bold uppercase text-white mb-3 tracking-wide">O que é <span className="text-[#E10600]">Undercut?</span></h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              Acontece quando o piloto <strong>para nos boxes ANTES</strong> do seu rival direto.
            </p>
            <ul className="text-zinc-500 text-sm space-y-2 list-disc list-inside">
              <li>O piloto volta para a pista com pneus novos e rápidos.</li>
              <li>Ele faz uma volta extremamente veloz.</li>
              <li>Quando o rival parar na volta seguinte, voltará atrás dele na pista.</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-lg p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl font-black italic group-hover:text-[#E10600] transition-colors">02</div>
            <h3 className="text-2xl font-bold uppercase text-white mb-3 tracking-wide">O que é <span className="text-[#E10600]">Overcut?</span></h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              Acontece quando o piloto <strong>fica mais tempo na pista</strong> enquanto o rival entra nos boxes.
            </p>
            <ul className="text-zinc-500 text-sm space-y-2 list-disc list-inside">
              <li>Exige que o piloto tenha "pneu sobrando" para acelerar fundo.</li>
              <li>Geralmente feito se o rival for voltar pro meio do tráfego de outros carros lentos.</li>
              <li>O piloto ganha tempo limpo e para depois, voltando na frente.</li>
            </ul>
          </div>
        </div>
        
        {/* ⚡ CURIOSIDADE DINÂMICA DA API (Nova Seção) */}
        <div className="mt-6 bg-[#E10600]/10 border border-[#E10600]/30 rounded-lg p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-4xl">⏱️</span>
            <div>
              <h4 className="text-white font-bold uppercase tracking-wider">Você Sabia?</h4>
              <p className="text-zinc-400 text-sm">Na última corrida ({fastestPit.race}), o tempo de box mais rápido foi de impressionantes:</p>
            </div>
          </div>
          <div className="text-center bg-black/50 px-6 py-3 rounded-md border border-red-900/50">
            <span className="text-3xl font-black text-[#E10600] italic">{fastestPit.time}</span>
            <span className="text-zinc-500 text-xs font-bold ml-1 uppercase">Segundos</span>
          </div>
        </div>

      </section>

    </div>
  );
}