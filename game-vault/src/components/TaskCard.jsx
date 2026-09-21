const statusEstilo = {
  // Status de jogos
  Zerado: "bg-emerald-100 text-emerald-800",
  Jogando: "bg-yellow-100 text-yellow-800",
  "Na Fila": "bg-slate-200 text-slate-800",
  // Suporte a prioridades se fornecidas
  alta: "bg-red-100 text-red-700",
  media: "bg-yellow-100 text-yellow-800",
  baixa: "bg-emerald-100 text-emerald-700",
};

function TaskCard({ titulo, categoria, status, prioridade, concluida, onToggle, onRemover }) {
  const badgeChave = status || prioridade || "Jogando";
  const badgeEstilo = statusEstilo[badgeChave] || "bg-slate-200 text-slate-800";

  return (
    <article
      className={`rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow border ${
        concluida ? "bg-slate-50 border-slate-200" : "bg-white border-slate-100"
      }`}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs uppercase tracking-wide text-slate-500 font-semibold">
          {categoria}
        </span>
        <span className={`text-xs font-bold px-3 py-1 rounded-full ${badgeEstilo}`}>
          {badgeChave}
        </span>
      </div>

      <h2
        className={`text-lg font-semibold mb-4 ${
          concluida ? "text-slate-500 line-through" : "text-slate-800"
        }`}
      >
        {titulo}
      </h2>

      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
          <input
            type="checkbox"
            checked={concluida}
            onChange={onToggle}
            className="w-4 h-4 accent-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-1"
          />
          Zerado
        </label>

        <button
          type="button"
          onClick={onRemover}
          aria-label={`Remover jogo: ${titulo}`}
          className="text-xs text-red-600 hover:text-red-800 font-semibold focus:outline-none focus:ring-2 focus:ring-red-600 rounded px-1"
        >
          Remover
        </button>
      </div>
    </article>
  );
}

export default TaskCard;
