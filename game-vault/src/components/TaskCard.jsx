const statusEstilo = {
  Zerado: "bg-emerald-500 text-white",
  Jogando: "bg-amber-400 text-white",
  "Na Fila": "bg-slate-300 text-slate-900",
};

function TaskCard({ titulo, categoria, status, concluida, onToggle, onRemover }) {
  return (
    <article
      className={`rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow bg-[#aaaaaa] text-white ${
        concluida ? "opacity-60" : ""
      }`}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs uppercase tracking-wide text-slate-200 font-semibold">
          {categoria}
        </span>
        <span className={`text-xs font-bold px-3 py-1 rounded-full ${statusEstilo[status]}`}>
          {status}
        </span>
      </div>

      <h2 className="text-lg font-semibold text-white mb-4">{titulo}</h2>
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 text-sm text-white cursor-pointer">
          <input
            type="checkbox"
            checked={concluida}
            onChange={onToggle}
            className="w-4 h-4 accent-emerald-700"
          />
          Zerado
        </label>

        <button
          onClick={onRemover}
          className="text-xs text-red-300 hover:text-red-500 font-semibold"
        >
          Remover
        </button>
      </div>
    </article>
  );
}

export default TaskCard;
