import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskForm from "./components/TaskForm";
import TaskCard from "./components/TaskCard";

const FILTROS = [
  { valor: "todas", rotulo: "Todas" },
  { valor: "jogando", rotulo: "Jogando" },
  { valor: "zerados", rotulo: "Zerados" },
];

const JOGOS_INICIAIS = [
  { id: 1, titulo: "The Witcher 3", categoria: "RPG", status: "Zerado", concluida: true },
  { id: 2, titulo: "Hollow Knight", categoria: "Metroidvania", status: "Jogando", concluida: false },
  { id: 3, titulo: "Elden Ring", categoria: "Soulslike", status: "Na Fila", concluida: false },
  { id: 4, titulo: "Cyberpunk 2077", categoria: "RPG", status: "Zerado", concluida: true },
];

function App() {
  const [jogos, setJogos] = useState(() => {
    const salvos = localStorage.getItem("gamevault-jogos");
    return salvos ? JSON.parse(salvos) : JOGOS_INICIAIS;
  });
  const [filtro, setFiltro] = useState("todas");

  useEffect(() => {
    localStorage.setItem("gamevault-jogos", JSON.stringify(jogos));
  }, [jogos]);

  const jogosFiltrados = jogos.filter((j) => {
    if (filtro === "jogando") return j.status === "Jogando";
    if (filtro === "zerados") return j.concluida === true;
    return true;
  });

  function adicionarJogo(novo) {
    const jogo = {
      id: Date.now(),
      titulo: novo.titulo,
      categoria: novo.categoria,
      status: novo.status,
      concluida: novo.status === "Zerado",
    };
    setJogos((atual) => [jogo, ...atual]);
  }

  function alternarZerado(id) {
    setJogos((atual) =>
      atual.map((j) => (j.id === id ? { ...j, concluida: !j.concluida } : j))
    );
  }

  function removerJogo(id) {
    setJogos((atual) => atual.filter((j) => j.id !== id));
  }

  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-sans">
      <Header />
      <main className="flex-1 max-w-2xl w-full mx-auto p-6 flex flex-col items-center">
        <h2 className="text-lg font-bold tracking-wider uppercase mt-4 mb-2 text-center">
          CATÁLOGO DE JOGOS
        </h2>
        <hr className="w-full border-slate-200 mb-6" />

        <div className="w-full mb-6">
          <TaskForm onAdicionar={adicionarJogo} />
        </div>

        <div className="w-full flex items-center justify-between mb-4">
          <span className="text-sm text-slate-300">Jogos: {jogos.length}</span>
          <div className="flex gap-2">
            {FILTROS.map((opcao) => (
              <button
                key={opcao.valor}
                onClick={() => setFiltro(opcao.valor)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors ${
                  filtro === opcao.valor
                    ? "bg-emerald-700 text-white"
                    : "bg-white text-slate-600 hover:bg-slate-200"
                }`}
              >
                {opcao.rotulo}
              </button>
            ))}
          </div>
        </div>

        <div className="w-full flex flex-col gap-4">
          {jogosFiltrados.map((jogo) => (
            <TaskCard
              key={jogo.id}
              titulo={jogo.titulo}
              categoria={jogo.categoria}
              status={jogo.status}
              concluida={jogo.concluida}
              onToggle={() => alternarZerado(jogo.id)}
              onRemover={() => removerJogo(jogo.id)}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;