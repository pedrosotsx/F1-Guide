import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import wp from '../../public/f1wal.jpg';

// 🌍 Dicionário Automático de Imagens por País (Mapeado pelo nome que a API retorna)
const circuitImages = {
  "Spain": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "Italy": "https://images.unsplash.com/photo-1523351421447-074900aef7be?q=80&w=1000&auto=format&fit=crop",
  "Brazil": "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=1000&auto=format&fit=crop",
  "Monaco": "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1000&auto=format&fit=crop",
  "USA": "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1000&auto=format&fit=crop",
  "Singapore": "https://images.unsplash.com/photo-1574768395568-15b630e6a88b?q=80&w=1000&auto=format&fit=crop",
  "Default": "https://images.unsplash.com/photo-1541348263662-e068fc6ce14a?q=80&w=1000&auto=format&fit=crop" 
};

export default function Home() {
  // 1. Estados da API
  const [topDrivers, setTopDrivers] = useState([]);
  const [topConstructors, setTopConstructors] = useState([]);
  const [activeTab, setActiveTab] = useState('drivers'); // Controle do Toggle
  
  const [nextRace, setNextRace] = useState({
    country: "...", gpName: "Buscando...", circuit: "...", date: "...",
    image: circuitImages["Default"]
  });

  const [lastPodium, setLastPodium] = useState({ raceName: "Carregando...", results: [] });

  // 2. Buscando tudo ao carregar a página
  useEffect(() => {
    // Top Pilotos
    fetch('https://api.jolpi.ca/ergast/f1/current/driverStandings.json')
      .then(res => res.json())
      .then(data => {
        const standings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        setTopDrivers(standings.slice(0, 5).map(driver => ({
          pos: driver.position,
          name: `${driver.Driver.givenName.charAt(0)}. ${driver.Driver.familyName}`,
          team: driver.Constructors[0].name,
          points: driver.points
        })));
      }).catch(console.error);

    // Top Equipes (Construtores)
    fetch('https://api.jolpi.ca/ergast/f1/current/constructorStandings.json')
      .then(res => res.json())
      .then(data => {
        const standings = data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
        setTopConstructors(standings.slice(0, 5).map(team => ({
          pos: team.position,
          name: team.Constructor.name,
          points: team.points
        })));
      }).catch(console.error);

    // Próxima Corrida (Com mapeamento automático de imagem)
    fetch('https://api.jolpi.ca/ergast/f1/current/next.json')
      .then(res => res.json())
      .then(data => {
        const race = data.MRData.RaceTable.Races[0];
        if (race) {
          const dateObj = new Date(`${race.date}T${race.time || '00:00:00Z'}`);
          const countryName = race.Circuit.Location.country;
          const imageUrl = circuitImages[countryName] || circuitImages["Default"];

          setNextRace({
            country: countryName,
            gpName: race.raceName,
            circuit: race.Circuit.circuitName,
            date: dateObj.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long' }),
            image: imageUrl
          });
        }
      }).catch(console.error);

    // Último Resultado (Pódio)
    fetch('https://api.jolpi.ca/ergast/f1/current/last/results.json')
      .then(res => res.json())
      .then(data => {
        const race = data.MRData.RaceTable.Races[0];
        if (race) {
          const results = race.Results.slice(0, 3).map(r => ({
            pos: r.position,
            name: `${r.Driver.givenName.charAt(0)}. ${r.Driver.familyName}`,
            team: r.Constructor.name
          }));
          setLastPodium({ raceName: race.raceName, results });
        }
      }).catch(console.error);
  }, []);

  return (
    <div className="animate-fade-in w-full">
      
      {/* 🏎️ HERO SECTION */}
      <section className="relative w-full h-screen flex flex-col justify-center">
        <img src={wp} alt="F1 Background" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-20">
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] uppercase">
            Sinta a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">Velocidade</span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 max-w-4xl">
            <div>
              <p className="text-zinc-400 text-sm mb-4 leading-relaxed">Tudo que você precisa saber para acompanhar cada volta no domingo.</p>
              {/* Botão funcional levando para Bandeiras */}
              <Link to="/bandeiras" className="inline-block text-[#E10600] text-xs font-bold uppercase tracking-widest border-b border-[#E10600] pb-1 hover:text-white hover:border-white transition-colors">
                Descubra mais →
              </Link>
            </div>
            <div className="hidden md:block">
              <p className="text-zinc-400 text-sm mb-4 leading-relaxed">Estratégias de box, DRS, tipos de compostos e o glossário completo.</p>
              {/* Botão funcional levando para Regras/Glossário */}
              <Link to="/regras" className="inline-block text-white text-xs font-bold uppercase tracking-widest border-b border-white pb-1 opacity-50 hover:opacity-100 transition-opacity">
                Explorar →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ⏱️ DASHBOARD DA TEMPORADA */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Grid agora com 3 colunas iguais no Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Próxima Corrida (Com imagem automatizada) */}
          <div className="relative rounded-xl overflow-hidden group border border-zinc-800/80 min-h-[350px]">
            <img src={nextRace.image} alt="Next Race" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
            <div className="relative z-10 p-6 flex flex-col h-full justify-end">
              <span className="bg-[#E10600] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-sm w-max mb-3 animate-pulse">
                Próxima Etapa
              </span>
              <h2 className="text-3xl font-black uppercase italic tracking-tighter text-white mb-1 leading-tight">
                {nextRace.gpName}
              </h2>
              <div className="mt-2 space-y-1">
                <p className="text-zinc-300 text-sm font-medium flex items-center gap-2">📍 {nextRace.circuit}</p>
                <p className="text-zinc-300 text-sm font-medium flex items-center gap-2">📅 {nextRace.date}</p>
              </div>
            </div>
          </div>

          {/* Card 2: Pódio da Última Corrida */}
          <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/80 rounded-xl p-6 flex flex-col">
            <h3 className="text-lg font-bold uppercase tracking-widest text-white mb-4 border-b border-zinc-800 pb-3 flex items-center gap-2">
              <span>🏁</span> Última Corrida
            </h3>
            <p className="text-xs text-zinc-500 uppercase tracking-widest mb-4">{lastPodium.raceName}</p>
            
            <div className="flex flex-col gap-3">
              {lastPodium.results.map((r, index) => (
                <div key={index} className="flex items-center gap-4 bg-black/40 p-3 rounded-lg border border-zinc-800/50">
                  <span className={`text-xl font-black italic ${r.pos === "1" ? 'text-yellow-500' : r.pos === "2" ? 'text-zinc-400' : 'text-orange-700'}`}>
                    P{r.pos}
                  </span>
                  <div>
                    <p className="text-zinc-200 font-bold uppercase tracking-wide text-sm">{r.name}</p>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest">{r.team}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Classificação (Com Toggle) */}
          <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/80 rounded-xl p-6 flex flex-col">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4">
              <h3 className="text-lg font-bold uppercase tracking-widest text-white flex items-center gap-2">
                <span className="text-[#E10600]">🏆</span> Standings
              </h3>
              
              {/* BOTOES DO TOGGLE */}
              <div className="flex gap-1 bg-black/40 p-1 rounded-md border border-zinc-800">
                <button 
                  onClick={() => setActiveTab('drivers')}
                  className={`text-[10px] font-bold uppercase px-2 py-1 rounded transition-colors ${activeTab === 'drivers' ? 'bg-[#E10600] text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
                >
                  Pilotos
                </button>
                <button 
                  onClick={() => setActiveTab('constructors')}
                  className={`text-[10px] font-bold uppercase px-2 py-1 rounded transition-colors ${activeTab === 'constructors' ? 'bg-[#E10600] text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
                >
                  Equipes
                </button>
              </div>
            </div>
            
            {/* LISTA RENDERIZADA DINAMICAMENTE */}
            <div className="flex flex-col gap-3 mt-2">
              {(activeTab === 'drivers' ? topDrivers : topConstructors).map((item, index) => (
                <div key={index} className="flex items-center justify-between group">
                  <div className="flex items-center gap-4">
                    <span className={`text-lg font-black italic w-6 text-center ${item.pos.toString() === "1" ? 'text-[#E10600]' : 'text-zinc-600'}`}>
                      {item.pos}
                    </span>
                    <div>
                      <p className="text-zinc-200 font-bold uppercase tracking-wide text-sm group-hover:text-white transition-colors">
                        {item.name}
                      </p>
                      {item.team && <p className="text-[10px] text-zinc-500 uppercase tracking-widest">{item.team}</p>}
                    </div>
                  </div>
                  <span className="text-white font-black bg-zinc-800 px-2 py-1 rounded text-xs">
                    {item.points} <span className="text-zinc-500 text-[9px]">PTS</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 📸 SEÇÃO DE CARDS COM IMAGENS */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <p className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em] mb-2">Guias Essenciais</p>
          <h2 className="text-3xl font-bold uppercase tracking-widest">Escolha seu Tópico</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            { to: "/bandeiras", title: "Bandeiras", img: "/bandeira.jpg" },
            { to: "/pneus", title: "Pneus & Box", img: "/pneu.jpg" },
            { to: "/regras", title: "Glossário", img: "/blueprint.png" },
            { to: "/tela", title: "Gráficos da TV", img: "/gra.png" },
          ].map((item, index) => (
            <Link key={item.to} to={item.to} className="relative h-[450px] group overflow-hidden rounded-sm cursor-pointer border border-zinc-800/50">
              <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-zinc-400 text-xs font-bold tracking-widest mb-2">GUIA Nº{index + 1}</p>
                <h3 className="text-xl font-bold uppercase tracking-wider text-white mb-2">{item.title}</h3>
                <p className="text-zinc-500 text-[10px] uppercase tracking-widest">Toque para explorar</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}