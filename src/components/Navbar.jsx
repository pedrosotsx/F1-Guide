import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 border-b border-white/10 bg-gradient-to-b from-black/60 to-transparent">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo Oficial + Guide */}
        <Link to="/" className="text-xl font-bold tracking-[0.2em] uppercase text-white flex items-center gap-3">
          <img 
            src="/f1logo.png" 
            alt="F1 Logo" 
            className="h-5 md:h-6 object-contain" 
          />
          <span className="text-zinc-300 font-medium mt-1">Guide</span>
        </Link>

        {/* Links de Navegação */}
        <div className="hidden md:flex gap-10 text-xs font-semibold uppercase tracking-widest text-zinc-300">
          <Link to="/bandeiras" className="hover:text-white transition-colors duration-300">Bandeiras</Link>
          <Link to="/pneus" className="hover:text-white transition-colors duration-300">Pneus</Link>
          <Link to="/regras" className="hover:text-white transition-colors duration-300">Regras</Link>
          <Link to="/tela" className="hover:text-white transition-colors duration-300">Painel da TV</Link>
        </div>

      </div>
    </nav>
  );
}