import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import AppRoutes from './routes/AppRoutes';
import Footer from './components/Footer'; // Importando o Footer

export function App() {
  return (
    <BrowserRouter>
      {/* Adicionei flex e flex-col para estruturar o layout, min-h-screen já estava aí */}
      <div className="min-h-screen flex flex-col bg-[#0a0a0c] text-zinc-100 font-sans">
        <Navbar />
        
        {/* Adicionei flex-grow para que o conteúdo principal ocupe todo o espaço livre, empurrando o Footer para baixo */}
        <main className="flex-grow">
          <AppRoutes />
        </main>

        {/* O Footer no final de tudo */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
