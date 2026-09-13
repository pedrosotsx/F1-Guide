import { useEffect } from 'react';

// Dados do Glossário F1
const glossaryData = [
  {
    term: "DRS",
    fullName: "Drag Reduction System (Sistema de Redução de Arrasto)",
    definition: "É a asa traseira móvel do carro. Quando aberta, reduz a resistência do ar e dá ao carro cerca de 15 km/h a 20 km/h a mais de velocidade final na reta.",
    rules: "Só pode ser usado em zonas específicas da pista e APENAS se o piloto estiver a menos de 1 segundo do carro da frente na hora da medição.",
    tvTip: "Na TV você vai ouvir: 'Fulano abriu a asa', 'Entrou na zona de DRS'."
  },
  {
    term: "Safety Car (SC)",
    fullName: "Carro de Segurança",
    definition: "Um carro físico (geralmente um Aston Martin ou Mercedes) que entra na pista após acidentes grandes ou chuva forte. A corrida é neutralizada.",
    rules: "É proibido ultrapassar. Os carros devem formar uma fila indiana atrás do SC e o ritmo da corrida cai muito, juntando todos os pilotos novamente.",
    tvTip: "Na TV você vai ouvir: 'Lá vem o carro de segurança', 'Pelotão se juntou'."
  },
  {
    term: "VSC",
    fullName: "Virtual Safety Car",
    definition: "Usado para incidentes menores, onde não é preciso o carro físico na pista, mas os pilotos precisam reduzir a velocidade por segurança (ex: um carro parado na grama).",
    rules: "A direção de prova define um tempo limite (Delta) e todos os pilotos devem reduzir a velocidade em cerca de 30%. As distâncias entre os carros se mantêm iguais.",
    tvTip: "Na TV você vai ouvir: 'Pilotos dentro do delta', 'Janela de box barata'."
  },
  {
    term: "Slipstream",
    fullName: "O famoso 'Vácuo'",
    definition: "É o efeito aerodinâmico criado quando um piloto cola na traseira de outro nas retas. O carro da frente 'corta' o ar, deixando um bolsão de baixa pressão atrás.",
    rules: "O piloto de trás enfrenta muito menos resistência do ar, ganhando muita velocidade extra para tentar uma ultrapassagem no final da reta.",
    tvTip: "Na TV você vai ouvir: 'Pegou o vácuo', 'Sugou e passou'."
  },
  {
    term: "Track Limits",
    fullName: "Limites de Pista",
    definition: "As famosas linhas brancas que desenham o contorno da pista. O carro deve sempre manter pelo menos uma das rodas dentro dessa linha.",
    rules: "Passar com as 4 rodas fora da linha deleta o tempo da volta (nos treinos). Na corrida, após 3 avisos, o piloto toma uma punição de 5 segundos.",
    tvTip: "Na TV você vai ouvir: 'Volta deletada', 'Tomou advertência'."
  },
  {
    term: "Parc Fermé",
    fullName: "Parque Fechado",
    definition: "Regra rigorosa da FIA. Após o início da classificação (Quali), os carros entram em regime de parque fechado.",
    rules: "As equipes são estritamente proibidas de fazer grandes alterações na configuração dos carros (suspensão, asas, motor) até o fim da corrida no domingo.",
    tvTip: "Na TV você vai ouvir: 'Quebrou o parque fechado e vai largar do pit lane'."
  }
];

export default function Glossary() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-fade-in w-full pb-20">
      
      {/* 📖 HERO BANNER INTERNO */}
      <section className="relative w-full h-[50vh] flex flex-col justify-center overflow-hidden">
        {/* Imagem que lembra disputa na pista/velocidade */}
        <img 
          src="https://images.unsplash.com/photo-1541348263662-e068fc6ce14a?q=80&w=1920&auto=format&fit=crop" 
          alt="Carros de F1 em disputa" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-40 blur-[1px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0c] via-black/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-10">
          <p className="text-[#E10600] text-xs font-bold uppercase tracking-[0.3em] mb-3 border-l-2 border-[#E10600] pl-3">
            O Dicionário da Pista
          </p>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic">
            Glossário & Regras
          </h1>
          <p className="text-zinc-400 mt-4 max-w-xl text-sm leading-relaxed">
            Seja um especialista durante as transmissões. Entenda exatamente o que os narradores estão falando e domine as regras que ditam o ritmo da corrida.
          </p>
        </div>
      </section>

      {/* 📚 GRID DE TERMOS */}
      <section className="max-w-7xl mx-auto px-6 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {glossaryData.map((item, index) => (
            <div 
              key={index} 
              className="bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/80 rounded-xl p-8 hover:border-[#E10600]/50 transition-all duration-300 group flex flex-col"
            >
              {/* Cabeçalho do Card */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-black uppercase italic text-white tracking-wide group-hover:text-[#E10600] transition-colors">
                    {item.term}
                  </h3>
                  <span className="text-sm font-bold text-zinc-500 uppercase tracking-widest mt-1 block">
                    {item.fullName}
                  </span>
                </div>
                <div className="text-4xl opacity-50 grayscale group-hover:grayscale-0 transition-all">
                  {item.icon}
                </div>
              </div>

              {/* Corpo de Texto */}
              <div className="space-y-4 flex-grow">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-600 block mb-1">O que é:</span>
                  <p className="text-zinc-300 text-sm leading-relaxed">{item.definition}</p>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-600 block mb-1">A Regra:</span>
                  <p className="text-zinc-400 text-sm leading-relaxed border-l-2 border-zinc-700 pl-3">{item.rules}</p>
                </div>
              </div>

              {/* Dica da Transmissão (Rodapé do Card) */}
              <div className="mt-6 pt-4 border-t border-zinc-800">
                <p className="text-xs font-semibold text-zinc-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                  <span className="text-zinc-500 italic">TRANSMISSÃO:</span> {item.tvTip}
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
}