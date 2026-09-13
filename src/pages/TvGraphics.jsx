import { useEffect } from 'react';

const tvData = [
  {
    title: "O que significam os números? (+14.002)",
    highlight: "Intervalo de Tempo (Gap)",
    description: "Na corrida, a distância entre os carros não é medida em metros, mas em TEMPO (segundos). Se o piloto A está e o B está com '+2.500', significa que o B passará pelo mesmo ponto que o A passou exatos 2.5 segundos depois.",
    detail: "Dica: Pode mostrar a distância para o LÍDER da corrida ou para o piloto IMEDIATAMENTE À FRENTE (Interval). A TV costuma alternar entre os dois."
  },
  {
    title: "Battle For Position (Batalha por Posição)",
    highlight: "Duelo Direto",
    description: "Quando dois pilotos estão muito próximos (geralmente menos de 1 segundo de diferença), a TV destaca os dois nomes e mostra o tempo exato entre eles, como na sua foto entre Leclerc e Verstappen (+0.097s).",
    detail: "É o momento de prender a respiração! Significa que o piloto de trás pode usar o DRS (Asa móvel) e tentar a ultrapassagem a qualquer momento."
  },
  {
    title: "O Relógio Roxo e Cores dos Tempos",
    highlight: "Setores e Voltas Mais Rápidas",
    description: "A pista é dividida em 3 setores. Durante a corrida ou treino, os tempos recebem cores para mostrar o desempenho do piloto:",
    list: [
      "Roxo: Fez o tempo mais rápido DE TODA A SESSÃO naquele setor ou volta.",
      "Verde: Fez o SEU melhor tempo pessoal, mas não é o mais rápido de todos.",
      "Amarelo: Foi mais lento do que a sua própria melhor marca."
    ],
    detail: "Quem fizer a volta mais rápida da corrida (relógio roxinho no nome) ganha 1 ponto extra no campeonato (se terminar no Top 10)."
  },
  {
    title: "Status: OUT e PIT",
    highlight: "O que aconteceu com o piloto?",
    description: "Às vezes, no lugar do tempo (+14.00), aparecem letras indicando a situação do carro:",
    list: [
      "OUT (Fora): O piloto abandonou a corrida (DNF - Did Not Finish). Pode ter batido o carro ou sofrido uma quebra de motor/câmbio.",
      "PIT: O piloto está atualmente transitando pela área dos boxes (Pit Lane) para trocar pneus ou abandonar.",
      "IN PIT: O carro já está parado na garagem."
    ],
    detail: "Quando um piloto está 'OUT', bandeiras amarelas ou o Safety Car costumam ser acionados."
  }
];

export default function TvGraphics() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-fade-in w-full pb-20">
      
      {/* 📺 HERO BANNER INTERNO */}
      <section className="relative w-full h-[50vh] flex flex-col justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1541348263662-e068fc6ce14a?q=80&w=1920&auto=format&fit=crop" 
          alt="Visão on-board de F1" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-30 blur-[2px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0c] via-black/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-10">
          <p className="text-[#E10600] text-xs font-bold uppercase tracking-[0.3em] mb-3 border-l-2 border-[#E10600] pl-3">
            O Segredo da Transmissão
          </p>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic">
            Entenda a Tela
          </h1>
          <p className="text-zinc-400 mt-4 max-w-xl text-sm leading-relaxed">
            Aprenda a ler a famosa "Torre de Tempos". Saber interpretar os intervalos e as cores dos relógios é o que transforma você em um estrategista de corrida.
          </p>
        </div>
      </section>

      {/* 📊 GRID EXPLICATIVO DA TELA */}
      <section className="max-w-7xl mx-auto px-6 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tvData.map((item, index) => (
            <div 
              key={index} 
              className="bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/80 rounded-xl p-8 hover:border-zinc-500 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">{item.icon}</span>
                <div>
                  <h3 className="text-2xl font-black uppercase italic tracking-wide text-white">
                    {item.title}
                  </h3>
                  <span className="text-xs font-bold text-[#E10600] uppercase tracking-widest mt-1 block">
                    {item.highlight}
                  </span>
                </div>
              </div>

              <div className="space-y-4 flex-grow mt-4">
                <p className="text-zinc-300 text-sm leading-relaxed">
                  {item.description}
                </p>
                
                {/* Se houver lista de exemplos (cores ou status), renderiza aqui */}
                {item.list && (
                  <ul className="space-y-2 mt-2">
                    {item.list.map((li, i) => (
                      <li key={i} className="text-sm text-zinc-400 flex items-start gap-2">
                        <span className="text-[#E10600] mt-1">▹</span> {li}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800/50">
                <p className="text-xs text-zinc-500 font-medium bg-black/30 p-3 rounded-lg border border-zinc-800">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}