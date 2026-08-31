import Header from "./components/Header";
import GameCard from "./components/GameCard";
import Footer from "./components/Footer";

function App() {
  const jogos = [
    { id: 1, titulo: "The Witcher 3", categoria: "RPG", plataforma: "PC / Console", status: "Zerado" },
    { id: 2, titulo: "Hollow Knight", categoria: "Metroidvania", plataforma: "PC", status: "Jogando" },
    { id: 3, titulo: "Elden Ring", categoria: "Soulslike", plataforma: "Console", status: "Na Fila" },
    { id: 4, titulo: "Cyberpunk 2077", categoria: "RPG", plataforma: "PC", status: "Zerado" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-sans">
      <Header />
    <main className="flex-1 max-w-2xl w-full mx-auto p-6 flex flex-col items-center">
        {/* 
          Os botões superiores foram comentados corretamente abaixo:

          <div className="flex gap-16 my-4">
            <button className="bg-[#4a7cb0] hover:bg-[#3b6694] text-white px-6 py-2 rounded shadow font-medium">
              Em Progresso
            </button>
            <button className="bg-[#4a7cb0] hover:bg-[#3b6694] text-white px-6 py-2 rounded shadow font-medium">
              Concluídos
            </button>
          </div>
        */}

        {/* Título da tabela */}
        <h2 className="text-lg font-bold tracking-wider uppercase mt-4 mb-2 text-center">
          CATÁLOGO DE JOGOS
        </h2>
        <hr className="w-full border-slate-200 mb-6" />

        {/* Lista de cards em coluna única (.map() com key) */}
        <div className="w-full flex flex-col gap-4">
          {jogos.map((jogo) => (
            <GameCard
              key={jogo.id}
              titulo={jogo.titulo}
              categoria={jogo.categoria}
              plataforma={jogo.plataforma}
              status={jogo.status}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;