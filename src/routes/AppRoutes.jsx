import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home'; // Importando a página que acabamos de criar
import Flags from '../pages/Flags';
import Tires from '../pages/Tires';
import Glossary from '../pages/Glossary';
import TvGraphics from '../pages/TvGraphics';

// Placeholders para as outras páginas (vamos substituir em breve)
const Feedback = () => <h1 className="text-3xl font-bold mt-10">Caixa de Sugestões</h1>;

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bandeiras" element={<Flags />} />
      <Route path="/pneus" element={<Tires />} />
      <Route path="/regras" element={<Glossary />} />
      <Route path="/tela" element={<TvGraphics />} />
      <Route path="/sugestoes" element={<Feedback />} />
    </Routes>
  );
}