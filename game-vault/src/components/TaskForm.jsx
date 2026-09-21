import { useState } from "react";

function TaskForm({ onAdicionar }) {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("RPG");
  const [status, setStatus] = useState("Jogando");

  function aoEnviar(evento) {
    evento.preventDefault();
    if (titulo.trim() === "") return;
    onAdicionar({ titulo, categoria, status });
    setTitulo("");
  }

  return (
    <form
      onSubmit={aoEnviar}
      className="bg-white rounded-xl shadow-md p-5 mb-8 flex flex-wrap gap-3 items-end"
    >
      <div className="flex-1 min-w-[200px]">
        <label
          htmlFor="campo-titulo"
          className="block text-sm font-semibold text-slate-700 mb-1"
        >
          Novo jogo
        </label>
        <input
          id="campo-titulo"
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Título do jogo"
          className="w-full border border-slate-300 rounded-lg px-3 py-2 text-slate-800 placeholder-slate-400 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
        />
      </div>

      <div>
        <label
          htmlFor="campo-categoria"
          className="block text-sm font-semibold text-slate-700 mb-1"
        >
          Gênero
        </label>
        <select
          id="campo-categoria"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          className="border border-slate-300 rounded-lg px-3 py-2 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
        >
          <option value="RPG">RPG</option>
          <option value="Metroidvania">Metroidvania</option>
          <option value="Soulslike">Soulslike</option>
          <option value="Ação">Ação</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="campo-status"
          className="block text-sm font-semibold text-slate-700 mb-1"
        >
          Status
        </label>
        <select
          id="campo-status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border border-slate-300 rounded-lg px-3 py-2 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
        >
          <option value="Zerado">Zerado</option>
          <option value="Jogando">Jogando</option>
          <option value="Na Fila">Na Fila</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-5 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-700"
      >
        + Adicionar
      </button>
    </form>
  );
}

export default TaskForm;