function GameCard({ titulo, categoria, plataforma, status }) {
  // Desafio Extra: muda a cor do indicador lateral/status conforme o status do jogo
  const statusColors = {
    "Zerado": "bg-emerald-500 text-emerald-950",
    "Jogando": "bg-amber-400 text-amber-950",
    "Na Fila": "bg-slate-300 text-slate-900",
  };

  const statusStyle = statusColors[status] || "bg-gray-300 text-gray-900";

  return (
    <div className="bg-[#aaaaaa] text-white rounded-md p-4 flex justify-between items-center shadow">
      <div className="flex flex-col">
        <span className="font-semibold text-lg leading-tight">{titulo}</span>
        <span className="text-xs text-slate-200 mt-1">
          {categoria} • {plataforma}
        </span>
      </div>

      <span className={`text-xs px-3 py-1 rounded-full font-bold ${statusStyle}`}>
        {status}
      </span>
    </div>
  );
}

export default GameCard;