import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0c] border-t border-zinc-800/60 pt-12 pb-8 mt-auto w-full z-10 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Topo do Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          
          {/* Logo Oficial + Guide no Footer */}
          <Link to="/" className="text-2xl font-black tracking-[0.2em] uppercase text-white flex items-center gap-3 italic">
            <img 
              src="/f1logo.png" 
              alt="F1 Logo" 
              className="h-8 object-contain" 
            />
            <span className="text-zinc-500 font-medium mt-1">Guide</span>
          </Link>

          {/* Links de Navegação */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-semibold uppercase tracking-widest text-zinc-400">
            <Link to="/bandeiras" className="hover:text-white transition-colors duration-300">Bandeiras</Link>
            <Link to="/pneus" className="hover:text-white transition-colors duration-300">Pneus</Link>
            <Link to="/regras" className="hover:text-white transition-colors duration-300">Regras</Link>
            <Link to="/tela" className="hover:text-white transition-colors duration-300">Painel da TV</Link>
          </div>
        </div>

        {/* Linha Divisória com Gradiente */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent mb-8"></div>

        {/* Assinatura */}
        <div className="text-center text-zinc-500 text-xs font-medium tracking-wide">
          <p>
            Desenvolvido com <span className="text-[#E10600]">Carinho</span> por <span className="text-zinc-300 font-bold uppercase tracking-widest">Pedro D'almeida</span>
          </p>
          <p className="mt-2 opacity-40">© 2026 F1 Guide. Todos os direitos reservados.</p>
        </div>

      </div>
    </footer>
  );
}